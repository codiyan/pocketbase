// import * as React from 'react';
import React, { Component, Suspense } from 'react'
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
//import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';

import useScript from './useScript';
import Sidebar from './components/Sidebar';
import SidebarNew from './components/SidebarNew';
import OrderTable from './components/OrderTable';
import OrderList from './components/OrderList';
import Header from './components/Header';
import menuItems from './nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
const useEnhancedEffect =
  typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect;
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress from MUI

const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const loading = (
  <div style={{ paddingTop: '3rem', textAlign: 'center' }}>
    <CircularProgress color="primary" /> {/* Use CircularProgress from MUI */}
  </div>
);

export default function App() {
  const status = useScript(`https://unpkg.com/feather-icons`);

  useEnhancedEffect(() => {
    // Feather icon setup: https://github.com/feathericons/feather#4-replace
    // @ts-ignore
    if (typeof feather !== 'undefined') {
      // @ts-ignore
      feather.replace();
    }
  }, [status]);

  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box sx={{ display: 'flex', minHeight: '100dvh' }}>

        <BrowserRouter>
          <Suspense fallback={loading}></Suspense>
          <Routes>
            <Route path="*" element={<DefaultLayout />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </CssVarsProvider>
  );
}




