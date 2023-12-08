import React, { useEffect, useState } from 'react'
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Breadcrumbs from '@mui/joy/Breadcrumbs';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';

import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
// import three icons for notes, attachments and schedule

import EditNoteIcon from '@mui/icons-material/EditNote';
import { Chip, TabPanel } from '@mui/joy';
import SurgeryDetails from './SurgeryDetails';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';

import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
    accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
    accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';
import Switch from '@mui/joy/Switch';

import Avatar from '@mui/joy/Avatar';

import ListItemContent from '@mui/joy/ListItemContent';

import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import BluetoothRoundedIcon from '@mui/icons-material/BluetoothRounded';
import TapAndPlayRoundedIcon from '@mui/icons-material/TapAndPlayRounded';
import EditNotificationsRoundedIcon from '@mui/icons-material/EditNotificationsRounded';
import AdUnitsRoundedIcon from '@mui/icons-material/AdUnitsRounded';
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AccessibilityNewRoundedIcon from '@mui/icons-material/AccessibilityNewRounded';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import SpatialTrackingRoundedIcon from '@mui/icons-material/SpatialTrackingRounded';
import SettingsVoiceRoundedIcon from '@mui/icons-material/SettingsVoiceRounded';
import ActivityLogComponent from './ActivityLog';
import AddActivity from './AddActivty';
import { useNavigate, useParams } from 'react-router-dom';
import { pb } from '../../../services/pocketbase';
import { calculateAge } from '../../../lib/utils';
import { ca } from 'date-fns/locale';
import DefaultPic from '../../../assets/default-pic.jpg';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
export default function DetailView() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [caseDetailsNew, setCaseDetailsNew] = useState({} as any);
    const [caseDetails, setCaseDetails] = useState({
        first_name: 'John',
        last_name: 'Doe',
        email: 'dd@kdk.com',
        phone: '123-456-7890',
        status: 'scheduled',
        age: 19,
        gender: "Male",
        case_activity_item: [
            {
                type: 'note',
                user: 33,
                attachments: [],
                note: 'This patient is a good candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home. He is a good candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home.',
                created: '2023-12-03T13:56:00-04:00'
            },
            {
                type: 'note',
                user: 33,
                attachments: [],
                note: 'This patient is a good  a candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home. He is a good candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home.',
                created: '2023-12-03T13:56:00-04:00'
            }, {
                type: 'note',
                user: 33,
                attachments: [],
                note: 'This patient is a good as candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home. He is a good candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home.',
                created: '2023-12-03T13:56:00-04:00'
            }, {
                type: 'note',
                user: 33,
                attachments: [],
                note: 'This patient is a good  3 candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home. He is a good candidate for surgery because of his age and health. He is a non-smoker and has no other health issues. He is also very active and has a good support system at home.',
                created: '2023-12-03T13:56:00-04:00'
            },
            {
                type: 'surgery_scheduled_added',
                user: 33,
                meta: {
                    surgery_scheduled_id: 90,
                }
                ,
                created: '2023-12-03T09:00:00-04:00'
            }
        ],
        surgery_scheduled: [
            {

                start: "2021-10-01T09:00:00-04:00",
                end: "2021-10-01T09:30:00-04:00",
                type: 'surgery',
                duration: 30,
                anesthesia_type: 'choice',
                anesthesia_position: 'surpine',
                specialty: 'podiatry',
                procedures: [
                    {
                        name: "Right Akin",
                        site: 'foot',
                        laterality: 'right',
                        cpt_code: '28285',
                    },
                    {
                        name: 'Weil osteotomy',
                        site: 'foot',
                        laterality: 'right',
                        cpt_code: '28285',
                    }
                ],
            }
        ]
    });
    const [open, setOpen] = React.useState(false);


    // make async await
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (id) {
                    const caseDetailsResponse = await pb.collection('cases').getOne(id, { expand: "case_activity_item(case)" });
                    // Process caseDetailsResponse as needed]
                    if (caseDetailsResponse) {
                        // calculate age using util method calculateAge
                        let age = calculateAge(caseDetailsResponse.dob);
                        let activity_items = [];
                        if (caseDetailsResponse.expand) {
                            activity_items = (caseDetailsResponse as any).expand['case_activity_item(case)'] || [];
                            // sort by created date
                            activity_items.sort((a: any, b: any) => {
                                return new Date(b.created).getTime() - new Date(a.created).getTime();
                            });
                        }
                        setCaseDetailsNew({
                            ...caseDetailsResponse,
                            age: age,
                            activity_items
                        });
                    }
                }
            } catch (error) {
                console.error('Error fetching case details:', error);
            }
        };

        fetchData();
    }, [id, open]);



    const handleOpen = () => setOpen(true);
    const navigateToCases = () => {
        navigate('/cases/' + id, { replace: true });
    }

    return <Stack>
        <Box
            sx={{
                flex: 1,
                width: '100%',
            }}
        >
            <Box
                sx={{
                    bgcolor: 'background.body',
                }}
            >
                <Box
                    sx={{
                        px: {
                            xs: 2,
                            md: 6,
                        },
                    }}
                >
                    <Card>
                        <Stack>
                            <Stack direction="row" alignItems="baseline" justifyContent="space-between" spacing={3}
                            >
                                <Stack direction={{ md: 'row', sm: 'column' }} alignItems={{ md: "flex-start", sm: 'center' }} justifyContent={"center"} spacing={3}>
                                    <AspectRatio
                                        ratio="1"
                                        maxHeight={200}
                                        sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
                                    >
                                        <img
                                            //if data.avatar is null, use default pic
                                            src={DefaultPic}
                                            // srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                                            // loading="lazy"
                                            alt=""
                                        />
                                    </AspectRatio>
                                    <Stack direction={"column"} justifyContent="space-between"  >
                                        <Typography
                                            level="h2"
                                            sx={{
                                                mt: 1,
                                                mx: 2,

                                            }}
                                        >
                                            {/* every place add null checks */}
                                            {caseDetailsNew?.first_name} {caseDetailsNew?.last_name}
                                        </Typography>
                                        <Stack direction="row" justifyContent="flex-start" alignItems="center" >

                                            <Stack direction="column" justifyContent="flex-start " >
                                                <Typography
                                                    level="title-sm"
                                                    sx={{
                                                        mt: 1,
                                                        mb: 2,

                                                        mx: 2,
                                                    }}
                                                >
                                                    Age {caseDetailsNew?.age}
                                                </Typography>
                                                <Typography
                                                    level="title-sm"
                                                    sx={{
                                                        mt: 1,
                                                        mb: 2,
                                                        mx: 2,

                                                    }}
                                                >
                                                    Gender {caseDetails.gender}
                                                </Typography>
                                            </Stack>
                                            <Stack direction="column" justifyContent="flex-start">

                                                <Typography
                                                    level="title-sm"
                                                    sx={{
                                                        mt: 1,
                                                        mb: 2,
                                                        mx: 2,
                                                    }}
                                                >
                                                    Status

                                                    <Chip
                                                        sx={{ ml: 3 }}
                                                        color="primary"
                                                    >
                                                        {caseDetailsNew?.status}
                                                    </Chip>

                                                </Typography>
                                                <Typography
                                                    level="title-sm"
                                                    sx={{
                                                        mt: 1,
                                                        mb: 2,
                                                        mx: 2,
                                                    }}
                                                >
                                                    Email {caseDetailsNew?.email}
                                                </Typography>
                                            </Stack>
                                        </Stack>


                                    </Stack>
                                </Stack>

                            </Stack>
                            <Stack direction="row" alignItems="flex-end" justifyContent="flex-end" spacing={3}>
                                <IconButton title='Add Note' variant="soft" color="primary" size="sm" onClick={handleOpen}>
                                    <EditNoteIcon />
                                </IconButton >
                                {/* // add tool tip to icon */}


                                <IconButton title='Schedule' variant="soft" color="primary" size="sm" onClick={handleOpen}>
                                    <DataSaverOnIcon />
                                </IconButton >

                                <IconButton title='Patient Profile' variant="soft" color="primary" size="sm" onClick={navigateToCases}>
                                    <ManageAccountsIcon />

                                </IconButton >

                            </Stack>
                        </Stack>
                    </Card>
                </Box>
            </Box>
            <Tabs
                defaultValue={0}
                sx={{
                    bgcolor: 'transparent',
                }}
            >
                <TabList
                    tabFlex={1}
                    size="sm"
                    sx={{
                        zIndex: 1000,
                        position: 'sticky',
                        top: {
                            sm: 3000,
                            md: 0,
                        },
                        bgcolor: 'background.body',
                        pl: {
                            xs: 0,
                            md: 4,
                        },
                        justifyContent: 'left',
                        [`&& .${tabClasses.root}`]: {
                            flex: 'initial',
                            bgcolor: 'transparent',
                            [`&.${tabClasses.selected}`]: {
                                fontWeight: '600',
                                '&::after': {
                                    height: '2px',
                                    bgcolor: 'primary.500',
                                },
                            },
                        },
                    }}
                >
                    <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
                        Primary Details
                    </Tab>
                    <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
                        Activity Log
                    </Tab>
                    <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
                        Documents
                    </Tab>
                </TabList>
                <TabPanel value={0}>
                    <AccordionGroup
                        variant="plain"
                        transition="0.2s"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            px: {
                                xs: 2,
                                md: 6,
                            },
                            py: {
                                xs: 2,
                                md: 3,
                            },
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
                        <Accordion>
                            <AccordionSummary>
                                <Avatar color="primary">
                                    <TapAndPlayRoundedIcon />
                                </Avatar>
                                <ListItemContent>
                                    <Typography level="title-md">Sugery Details</Typography>
                                    <Typography level="body-sm">
                                        Activate or deactivate your connections
                                    </Typography>
                                </ListItemContent>
                            </AccordionSummary>
                            <AccordionDetails>
                                <SurgeryDetails surgeryDetails={caseDetails.surgery_scheduled[0]} />
                            </AccordionDetails>
                        </Accordion>
                    </AccordionGroup>
                </TabPanel>
                <TabPanel value={1}>
                    <AccordionGroup
                        variant="plain"
                        transition="0.2s"
                        sx={{
                            maxWidth: '800px',
                            mx: 'auto',
                            px: {
                                xs: 2,
                                md: 6,
                            },
                            py: {
                                xs: 2,
                                md: 3,
                            },
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

                        <ActivityLogComponent case_activity_item={caseDetailsNew?.activity_items || []} />

                    </AccordionGroup>
                </TabPanel>
                <TabPanel value={2}>
                    {/* responsive grid to show documents
                */}
                </TabPanel>
            </Tabs>
            {/* below is example code from mui which can be used for responsive ness and other stuctrure settig */}
        </Box>
        {open &&
            <AddActivity open={open} setOpen={setOpen} caseId={id} type={"note"} />
        }

    </Stack >
}