import React, { useState, useEffect } from "react";
import axios from "axios";
import OrderTable from "../cases/CasesTable";
import OrderList from "../../components/OrderList";
import { Box, Button, Stack, Typography } from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { downloadCSV } from "../../lib/utils";
import AssignedAppointmentsTable from "./AssignedAppointmentsTable";
import { Close, DisabledByDefault } from "@mui/icons-material";

export default function AssignedAppointments() {


  return (
    <>
      <Stack
        sx={{


          gap: 2,
          maxWidth: 600,
          // mx: 'auto',
          alignItems: { xs: "stretch", sm: "stretch" },
        }}
      >
        <Stack direction='row' gap={1} justifyContent="space-between" >
          <Typography level="h2">Assigned To You</Typography>
          <Button
            color="primary"
            startDecorator={<Close />}
            size="sm"

          >
            Block Time
          </Button>
        </Stack>

        <AssignedAppointmentsTable />
        <OrderList />
      </Stack >
    </>
  );
}
