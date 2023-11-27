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
  const [patients, setPatients] = useState([
    {
      id: "INV-1234",
      name: "Olivia Ryhe",
      dob: "Feb 3, 2023",
      status: "Refunded",
    },
    {
      id: "INV-1233",
      name: "Steve Hampton",
      dob: "Feb 3, 2023",
      status: "Paid",
    },
    {
      id: "INV-1232",
      name: "Ciaran Murray",
      dob: "Feb 3, 2023",
      status: "Refunded",
    },
    {
      id: "INV-1231",
      name: "Maria Macdonald",
      dob: "Feb 3, 2023",
      status: "Refunded",
    },
    {
      id: "INV-1230",
      name: "Charles Fulton",
      dob: "Feb 3, 2023",
      status: "Cancelled",
    },
  ]);

  const getList = async () => {
    const records = await pb.collection("cases").getFullList({
      sort: "-created",
    });
    console.log(records);
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
