

import React, { Suspense } from 'react';
import OrderTable from '../components/OrderTable';
import OrderList from '../components/OrderList';
import menuItems from '../nav';
import Box from '@mui/joy/Box';

import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Typography from '@mui/joy/Typography';
// icons
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import Button from '@mui/joy/Button';
import { CircularProgress } from '@mui/joy';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import routes from '../routes'

export default function AppContent() {
    return (
        <>

            <Box
                component="main"
                className="MainContent"
                sx={{
                    px: {
                        xs: 2,
                        md: 6,
                    },
                    pt: {
                        xs: 'calc(12px + var(--Header-height))',
                        sm: 'calc(12px + var(--Header-height))',
                        md: 3,
                    },
                    pb: {
                        xs: 2,
                        sm: 2,
                        md: 3,
                    },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: 0,
                    height: '100dvh',
                    gap: 1,
                }}
            >

                <Suspense fallback={<CircularProgress color="primary" />}>
                    <Routes>
                        {routes.map((route, idx) => {
                            return (
                                route.element && (
                                    <Route
                                        key={idx}
                                        path={route.path}
                                        element={<route.element />}
                                    />
                                )
                            )
                        })}

                        <Route path="/" element={<Navigate to="dashboard" replace />} />
                    </Routes>
                </Suspense>

            </Box>
        </>
    );
}
