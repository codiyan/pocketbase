import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { ReactNode } from "react";
import {
  AssignmentIndRounded,
  CalendarMonthRounded,
} from "@mui/icons-material";

const menuItems = [

  {
    icon: <DashboardRoundedIcon />,
    label: "Dashboard",
    link: "/dashboard",
  },
  {
    icon: <AssignmentIndRounded />,
    label: "Assigned To Me",
    link: "/assigned",
  },
  {
    icon: <HomeRoundedIcon />,
    label: "All Cases",
    link: "/cases",
  },
  {
    icon: <CalendarMonthRounded />,
    label: "Calendar",
    link: "/calendar",
  },
 
  {
    label: "Add a Case",
    icon: <PersonAddIcon />,
    link: "/addCase",
  },
];

export default menuItems;
