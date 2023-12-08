import { Box, Card, Chip, List, ListItem, Stack, Typography } from '@mui/joy';
import React, { useMemo } from 'react';
import { format, formatDuration, intervalToDuration } from 'date-fns'
import { Vaccines } from '@mui/icons-material';
import { ProceduresRecord, ScheduleItemsRecord } from '../../pocketbase-types';
import { Link } from 'react-router-dom';

type Props = {
  item: any
}
const ScheduledItem = ({ item = [] }: Props) => {

  // x hour y mins using start and end and date-fns
  const durationFormatted = useMemo(() => {
    if (!item.start || !item.end) {
      return ''
    }
    const duration = intervalToDuration({
      start: new Date(item.start),
      end: new Date(item.end),
    })

    return formatDuration(duration, { format: ['hours', 'minutes'] })


  }, [item])

  const caseDetails = item?.expand?.case;


  return (<Link to={`/cases/${caseDetails?.id}`} style={{
    textDecoration: 'none',
    color: 'inherit'
  }}>
    <Card>


      <Stack direction='row' gap={1} justifyContent="space-between" >
        <Box>
          <Typography level='h4'>
            {caseDetails?.first_name} {caseDetails?.last_name}
          </Typography>

          <Box sx={{ display: 'flex', gap: 1 }} >
            <Typography level='body-sm'>
              {caseDetails.email}
            </Typography>
            <Typography level='body-sm'>
              {caseDetails.phone}
            </Typography>
          </Box>


        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography level="body-sm">
            {format(new Date(item.start), 'h:mm a')} - {format(new Date(item.end), 'h:mm a')}
          </Typography>

          {/* duration */}
          <Typography level="body-sm">
            {durationFormatted}
          </Typography>

        </Box>
      </Stack>


      {/* Procedure details with icons */}

      <Box>
        <Typography level="body-md">
          {item.procedures.length} procedures
        </Typography>

        <>
          {item.procedures.map((procedure: ProceduresRecord) => (
            <Typography level='body-sm'>{procedure.name} {procedure.laterality} {procedure.site} {procedure.cpt_code} </Typography>
          ))}
        </>
      </Box>



      <Stack direction='row' gap={1} justifyContent="space-between" >
        <Box>
          <Typography level='body-sm' sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}>
            <Vaccines /> Anesthesia: {item.anesthesia_type} {item.anesthesia_position}
          </Typography>

        </Box>
        <Box>
          <Chip color="primary">
            {item.specialty}
          </Chip>
        </Box>
      </Stack>



    </Card></Link>
  );
};

export default ScheduledItem;
