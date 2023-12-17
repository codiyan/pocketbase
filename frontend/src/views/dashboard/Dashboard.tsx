import React, { useState } from "react";
import { Card, Box, Typography } from "@mui/joy";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";

import Button from "@mui/joy/Button";
import ToggleButtonGroup from "@mui/joy/ToggleButtonGroup";

const icon = {
  Views: <VisibilityOutlinedIcon />,
  Clients: <PersonOutlineOutlinedIcon />,
  Purchases: <CheckIcon />,
};

function DashboardStats() {
  const [value, setValue] = useState("week");

  const stats = [
    { title: "Views", count: 31, change: "+3" },
    { title: "Clients", count: 63, change: "+1" },
    { title: "Purchases", count: 10, change: "+1" },
  ];
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
              <Typography level="body-sm">{stat.change} last day</Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default DashboardStats;
