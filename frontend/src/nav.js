        
        
       
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { ReactNode } from 'react';



 const menuItems = [
    { icon: <HomeRoundedIcon />, label: 'Home', link: '/home' },
    { icon: <DashboardRoundedIcon />, label: 'Dashboard', link: '/dashboard' },
    { icon: <HomeRoundedIcon />,  label: ' Nesteds',
    link: '/orders',
    nested: true,
    submenu: [
      {icon: <DashboardRoundedIcon />,label: 'All Orders', link: '/orders/all' },
      {icon: <DashboardRoundedIcon />,label: 'Pending Orders', link: '/orders/pending' },
      {icon: <DashboardRoundedIcon />,label: 'Completed Orders', link: '/orders/completed' },
    ],
  },    
    // ... add more menu items as needed
  ];

  export default menuItems;