import React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { CardHeader } from '@mui/material';
import { formatDate } from '../../../lib/utils';
import { Box } from '@mui/joy';
import { format } from 'date-fns';



// import CardHeader from '@mui/joy/CardHeader';

interface SurgeryDetailsProps {
    surgeryDetails: {
        start: string;
        end: string;

        type: string;
        duration: number;
        anesthesia_type: string;
        anesthesia_position: string;
        specialty: string;
        procedures: {
            name: string;
            site: string;
            laterality: string;
            cpt_code: string;
        }[];
    };
    surgeryDetail: any;
}

const SurgeryDetails: React.FC<SurgeryDetailsProps> = ({ surgeryDetails, surgeryDetail }) => {
    return (

        // improve styling


        <Box sx={{ width: '90%', overflowY: 'auto' }}>






            < Stack spacing={2}>
                <Typography>
                    <strong>Start Time:</strong> {format(new Date(surgeryDetail.start), 'yyyy-MM-dd HH:mm')}
                </Typography>
                <Typography>
                    <strong>End Time:</strong> {format(new Date(surgeryDetail.end), 'yyyy-MM-dd HH:mm')}
                </Typography>
                <Typography>
                    <strong>Type:</strong> {surgeryDetail.type}
                </Typography>

                <Typography>
                    <strong>Anesthesia Type:</strong> {surgeryDetail.anesthesia_type}
                </Typography>
                <Typography>
                    <strong>Anesthesia Position:</strong> {surgeryDetail.anesthesia_position}
                </Typography>
                <Typography>
                    <strong>Specialty:</strong> {surgeryDetail.specialty}
                </Typography>
                <Typography>
                    <strong>Procedures:</strong>
                </Typography>
                <Stack spacing={1} sx={{ marginLeft: '1.5em' }}>
                    {surgeryDetail?.expand.procedures.map((procedure: any, index: number) => (
                        <Typography key={index}>
                            {procedure.name} - CPT Code: {procedure.cpt_code}
                        </Typography>
                    ))}
                </Stack>
            </Stack>

        </Box >

    );
};

export default SurgeryDetails;
