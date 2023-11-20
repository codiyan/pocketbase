        
        
       
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import { ReactNode } from 'react';
import { AssignmentIndRounded, CalendarMonthRounded } from '@mui/icons-material';



 const menuItems = [
    { icon: <AssignmentIndRounded />, label: 'Assigned To Me', link: '/assigned' },
    { 
      icon: <HomeRoundedIcon />,  label: 'All Cases',
      link: '/cases',
    }, 
    { 
      icon: <CalendarMonthRounded />,  label: 'Calendar',
      link: '/calendar',
    },
    { 
      icon: <DashboardRoundedIcon />,  label: 'Stats',
      link: '/stats',
    }    
];

  export default menuItems;