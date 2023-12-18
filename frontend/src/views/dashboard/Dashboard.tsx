import React, { useEffect, useState } from "react";
import { Card, Box, Typography } from "@mui/joy";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";

import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";
import { pb } from "../../services/pocketbase";
import { CasesRecord, CasesResponse, CollectionResponses } from "../../pocketbase-types";

const icon = {
  "New Cases": <VisibilityOutlinedIcon />,
  "Pending Cases": <PersonOutlineOutlinedIcon />,
  "Scheduled Cases": <CheckIcon />,
};

function DashboardStats() {
  const [value, setValue] = useState("week");
  const [stats, setStats] = useState([
    { title: "New Cases", count: 0, change: "+0" },
    { title: "Pending Cases", count: 0, change: "+0" },
    { title: "Scheduled Cases", count: 0, change: "+0" },

  ]);
  useEffect(() => {
    const fetchCases = async () => {
      // find schedule items for this user
      // fetch cases from pocketbase based on week , month, year selected by default week
      try {
        // Calculate the start date based on the selected duration
        const currentDate = new Date();
        const startDate = new Date(currentDate);
        if (value === "week") {
          startDate.setDate(currentDate.getDate() - 7);
        } else if (value === "month") {
          startDate.setMonth(currentDate.getMonth() - 1);
        } else if (value === "year") {
          startDate.setFullYear(currentDate.getFullYear() - 1);
        }
        const cases = await pb.collection("cases").getFullList({
          filter: 'created > "' + startDate.toISOString() + '" && status != "closed" ',

        });

        const newStats = [
          { title: "New Cases", count: 0, change: "+0" },
          { title: "Pending Cases", count: 0, change: "+0" },
          { title: "Scheduled Cases", count: 0, change: "+0" },

        ];
        // const patients = cases.map((c) => c.patient);
        cases.forEach((c) => {
          if (c.status === "new") {
            newStats[0].count += 1;
          } else if (c.status === "scheduled") {
            newStats[1].count += 1;
          } else if (c.status === "pending") {
            newStats[2].count += 1;
          }
        });

        setStats(newStats);
      }

      catch (error) {
        console.log(error)
      }


    }

    fetchCases();
  }, [value])




  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mt: 2,
          mx: 2,
        }}
      >
        <Typography level="body-md" sx={{ flexGrow: 1 }}>
          Control and analyze your data in the easiest way
        </Typography>
        <ToggleButtonGroup
          value={value}
          onChange={(event, newValue) => {
            if (newValue !== null) {
              setValue(newValue);
            }
          }}
          sx={{ ml: 2 }}
        >
          <Button value="week">Week</Button>
          <Button value="month">Month</Button>
          <Button value="year">Year</Button>
        </ToggleButtonGroup>
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
          justifyContent: "center",
          gap: 2,
          mt: 12,
          padding: 1,
        }}
      >
        {stats.map((stat) => (
          <Card
            key={stat.title}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "22px",
              margin: "auto",
              width: "100%",
              maxWidth: {
                sm: 290,
                xs: "100%",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "16px",
                boxSizing: "border-box",
              }}
            >
              <Typography level="title-md">{stat.title}</Typography>
              {icon[stat.title as keyof typeof icon]}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "16px",
                boxSizing: "border-box",
              }}
            >
              <Typography
                level="h4"
                sx={{
                  fontWeight: "medium",
                  fontSize: "2.25rem",
                }}
              >
                {stat.count}
              </Typography>
              {/* <Typography level="body-sm">{stat.change} last day</Typography> */}
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default DashboardStats;
