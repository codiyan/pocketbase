
import React from 'react';
import OrderTable from '../../components/OrderTable';
import OrderList from '../../components/OrderList';
import { Box, Button, Typography } from '@mui/joy';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
export default function Orders() {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    my: 1,
                    gap: 1,
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'start', sm: 'center' },
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                }}
            >
                <Typography level="h2">Orders</Typography>
                <Button
                    color="primary"
                    startDecorator={<DownloadRoundedIcon />}
                    size="sm"
                >
                    Download PDF
                </Button>
            </Box>
            <OrderTable />
            <OrderList />

        </>
    )
}