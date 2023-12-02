import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderTable from "./CasesTable";
import OrderList from "../../components/OrderList";
import { pb } from "../../services/pocketbase";
import {
  Box,
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
} from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { downloadCSV } from "../../lib/utils";
import NewPatient from "./NewPatient";
import { Link, Route, Routes } from "react-router-dom";

export default function Cases() {
  const [patients, setPatients] = useState([{ id: "", name: "", dob: "", status: ""}]);

  // write a function to convert 2023-11-01 12:00:00.000Z to 2023-11-01
  const convertDate = (date: string) => {
    const dateArray = date.split(" ");
    return dateArray[0];
  };

  const getList = async () => {
    const records = await pb.collection("cases").getFullList({
      sort: "-created",requestKey:"null",
    });
    console.log(records);
    // create an array of jsons of records using only id, name, dob, status
    const patients = records.map((record) => {
      return {
        id: record.id,
        name: record.first_name + " " + record.last_name,
        dob: convertDate(record.dob),
        status: record.status,
      };
    });
    // console.log(patients);
    
    setPatients(patients);
  };

  useEffect(() => {
    getList();
  }, []);

  const handleDownloadAll = () => {
    downloadCSV(patients, "all_patients");
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          my: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2">All Cases</Typography>
        <Box display="flex" alignItems="center" gap={2}>
          <Button
            color="primary"
            startDecorator={<DownloadRoundedIcon />}
            size="sm"
            onClick={handleDownloadAll}
          >
            Download CSV
          </Button>
          <Link to="http://localhost:3000/addCase">
            <Button size="sm" color="primary">
              Add New Case
            </Button>
          </Link>
        </Box>
      </Box>
      <OrderTable patients={patients} />
      <OrderList />
      <Routes>
        <Route path="/new" element={<NewPatient />} />
      </Routes>
    </>
  );
}
