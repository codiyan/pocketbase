// import React from "react";
// import PocketBase from "pocketbase";
// import { pb } from "../../services/pocketbase";

// const Dashboard: React.FC = () => {


//   const uploadFile = async () => {
//     const fileInput = document.getElementById("fileInput") as HTMLInputElement;

//     if (fileInput && fileInput.files && fileInput.files.length > 0) {
//       const formData = new FormData();
//       formData.append("file", fileInput.files[0]);

//       try {
//         const createdRecord = await pb.collection("waqar").create(formData);
//         console.log("createdRecord:", createdRecord);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   const downloadFile = (recordId: string, fileName: string) => {
//     // const fileUrl = `${apiURL}/api/files/waqar/${recordId}/${fileName}`;
//     // window.open(fileUrl, "_blank");
//     alert('Code was wrong for downloading')
//   };

//   return (
//     <div>
//       <input type="file" id="fileInput" accept=".pdf,.csv" />
//       <button onClick={uploadFile}>Upload File</button>
//       <button
//         onClick={() => downloadFile("kc8og6u4sgujt3h", "minder_hyqVZX1GNP.pdf")}
//       >
//         Download File
//       </button>
//     </div>
//   );
// };

// export default Dashboard;

import React from 'react';
// import {
//   Box,
//   Typography,
//   CircularProgress,
//   Card,
//   CardContent,
//   Stack
// } from '@mui/joy';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
// import CircularProgress from '@mui/joy/CircularProgress';
import Stack from '@mui/joy/Stack';



// import { PieChart, Pie, Tooltip, Cell } from 'recharts';

// Dummy data
const dashboardData = {
  totalNewPatients: 25,
  surgerySchedule: [
    { name: 'Orthopedic', value: 10 },
    { name: 'Podiatry', value: 8 },
    { name: 'Others', value: 7 },
  ],
  totalSurgeriesCompleted: 15,
  surgeonUtilization: {
    freeTime: 30,
    scheduledSurgeries: 60,
    blockedTime: 10,
  },
  doctorUtilization: [
    { name: 'Dr. Smith', utilization: 70 },
    { name: 'Dr. Johnson', utilization: 85 },
    // Add more doctors as needed
  ],
  // Add more dummy data as needed
};

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Dashboard = () => {
  return (
    <Box>
      {/* <h1>Dashboard</h1> */}

      <Typography level="h4" mb={2}>
        Surgery Software Dashboard
      </Typography>

      <Stack>
        <Box>
          <Typography level="h4">Total New Patients</Typography>
          <Typography level="h4">{dashboardData.totalNewPatients}</Typography>
        </Box>
      </Stack>
    </Box>


  );
};

export default Dashboard;
