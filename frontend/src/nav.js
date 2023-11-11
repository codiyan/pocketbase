        
        
       
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { ReactNode } from 'react';



 const menuItems = [
    { icon: <HomeRoundedIcon />, label: 'Home', link: '/home' },
    { icon: <DashboardRoundedIcon />, label: 'Dashboard', link: '/dashboard' },
    { icon: <HomeRoundedIcon />,  label: ' Orders',
    link: '/orders',
    nested: true,
    submenu: [
      {icon: <DashboardRoundedIcon />,label: 'All Orders', link: '/orders' },
      {icon: <DashboardRoundedIcon />,label: 'Pending Orders', link: '/orders' },
      {icon: <DashboardRoundedIcon />,label: 'Completed Orders', link: '/orders' },
    ],
  },    
    // ... add more menu items as needed
  ];

  export default menuItems;