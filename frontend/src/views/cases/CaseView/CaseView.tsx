import React from 'react'


export default function CaseView() {
    // const dd = {
    //     start: "2021-10-01T09:00:00-04:00",
    //     end: "2021-10-01T09:30:00-04:00",
    //     type: 'surgery',
    //     duration: 30,

    //     case: {
    // first_name: 'John',
    // last_name: 'Doe',
    // email: 'dd@kdk.com',
    // phone: '123-456-7890',
    //     },

    //     anesthesia_type: 'choice',
    //     anesthesia_position: 'surpine',
    //     specialty: 'podiatry',

    //     procedures: [
    //         {
    //             name: "Right Akin",
    //             site: 'foot',
    //             laterality: 'right',
    //             cpt_code: '28285',
    //         },
    //         {
    //             name: 'Weil osteotomy',
    //             site: 'foot',
    //             laterality: 'right',
    //             cpt_code: '28285',

    //         }
    //     ],

    // }

    const caseDetails = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'dd@kdk.com',
        phone: '123-456-7890',
        case_activity_item: [
            {
                type: 'note',
                user: 33,
                attachments: [],
            },
            {
                type: 'surgery_scheduled_added',
                user: 33,
                meta: {
                    surgery_scheduled_id: 90,
                }
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

    }
}