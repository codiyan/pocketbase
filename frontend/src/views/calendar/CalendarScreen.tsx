import React, { useEffect, useMemo } from 'react';
import { pb } from '../../services/pocketbase';
import { endOfWeek, startOfDay, startOfWeek, subDays } from 'date-fns';
import { ListResult, RecordModel } from 'pocketbase';
import WeekView, { WeekViewEventType } from './WeekView';


export default function CalendarScreen() {

    const [scheduledItems, setScheduledItems] = React.useState<ListResult<RecordModel>>()
    const [range, setRange] = React.useState({
        start: startOfWeek(new Date()).toISOString(),
        end: endOfWeek(new Date()).toISOString(),
    })

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
            }
        })

    }, [scheduledItems])

    useEffect(() => {

        // find schedule items for this user
        pb.collection('schedule_items').getList(1, 50, {
            // filter: `user.id = "${pb.authStore.model?.id}"`,
        })
            .then((items) => {
                setScheduledItems(items)
            })
            .catch((error) => {
                console.error(error)
            })

    }, [])


    console.log('events:', events)
    return <div>

        Week

        <WeekView events={events} range={range} />
    </div>
}