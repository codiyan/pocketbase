import {
    Box,
    Button,
    Divider,
    FormControl,
    FormLabel,
    Select,
    Option,
    Modal,
    ModalClose,
    ModalDialog,
    Stack,
    Typography,
    Textarea,
} from "@mui/joy";
import UploadIcon from "@mui/icons-material/Upload";

import { pb } from "../../../services/pocketbase";
import * as React from "react";
import { useState } from "react";
// ... (existing imports)

// AddActivityProps type definition
interface AddActivityProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    caseId?: string; // Assuming caseId is a string, adjust accordingly
    type: string; // Assuming type is a string, adjust accordingly
}

const AddActivity: React.FC<AddActivityProps> = (
    { open, setOpen, caseId, type }) => {
    // const [open, setOpen] = useState(false);


    // const handleChange = (
    //     event: React.SyntheticEvent | null,
    //     newValue: string | null,
    // ) => {
    //     setSelectedType(newValue!);
    // };


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //  const formData = new FormData(event.currentTarget);

        try {
            // const activityResponse = await pb
            //     .collection("case_activity_item")
            //     .create(formData);
            // const activityId = activityResponse.id;
            // const caseId = formData.get("case");
            // if (caseId) {
            //     const caseResponse = await pb
            //         .collection("cases")
            //         .getOne(caseId.toString());
            //     const currentActivities = caseResponse.activity_items || [];
            //     await pb.collection("cases").update(caseId.toString(), {
            //         activity_items: [...currentActivities, activityId],
            //     });
            // }

            if (caseId && type === 'note') {
                const acitivity_item = await pb.collection('case_activity_item').create({
                    type: 'note',
                    meta: {
                        note: 'test note 2'
                    },
                    case: caseId,
                });

                // const acitivity_item_id = acitivity_item.map((item: any) => item.id);


                // if (acitivity_item.id) {

                //     const cases = await pb.collection('cases').update(caseId, {
                //         // append single tag
                //         'activity_items+': acitivity_item.id,

                //     }

                //     )
                //     console.log(cases);
                // }
            }
            handleClose();

        } catch (error) {
            handleClose()
            console.error(error);
        }
    };

    return (
        <>

            <Box sx={{ width: '100%', overflowY: 'auto' }}>
                <Modal open={open} onClose={handleClose}>
                    <ModalDialog
                        sx={{
                            width: "50%",
                        }}
                    >
                        <ModalClose onClick={handleClose} />
                        <Typography level="title-md" sx={{ mt: 2 }}>
                            Case Activity Item
                        </Typography>
                        <Divider />
                        <form onSubmit={handleSubmit} encType="multipart/form-data">
                            <Box sx={{ p: 2 }}>
                                <Stack spacing={2}>
                                    {/* <FormControl>
                                        <FormLabel>Type</FormLabel>
                                      

                                        <Select

                                            name="type"
                                            placeholder="Choose Type"
                                            size="sm"
                                            value={selectedType}
                                            onChange={handleChange}
                                        >


                                            <Option value="surgery_scheduled_added">
                                                Surgery scheduled added
                                            </Option>
                                            <Option value="surgery_scheduled_removed">
                                                Surgery scheduled removed
                                            </Option>
                                            <Option value="surgery_scheduled_updated">
                                                Surgery scheduled updated
                                            </Option>
                                            <Option value="note">Note</Option>
                                        </Select>
                                    </FormControl> */}
                                    {type && type === 'note' && (
                                        <FormControl>
                                            <FormLabel>Note</FormLabel>
                                            <Textarea
                                                name="note"
                                                placeholder="Enter Note"
                                                minRows='3'
                                            />
                                        </FormControl>
                                    )}
                                    <FormControl>
                                        {/* <FormLabel>Case</FormLabel>
                                        <Select name="case" placeholder="Choose Case" size="sm">
                                            <Option value="xbmarqiuhged0wf">Case 1</Option>
                                            <Option value="sb6eyuw267tfjge">Case 2</Option>
                                            <Option value="mw9op44a1xn92dv">Case 3</Option>
                                        </Select> */}
                                    </FormControl>
                                    {/* <FormControl>
                                        <FormLabel>Attachments</FormLabel>
                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Button
                                                size="sm"
                                                variant="outlined"
                                                component="label"
                                                startDecorator={<UploadIcon />}
                                            >
                                                Upload
                                                <input type="file" name="attachments" hidden />
                                            </Button>
                                        </Box>
                                    </FormControl> */}
                                    <Stack direction="row" justifyContent="flex-end" spacing={2}>
                                        <Button color="primary" size="sm" type="submit">
                                            Submit
                                        </Button>
                                    </Stack>
                                </Stack>
                            </Box>
                        </form>
                    </ModalDialog>
                </Modal >
            </Box>
        </>
    );
};

export default AddActivity;
