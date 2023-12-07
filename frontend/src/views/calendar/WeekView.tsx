import React, { useMemo } from 'react';
import styled from '@emotion/styled';
import { isSameDay, startOfWeek } from 'date-fns';


const CELL_HEIGHT = 50; // Fixed height for each cell

const Scroller = styled.div`
    overflow: auto;
    height: 100%;
    width: 100%;
`;

const WeekViewCalendarContainer = styled.div`
  display: flex;
`;

const TimeColumn = styled.div`
  border-right: 1px solid #ddd;
  padding: 0px 10px;
  text-align: center;
  position: sticky;
  left: 0;
  background-color: #f0f0f0;
  z-index: 1;

  height: ${CELL_HEIGHT * 25}px;
  display: flex;
  flex-direction: column;
`;

const DayColumn = styled.div`
  flex: 1;
  position: relative;
  height: ${CELL_HEIGHT * 25}px;
  display: flex;
  flex-direction: column;
`;

const DayCell = styled.div`
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  position: sticky;
  top: 0;
  background-color: #f0f0f0;
  z-index: 1;
  flex:1;

`;

const HourCell = styled.div`
  border-right: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  flex:1;
`;

const Event = styled.div`
  position: absolute;
  padding: 5px;
  border-radius: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const LunchEvent = styled(Event)`
  background-color: #4caf50;
`;

export type WeekViewEventType = {
    title: string;
    startTime: string;
    endTime: string;
    type: 'surgery' | 'block';
    id: string;
}
type Props = { events: WeekViewEventType[], range: { start: string, end: string } };

const WeekView = ({ events, range = {
    start: startOfWeek(new Date()).toDateString(),
    end: startOfWeek(new Date()).toDateString(),
} }: Props) => {
    const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);

    const getEventsForDate = (date: string) => {
        const dateObj = new Date(date);
        return events.filter((event) => {
            const eventDate = new Date(event.startTime);
            return isSameDay(eventDate, dateObj)
        });
    }


    const dates = useMemo(() => {
        // YYYY-MM-DD
        return Array.from({ length: 7 }, (_, i) => {
            const date = new Date(range.start);
            date.setDate(date.getDate() + i);
            return date.toISOString().split('T')[0];
        }
        );
    }, [range])

    return (
        <Scroller>
            <WeekViewCalendarContainer>
                <TimeColumn>
                    <div style={{ height: CELL_HEIGHT }}></div>
                    {hoursOfDay.map((hour) => (
                        <div key={hour} style={{ height: CELL_HEIGHT }}>{`${hour % 12 === 0 ? 12 : hour % 12} ${hour < 12 ? 'AM' : 'PM'}`}</div>
                    ))}
                </TimeColumn>
                {dates.map((date, index) => {
                    const dateObj = new Date(date);
                    const dayEvents = getEventsForDate(date);

                    return (
                        <DayColumn key={index}>
                            <DayCell>{
                                dateObj.toLocaleDateString([], {
                                    weekday: 'short',
                                    month: 'short',
                                    day: 'numeric',
                                })
                            }</DayCell>
                            {hoursOfDay.map((hour) => (
                                <HourCell key={`${index}-${hour}`} style={{ height: CELL_HEIGHT }} />
                            ))}
                            {dayEvents
                                .map((event, eventIndex) => {
                                    const secondsInDay = 25 * 60 * 60;
                                    const start = new Date(event.startTime);
                                    const end = new Date(event.endTime);
                                    const startSeconds = start.getHours() * 60 * 60 + start.getMinutes() * 60 + start.getSeconds();
                                    const endSeconds = end.getHours() * 60 * 60 + end.getMinutes() * 60 + end.getSeconds();


                                    const topPercent = startSeconds * 100 / secondsInDay;
                                    const heightPercent = (endSeconds - startSeconds) * 100 / secondsInDay;
                                    console.log('event', event, { startSeconds, endSeconds, secondsInDay, topPercent });


                                    return (
                                        <Event
                                            key={eventIndex}
                                            style={{
                                                top: `${topPercent}%`,
                                                height: `${heightPercent}%`,

                                                transform: `translateY(${CELL_HEIGHT}px)`,
                                                backgroundColor: event.type === 'surgery' ? '#4caf50' : '#2196f3',
                                                color: '#fff',
                                            }}
                                        >
                                            <div>{event.title}</div>
                                            <div>
                                                {`${new Date(event.startTime).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })} - ${new Date(event.endTime).toLocaleTimeString([], {
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}`}
                                            </div>
                                        </Event>
                                    )
                                })}
                        </DayColumn>
                    );
                })}
            </WeekViewCalendarContainer>
        </Scroller>
    );
};

export default WeekView;
