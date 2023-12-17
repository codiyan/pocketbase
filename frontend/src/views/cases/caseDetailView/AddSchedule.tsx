import { Box, Button, DialogTitle, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Option, Select } from '@mui/joy';
import { Stack } from '@mui/material';
import { format, parse } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { pb } from '../../../services/pocketbase';
import Typography from '@mui/joy/Typography';
import { CollectionResponses, UsersResponse } from '../../../pocketbase-types';
interface ScheduleData {
    type?: string;
    assigned_to?: string;
    // date?: string;
    from?: string;
    until?: string;
}


export default function AddSchedule({ onClose, onBlockTimeCreated, open, start: startP, end: endP }: any) {



    const [start, setStart] = React.useState(new Date());
    const [end, setEnd] = React.useState(new Date());
    const [users, setUsers] = useState<Array<UsersResponse>>([])
    const [procedures, setProcedures] = useState<Array<any>>([]);
    const [data, setData] = useState<ScheduleData>({} as ScheduleData)

    const handleChange = (e: any) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        // Fetch users
        const fetchData = async () => {
            const users = await pb.collection('users').getFullList({
                sort: '-created',
                // filter: 'role == "Nurse"'
            });

            if (users)
                setUsers(users)


            console.log(users)
            const procedures = await pb.collection('procedures').getFullList()
            if (procedures)
                setProcedures(procedures)
        };
        // Fetch procedures
        fetchData()


    }, []);
    useEffect(() => {
        if (startP) {
            setStart(new Date(startP))
        }
        if (endP) {
            setEnd(new Date(endP))
        }


    }, [startP, endP])


    console.log(start, end)



    const handleClose = () => {
        onClose()
    }


    const handleSubmit = () => {
        // create a new scheduled_event pocketbase of type block
        if (pb.authStore.model) {
            pb.collection('schedule_items').create({
                type: 'block',
                start: start,
                end: end,
                user: pb.authStore.model.id,
            })
                .then((res) => {
                    console.log(res)
                    handleClose()
                    onBlockTimeCreated(res)
                })
        }
    }

    return <Modal onClose={handleClose} open={open}>

        <ModalDialog>
            <ModalClose />

            <DialogTitle >
                Action
            </DialogTitle>
            <Typography>
                Block your calendar and let your team know you're busy.
            </Typography>


            <Stack spacing={2} >
                <FormControl>
                    <FormLabel>Type</FormLabel>


                    <Select

                        name="type"
                        placeholder="Choose Type"
                        size="sm"
                        value={data.type}
                        onChange={handleChange}
                    >


                        <Option value="assign_task">
                            Assign Task
                        </Option>
                        <Option value="schedule_surgery ">
                            Schedule Surgery
                        </Option>
                        <Option value="surgery_scheduled_updated">
                            Surgery scheduled updated
                        </Option>
                        <Option value="note">Note</Option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Assignee</FormLabel>

                    <Select
                        name="assigned_to"
                        placeholder="Choose Assignee"
                        size="sm"

                    >
                        {users && users.map((user) => (
                            <Option key={user.id} value={user.id}>
                                {user.name}
                            </Option>
                        ))}


                    </Select>
                </FormControl>


                <FormControl  >
                    <FormLabel>Date</FormLabel>
                    <Input

                        type="date"
                        slotProps={{
                            input: {
                                min: "2018-06-07T00:00",
                                max: "2018-06-14T00:00",
                            },
                        }}
                        value={format(start, 'yyyy-MM-dd')}
                        onChange={(e) => {
                            const date = new Date(e.target.value)
                            date.setHours(start.getHours())
                            date.setMinutes(start.getMinutes())
                            setStart(date)
                        }}
                    />
                </FormControl>


                <Stack direction="row" spacing={2}>



                    <FormControl sx={{ flex: 1 }}>
                        <FormLabel>
                            From
                        </FormLabel>
                        <Input

                            type="time"
                            slotProps={{
                                input: {
                                    min: "2018-06-07T00:00",
                                    max: "2018-06-14T00:00",
                                },
                            }}
                            value={format(start, 'HH:mm')}
                            onChange={(e) => {
                                // parse the time and set the date
                                const time = parse(e.target.value, 'HH:mm', new Date());
                                const newStart = new Date(start)
                                newStart.setHours(time.getHours())
                                newStart.setMinutes(time.getMinutes())
                                setStart(newStart)
                            }}
                        />
                    </FormControl>


                    <FormControl
                        sx={{ flex: 1 }}

                    >
                        <FormLabel>Until</FormLabel>
                        <Input

                            type="time"
                            slotProps={{
                                input: {
                                    min: "2018-06-07T00:00",
                                    max: "2018-06-14T00:00",
                                },
                            }}
                            value={format(end, 'HH:mm')}
                            onChange={(e) => {
                                // parse the time and set the date
                                const time = parse(e.target.value, 'HH:mm', new Date());
                                const newEnd = new Date(end)
                                newEnd.setHours(time.getHours())
                                newEnd.setMinutes(time.getMinutes())
                                setEnd(newEnd)
                            }}
                        />
                    </FormControl>


                </Stack>
                <Box
                    sx={{
                        mt: 1,
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row-reverse' },
                    }}
                >

                    <Button variant="solid" color="primary" onClick={
                        handleSubmit
                    }>
                        Save
                    </Button>
                    <Button
                        variant="outlined"
                        color="neutral"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>

                </Box>
            </Stack>
        </ModalDialog>

    </Modal>

}