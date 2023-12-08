import React from 'react';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { CardHeader } from '@mui/material';
import { formatDate } from '../../../lib/utils';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';

import { TabPanel } from '@mui/joy';

import Avatar from '@mui/joy/Avatar';

import ListItemContent from '@mui/joy/ListItemContent';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';


// import CardHeader from '@mui/joy/CardHeader';

interface SurgeryDetailsProps {
    surgeryDetails: {
        // start: string;
        // end: string;

        // type: string;
        duration: number;
        anesthesia_type: string;
        anesthesia_position: string;
        specialty: string;
        procedures: {
            name: string;
            // site: string;
            // laterality: string;
            cpt_code: string;
        }[];
    };
}

const SurgeryDetails: React.FC<SurgeryDetailsProps> = ({ surgeryDetails }) => {
    return (

        // improve styling
        <TabPanel value={0}>
            <AccordionGroup
                variant="plain"
                transition="0.2s"
                sx={{
                    maxWidth: '800px',
                    mx: 'auto',
                    // px: {
                    //     xs: 2,
                    //     md: 6,
                    // },
                    // py: {
                    //     xs: 2,
                    //     md: 3,
                    // },
                    borderRadius: 'md',
                    [`& .${accordionDetailsClasses.content}.${accordionDetailsClasses.expanded}`]:
                    {
                        paddingBlock: '1rem',
                    },
                    [`& .${accordionSummaryClasses.button}`]: {
                        paddingBlock: '1rem',
                    },
                }}
            >
                                {surgeryDetails.procedures.map((procedure, index) => (
                    <Accordion key={index}>
                        <AccordionSummary>
                            <Avatar color="primary">
                                <LocalHospitalIcon />
                            </Avatar>
                            <ListItemContent>
                                <Typography level="title-md">
                                    {procedure.name.charAt(0).toUpperCase() +
                                        procedure.name.slice(1)}
                                </Typography>
                                <Typography level="body-sm">
                                    CPT code - {procedure.cpt_code}
                                </Typography>
                            </ListItemContent>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack spacing={2}>
                                <Typography>
                                    <strong>Duration:</strong>{' '}
                                    {surgeryDetails.duration} minutes
                                </Typography>
                                <Typography>
                                    <strong>Anesthesia Type:</strong>{' '}
                                    {surgeryDetails.anesthesia_type}
                                </Typography>
                                <Typography>
                                    <strong>Anesthesia Position:</strong>{' '}
                                    {surgeryDetails.anesthesia_position}
                                </Typography>
                                <Typography>
                                    <strong>Specialty:</strong>{' '}
                                    {surgeryDetails.specialty}
                                </Typography>
                                {/* Other details as needed */}
                            </Stack>
                        </AccordionDetails>
                    </Accordion>
                ))}
                    </AccordionGroup>
                </TabPanel>   

    );
};

export default SurgeryDetails;
