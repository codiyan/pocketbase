import { Box, Button, DialogTitle, FormControl, FormLabel, Input, Modal, ModalClose, ModalDialog, Typography } from '@mui/joy';
import { Stack } from '@mui/material';
import { format, parse } from 'date-fns';
import React, { useEffect } from 'react';
import { Form } from 'react-router-dom';
import { pb } from '../../../services/pocketbase';



export default function BlockTimeModal({ onClose, onBlockTimeCreated, open, start: startP, end: endP }) {



    const [start, setStart] = React.useState(new Date());
    const [end, setEnd] = React.useState(new Date());


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
        pb.collection('schedule_items').create({
            type: 'block',
            start: start,
            end: end,
            user: pb.authStore.model.id
        })
            .then((res) => {
                console.log(res)
                handleClose()
                onBlockTimeCreated(res)
            })
    }

    return <Modal onClose={handleClose} open={open}>

        <ModalDialog>
            <ModalClose />

            <DialogTitle >
                Block Time
            </DialogTitle>
            <Typography variant='p'>
                Block your calendar and let your team know you're busy.
            </Typography>


            <Stack spacing={2} >
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