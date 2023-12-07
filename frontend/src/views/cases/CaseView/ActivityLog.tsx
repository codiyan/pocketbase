import React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ListItemContent from '@mui/joy/ListItemContent';

import TapAndPlayRoundedIcon from '@mui/icons-material/TapAndPlayRounded';
import Avatar from '@mui/joy/Avatar';
import Typography from '@mui/joy/Typography';
// Import your custom component
import SurgeryDetails from './SurgeryDetails';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { formatDate } from '../../../lib/utils';

interface CaseActivityItem {
    type: string;
    note?: string;
    attachments?: any;
    user?: any;
    meta?: any;
    created: string; // Assuming 'created' is a string property
}

interface ActivityLogProps {
    case_activity_item: CaseActivityItem[];
    // Add other properties as needed
}
// Utility function to format date in a human-readable form


const ActivityLogComponent: React.FC<ActivityLogProps> = ({ case_activity_item }) => {




    return (
        <>

            {case_activity_item ? case_activity_item.map((activityItem, index) => (
                <Accordion key={index}>
                    <AccordionSummary>
                        <Avatar color="primary">
                            {activityItem.type === 'note' && <FormatListBulletedIcon />}
                            {activityItem.type === 'attachment' && <TapAndPlayRoundedIcon />}
                            {activityItem.type === 'surgery_scheduled_added' && <HistoryToggleOffIcon />}
                        </Avatar>
                        <ListItemContent>
                            <Typography level="title-md">{activityItem.type === 'surgery_scheduled_added' ? 'Surgery Details' : 'Note'}</Typography>
                            <Typography level="body-sm">
                                {activityItem.type === 'surgery_scheduled_added'
                                    && 'Activate or deactivate your connections'
                                }

                                {activityItem.type === 'note'
                                    && 'Your custom text or description for other types'}
                            </Typography>
                        </ListItemContent>
                        <Typography level="body-sm">
                            {`  ${formatDate(activityItem.created)}`} {/* Display formatted date */}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>

                        {activityItem.type === 'note' && (
                            <Typography level="body-sm">{activityItem?.meta?.note}</Typography>
                        )}
                        {/* {activityItem.type === 'surgery_scheduled_added' && (
                            <SurgeryDetails surgeryDetails={activityItem.meta} />
                        )} */}
                        {/* Include other details based on the type */}
                    </AccordionDetails>
                </Accordion>
            )) : <Typography level="body-sm">No Activity</Typography>}
        </>



    );
};

export default ActivityLogComponent;
