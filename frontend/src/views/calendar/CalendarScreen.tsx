import React, { useEffect, useMemo } from 'react';
import { pb } from '../../services/pocketbase';
import { addHours, endOfWeek, startOfDay, startOfHour, startOfWeek, subDays } from 'date-fns';
import { ListResult, RecordModel } from 'pocketbase';
import WeekView, { WeekViewEventType } from './WeekView';
import { Stack } from '@mui/material';
import { Button, Typography } from '@mui/joy';
import { Close } from '@mui/icons-material';
import BlockTimeModal from './modules/BlockTimeModal';
import { useNavigate } from 'react-router-dom';



export default function CalendarScreen() {

    const navigate = useNavigate();
    const [scheduledItems, setScheduledItems] = React.useState<ListResult<RecordModel>>()
    const [range, setRange] = React.useState({
        start: startOfWeek(new Date()).toISOString(),
        end: endOfWeek(new Date()).toISOString(),
    })

    const [blockTimeModalProps, setBlockTimeModalProps] = React.useState<any>({
        open: false,
        start: new Date(),
        end: new Date(),
    })

    const handleBlockTime = ({ start = new Date(), end = addHours(new Date(), 1) } = {}) => {
        setBlockTimeModalProps({
            open: true,
            start,
            end,
        })
    }

    const events: WeekViewEventType[] = useMemo(() => {
        if (!scheduledItems) {
            return []
        }
        return scheduledItems.items.map((item) => {
            return {
                id: item.id,
                title: item.title,
                startTime: item.start,
                endTime: item.end,
                type: item.type as any,
                case: item.case,
            }
        })

    }, [scheduledItems])

    const fetchScheduledItems = async () => {
        // find schedule items for this user
        pb.collection('schedule_items').getList(1, 50, {
            filter: `user.id = "${pb.authStore.model?.id}"`,
            expand: `case`
        })
            .then((items) => {
                setScheduledItems(items as any)
            })
            .catch((error) => {
                console.error(error)
            })
    }
    useEffect(() => {
        fetchScheduledItems()
    }, [])


    const handleSelectRange = (start: Date, end: Date) => {
        handleBlockTime({
            start,
            end,
        })
    }



    return <div>

        <Stack direction='row' gap={1} justifyContent="space-between" mb={2}>
            <Typography level="h2">Assigned To You</Typography>
            <Button
                color="primary"
                startDecorator={<Close />}
                size="sm"
                onClick={() => handleBlockTime()}
            >
                Block Time
            </Button>
        </Stack>

        <WeekView events={events} range={range} onSelectRange={handleSelectRange} onEventClick={
            (event) => {
                if (event.type === 'block') {
                    return
                }

                navigate(`/cases/${event.case.id}`)

            }
        } />

        {blockTimeModalProps &&
            <BlockTimeModal
                open={blockTimeModalProps.open}
                start={blockTimeModalProps.start}
                end={blockTimeModalProps.end}
                onClose={() => setBlockTimeModalProps(null)}
                onBlockTimeCreated={
                    fetchScheduledItems
                }
            />}
    </div>
}