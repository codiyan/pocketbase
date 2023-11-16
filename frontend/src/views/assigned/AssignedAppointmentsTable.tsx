import { Box, Card, Chip, List, ListItem, Stack, Typography } from '@mui/joy';
import React from 'react';
import { format } from 'date-fns'
import { Vaccines } from '@mui/icons-material';

const AssignedAppointmentsTable = ({ }) => {
  const scheduleItems = [
    {
      start: "2021-10-01T09:00:00-04:00",
      end: "2021-10-01T09:30:00-04:00",
      type: 'surgery',
      duration: 30,

      case: {
        first_name: 'John',
        last_name: 'Doe',
        email: 'dd@kdk.com',
        phone: '123-456-7890',
      },

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

    },
    {
      start: "2021-10-01T09:00:00-04:00",
      end: "2021-10-01T09:30:00-04:00",
      type: 'surgery',
      duration: 30,

      case: {
        first_name: 'Pete',
        last_name: 'O\'Brien',
        email: 'sad3@kdsdk.com',
        phone: '123-456-7890',
      },

      anesthesia_type: 'choice',
      anesthesia_position: 'surpine',
      specialty: 'podiatry',

      procedures: [
        {
          name: "2nd hammer toe Correction",
          site: 'ankle',
          laterality: 'right',
          cpt_code: '28285',
        },
      ],

    },




    // Add more schedule items as needed
  ];
  return (<>

    {scheduleItems.map((item, index) => (
      <Card>


        <Stack direction='row' gap={1} justifyContent="space-between" >
          <Box>
            <Typography level='h4'>
              {item.case.first_name} {item.case.last_name}
            </Typography>

            <Box sx={{ display: 'flex', gap: 1 }} >
              <Typography level='body-sm'>
                {item.case.email}
              </Typography>
              <Typography level='body-sm'>
                {item.case.phone}
              </Typography>
            </Box>


          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography level="body-sm">
              {format(new Date(item.start), 'h:mm a')} - {format(new Date(item.end), 'h:mm a')}
            </Typography>

            {/* duration */}
            <Typography level="body-sm">
              {item.duration} minutes
            </Typography>

          </Box>
        </Stack>


        {/* Procedure details with icons */}

        <Box>
          <Typography level="body-md">
            {item.procedures.length} procedures
          </Typography>

          <>
            {item.procedures.map((procedure, index) => (
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




      </Card>
    ))}</>
  );
};

export default AssignedAppointmentsTable;
