import { Box, Card, Chip, List, ListItem, Stack, Typography } from '@mui/joy';
import React, { useMemo } from 'react';
import { format, formatDuration, intervalToDuration } from 'date-fns'
import { Vaccines } from '@mui/icons-material';
import { ProceduresRecord, ScheduleItemsRecord } from '../../pocketbase-types';
import { Link } from 'react-router-dom';

type Props = {
    item: any
}
const AdminItem = ({ item = [] }: Props) => {

    // x hour y mins using start and end and date-fns


    const caseDetails = item.expand.case


    return (<Link to={`/cases/details/${caseDetails?.id}`} style={{
        textDecoration: 'none',
        color: 'inherit'
    }}>
        <Card>


            <Stack direction='row' gap={1} justifyContent="space-between" >
                <Box>
                    <Typography level='h4'>
                        {caseDetails?.first_name} {caseDetails?.last_name}
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography level="body-sm">SSN: {caseDetails.ssn}</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography level="body-sm">Assigned At: {format(new Date(item.created), 'yyyy-MM-dd HH:mm:ss')}</Typography>
                        <Typography level="body-sm">Task Note: {item.meta.note}</Typography>
                        {/* Add more task details as needed */}
                    </Box>

                </Box>

            </Stack>






        </Card></Link>
    );
};

export default AdminItem;
