

import React from 'react';
import Header from './components/Header';

import SidebarNew from './components/SidebarNew';
import OrderTable from './views/cases/CasesTable';
import OrderList from './components/OrderList';
import menuItems from './nav';
import Box from '@mui/joy/Box';

import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Button from '@mui/joy/Button';
import AppContent from './AppContent';

export default function AppLayout() {
    return (
        <>
            <Header />
            <SidebarNew menuItems={menuItems} />
            <AppContent />
        </>
    );
}
