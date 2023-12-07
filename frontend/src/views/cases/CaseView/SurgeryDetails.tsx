import React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { CardHeader } from '@mui/material';
import { formatDate } from '../../../lib/utils';

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
}

const SurgeryDetails: React.FC<SurgeryDetailsProps> = ({ surgeryDetails }) => {
    return (

        // improve styling






        <Stack spacing={2}>
            <Typography>
                <strong>Start Time:</strong> {formatDate(surgeryDetails.start)}
            </Typography>
            <Typography>
                <strong>End Time:</strong> {formatDate(surgeryDetails.end)}
            </Typography>
            <Typography>
                <strong>Type:</strong> {surgeryDetails.type}
            </Typography>
            <Typography>
                <strong>Duration:</strong> {surgeryDetails.duration} minutes
            </Typography>
            <Typography>
                <strong>Anesthesia Type:</strong> {surgeryDetails.anesthesia_type}
            </Typography>
            <Typography>
                <strong>Anesthesia Position:</strong> {surgeryDetails.anesthesia_position}
            </Typography>
            <Typography>
                <strong>Specialty:</strong> {surgeryDetails.specialty}
            </Typography>
            <Typography>
                <strong>Procedures:</strong>
            </Typography>
            <Stack spacing={1} sx={{ marginLeft: '1.5em' }}>
                {surgeryDetails.procedures.map((procedure, index) => (
                    <Typography key={index}>
                        {procedure.name} ({procedure.site}, {procedure.laterality}) - CPT Code: {procedure.cpt_code}
                    </Typography>
                ))}
            </Stack>
        </Stack>

    );
};

export default SurgeryDetails;
