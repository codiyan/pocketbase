import { Box, Button, DialogTitle, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Option, Select, Textarea } from '@mui/joy';
import { Stack } from '@mui/material';
import { format, parse } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { pb } from '../../../services/pocketbase';
import Typography from '@mui/joy/Typography';
import { CollectionResponses, UsersResponse } from '../../../pocketbase-types';
interface ScheduleData {

    assigned_to?: string;

    procedures?: Array<string>;

    note?: string;


}



export default function AddSchedule({ onClose, open, start: startP, end: endP, caseId }: any) {



    const [start, setStart] = React.useState(new Date());
    const [end, setEnd] = React.useState(new Date());
    const [users, setUsers] = useState<Array<UsersResponse>>([])
    const [procedures, setProcedures] = useState<Array<any>>([]);
    const [data, setData] = useState<ScheduleData>({} as ScheduleData)

    const handleChange = (
        name: string,
        newValue: string | null | string[],
    ) => {
        setData({ ...data, [name]: newValue! });
    };

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
                type: 'surgery',
                start: start,
                end: end,
                user: pb.authStore.model.id,
                case: caseId,
                description: data.note,


            })
                .then((res) => {
                    console.log(res)
                    handleClose()
                    // onBlockTimeCreated(res)
                })
        }
    }

    return <Modal onClose={handleClose} open={open}>

        <ModalDialog sx={
            {
                width: { xs: '100%', sm: '60%' },
                // maxWidth: 500,
                p: 2,
                position: 'relative',
                overflowY: 'auto',
                maxHeight: '100%',
            }
        }>
            <ModalClose />

            <DialogTitle >
                Schedule
            </DialogTitle>



            <Stack spacing={2} >


                <Stack direction="row" spacing={2}>



                    <FormControl sx={{ flex: 1 }}>
                        <FormLabel>Surgeon</FormLabel>

                        <Select
                            name="assigned_to"
                            placeholder="Choose Surgeon"
                            size="sm"
                            defaultValue={data.assigned_to}

                            onChange={
                                (_, newValue) => {
                                    handleChange("assigned_to", newValue)
                                }
                            }

                        >
                            {users && users.filter(x =>
                                x.role === 'Surgeon'
                            ).map((user) => (
                                <Option key={user.id} value={user.id}>
                                    {user.name}
                                </Option>
                            ))}


                        </Select>
                    </FormControl>






                    <FormControl sx={{ flex: 1 }}>
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

                </Stack>

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
                <FormControl>
                    <FormLabel>Procedures</FormLabel>

                    <Select
                        name="procedures"
                        placeholder="Choose Procedures"
                        size="sm"
                        multiple
                        defaultValue={data.procedures}

                        onChange={
                            (_, newValue) => {
                                handleChange("procedures", newValue)
                            }
                        }

                    >
                        {procedures && procedures.map((p) => (
                            <Option key={p.id} value={p.id}>
                                {p.name}
                            </Option>
                        ))}


                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Description</FormLabel>
                    <Textarea
                        name="note"
                        placeholder="Surgery Description"
                        minRows='3'
                        defaultValue={data.note}
                        onChange={(e) => handleChange("note", e.target.value)}


                    />

                </FormControl>

                <Box
                    sx={{
                        mt: 1,
                        display: 'flex',
                        gap: 1,
                        flexDirection: { xs: 'column', sm: 'row-reverse' },
                    }}
                >

                    <Button
                        disabled={!data.assigned_to || !data.procedures || !data.note}

                        variant="solid" color="primary" onClick={
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