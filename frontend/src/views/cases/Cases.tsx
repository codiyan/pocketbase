import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderTable from "./CasesTable";
import OrderList from "../../components/OrderList";
import { Box, Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { downloadCSV } from "../../lib/utils";
import NewPatient from "./NewPatient";
import { Link, Route, Routes } from 'react-router-dom';

export default function Cases() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {

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
          <Link to="new">
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
