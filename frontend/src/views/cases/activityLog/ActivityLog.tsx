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
import SurgeryDetails from '../caseDetailView/SurgeryDetails';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import { formatDate } from '../../../lib/utils';
import { ca } from 'date-fns/locale';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

interface CaseActivityItem {
    type: string;
    note?: string;
    attachments?: any;
    assigned_to?: any;
    expand?: any;
    meta?: any;
    created: string; // Assuming 'created' is a string property
}

interface ActivityLogProps {
    case_activity_item: CaseActivityItem[];
    // Add other properties as needed
}
// Utility function to format date in a human-readable form


const ActivityLogComponent: React.FC<ActivityLogProps> = ({ case_activity_item }) => {


    //  METHOD TO GET FIRST LINE OF NOTE
    const getFirstLine = (note: string) => {
        // first 5 words
        const firstLine = note.split(' ').slice(0, 5).join(' ');

        return firstLine;

    }

    return (
        <>

            {case_activity_item ? case_activity_item.map((activityItem, index) => (
                <Accordion key={index}>
                    <AccordionSummary>
                        <Avatar color="primary">
                            {activityItem.type === 'note' && <FormatListBulletedIcon />}
                            {activityItem.type === 'action_required' && <TaskAltIcon />}
                            {activityItem.type === 'attachment' && <TapAndPlayRoundedIcon />}
                            {activityItem.type === 'surgery_scheduled_added' && <HistoryToggleOffIcon />}
                        </Avatar>
                        <ListItemContent>
                            <Typography level="title-md">{activityItem.type == 'action_required' ? 'Task' : 'Note'}</Typography>
                            <Typography level="body-sm">
                                {/* {activityItem.type === 'surgery_scheduled_added'
                                    && 'Activate or deactivate your connections'
                                }
                                 */}
                                {activityItem.type === 'note' || activityItem.type == 'action_required'
                                    && getFirstLine(activityItem?.meta?.note) + '...'
                                }


                            </Typography>

                            {activityItem?.assigned_to && activityItem.expand &&
                                <Typography level='body-xs'>
                                    Assigned to {activityItem?.expand?.assigned_to.name}
                                </Typography>
                            }
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
                </Accordion >
            )) : <Typography level="body-sm">No Activity</Typography>}
        </>



    );
};

export default ActivityLogComponent;
