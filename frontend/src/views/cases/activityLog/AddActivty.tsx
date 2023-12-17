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
import { UsersResponse } from "../../../pocketbase-types";
// ... (existing imports)

// AddActivityProps type definition

interface AddActivityData {
    type?: string;
    assigned_to?: string;
    // date?: string;
    from?: string;
    until?: string;
    note?: string;
}

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

    // const handleChange = (e: any) => {
    //     console.log(e)
    //     // if date of birth make it a date string for database
    //     if (e.target.name === "dob") {
    //         const date = new Date(e.target.value);

    //         setdata({ ...data, [e.target.name]: date });
    //         // console.log(date, d)
    //     }
    //     else

    //         setdata({ ...data, [e.target.name]: e.target.value });
    // };

    const [data, setdata] = useState<AddActivityData>({
        type: "note",
        assigned_to: "",
        from: "",
        until: "",
    });
    const handleChange = (
        name: string,
        newValue: string | null,
    ) => {
        setdata({ ...data, [name]: newValue! });
    };

    const [users, setUsers] = useState<Array<UsersResponse>>([])

    React.useEffect(() => {
        // Fetch users
        const fetchData = async () => {
            const users = await pb.collection('users').getFullList({
                sort: '-created',

            });

            if (users)
                setUsers(users)



        };
        // Fetch procedures
        fetchData()


    }, []);
    const [note, setNote] = useState('');
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const [note, setNote] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //  const formData = new FormData(event.currentTarget);

        try {
            if (caseId && data.type && data.note !== '') {
                let req = {
                    type: data.type,
                    meta: {
                        note: data.note,
                    },
                    case: caseId,
                    assigned_to: data.type == "action_required" ? data.assigned_to : undefined
                }
                const acitivity_item = await pb.collection('case_activity_item').create(req);

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
                            width: { xs: "100%", md: "50%" },
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
                                    <FormControl>
                                        <FormLabel>Type</FormLabel>


                                        <Select

                                            name="type"
                                            placeholder="Choose Type"
                                            size="sm"
                                            defaultValue={data.type}
                                            onChange={(_, newValue) => {

                                                handleChange("type", newValue)
                                            }}
                                        >


                                            <Option value="note">
                                                Add Note
                                            </Option>
                                            <Option value="action_required">
                                                Assign Task
                                            </Option>

                                        </Select>
                                    </FormControl>
                                    {data.type === 'action_required' && (
                                        <FormControl>
                                            <FormLabel>Assign To</FormLabel>
                                            <Select
                                                name="assigned_to"
                                                placeholder="Choose Assignee"
                                                size="sm"
                                                defaultValue={data.assigned_to}
                                                onChange={(_, newValue) => {

                                                    handleChange("assigned_to", newValue)
                                                }}
                                            >
                                                {users && users.map((user) => (
                                                    <Option key={user.id} value={user.id}>
                                                        {user.name}
                                                    </Option>
                                                ))}


                                            </Select>
                                        </FormControl>
                                    )}

                                    {data.type && data.type !== "" && (
                                        <FormControl>
                                            <FormLabel>


                                                {data.type === 'note' ? 'Note' : 'Task Details'}


                                            </FormLabel>
                                            <Textarea
                                                name="note"
                                                placeholder="Enter Note"
                                                minRows='3'
                                                value={data.note}
                                                onChange={(e) => handleChange("note", e.target.value)}


                                            />
                                        </FormControl>
                                    )}

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
