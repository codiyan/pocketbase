import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import OrderTable from "../cases/CasesTable";
import OrderList from "../../components/OrderList";
import { Box, Button, Stack, Typography } from "@mui/joy";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { downloadCSV } from "../../lib/utils";
import AssignedAppointmentsTable from "./AssignedAppointmentsTable";
import { Close, DisabledByDefault } from "@mui/icons-material";
import { ListResult, RecordModel } from "pocketbase";
import { endOfWeek, startOfWeek } from "date-fns";
import { pb } from "../../services/pocketbase";
import { CaseActivityItemResponse, CasesResponse, ScheduleItemsResponse } from "../../pocketbase-types";
import ScheduledItem from "./AssignedAppointmentsTable";
import AdminItem from "./AdminItem";

export default function AssignedAppointments() {


  const [result, setResult] = React.useState<ListResult<ScheduleItemsResponse>>()
  const [activityItems, setActivityItems] = React.useState<any>()
  const [isSurgeon, setIsSurgeon] = React.useState(false);

  const [range, setRange] = React.useState({
    start: startOfWeek(new Date()).toISOString(),
    end: endOfWeek(new Date()).toISOString(),
  })


  useEffect(() => {

    // find schedule items for this user
    if (!pb.authStore.model) {
      return
    }
    if (pb.authStore.model?.role === 'Surgeon') {
      setIsSurgeon(true)
      pb.collection('schedule_items').getList(1, 50, {
        filter: `user.id = "${pb.authStore.model?.id}" && type = "surgery"`,
        expand: `case,procedures`
      })
        .then((items) => {
          setResult(items)
        })
        .catch((error) => {
          console.error(error)
        })
    }
    else {
      pb.collection('case_activity_item').getFullList({
        filter: `assigned_to = "${pb.authStore.model?.id}" `,
        expand: `case`

      })
        .then((items) => {

          setActivityItems(items)

        })
        .catch((error) => {
          console.error(error)
        })


    }
  }, [])


  const scheduledItems = useMemo(() => {
    if (!result) {
      return []
    }
    return Array.from(result.items)

  }, [result])

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

        </Stack>

        {isSurgeon ?
          scheduledItems.map((item) => (
            <ScheduledItem item={item} />
          )) :
          activityItems && activityItems.map((item: any) => (
            <AdminItem item={item} />
          ))
        }
        <OrderList />
      </Stack >
    </>
  );
}
