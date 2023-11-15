import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderTable from "../../components/OrderTable";
import OrderList from "../../components/OrderList";
import { Box, Button, Typography } from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { downloadCSV } from "./Utils";

export default function Orders() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      if (!process.env.REACT_APP_API_URL || !process.env.REACT_APP_AUTH_TOKEN) {
        console.log("API URL or Token is undefined");
        return;
      }

      const apiUrl = process.env.REACT_APP_API_URL;
      const authToken = process.env.REACT_APP_AUTH_TOKEN;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            Authorization: authToken,
          },
        });
        setPatients(response.data.items);
      } catch (err) {
        console.error("Error fetching patients:", err);
      }
    }

    fetchPatients();
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
        <Typography level="h2">Patients</Typography>
        <Button
          color="primary"
          startDecorator={<DownloadRoundedIcon />}
          size="sm"
          onClick={handleDownloadAll}
        >
          Download CSV
        </Button>
      </Box>
      <OrderTable patients={patients} />
      <OrderList />
    </>
  );
}
