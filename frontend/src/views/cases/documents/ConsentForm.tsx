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
    Input,
} from "@mui/joy";
import UploadIcon from "@mui/icons-material/Upload";
import CloseIcon from "@mui/icons-material/Close";
import { pb } from "../../../services/pocketbase";
import * as React from "react";
import { useState } from "react";
import './../Cases'
// ... (existing imports)

// AddActivityProps type definition
interface ConsentFormProps {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    caseId?: string; // Assuming caseId is a string, adjust accordingly
    type?: string; // Assuming type is a string, adjust accordingly
}

const ConsentForm: React.FC<ConsentFormProps> = (
    { open, setOpen, caseId, type, }
) => {
    const handleClose = () => setOpen(false);


    const [data, setdata] = useState({
        note: "",
        description: "Surgeons may perform procedures such as bunion removal, hammertoe correction, or ligament repairs to enhance mobility and diminish discomfort. With advancements in surgical techniques and technology, foot surgeries aim to optimize recovery, allowing patients to regain their stride with improved comfort and overall foot health."
    });
    const handleChange = (e: any) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };


    return (


        <>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography level="title-md" sx={{ mt: 2 }}>
                    Consent Form
                </Typography>
                <Button onClick={handleClose} size="sm">
                    <CloseIcon />
                </Button>
            </div>
            <Divider />
            <Stack spacing={2} marginTop={
                {
                    xs: 2,
                    md: 4
                }

            }>
                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}
                    sx=
                    {{
                        display: 'flex'
                    }}
                >

                    <FormControl>
                        <FormLabel>Patient Name</FormLabel>
                        <Input
                            variant='soft'
                            type="text"
                            disabled={true}
                        // value={formData.patientName}
                        // onChange={(e) =>
                        //     setFormData({ ...formData, patientName: e.target.value })
                        // }
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Surgery  Date</FormLabel>
                        <Input
                            type="date"
                        // value={formData.patientName}
                        // onChange={(e) =>
                        //     setFormData({ ...formData, patientName: e.target.value })
                        // }
                        />
                    </FormControl>

                </Stack>
                <FormControl>
                    <FormLabel>  Surgery Details</FormLabel>
                    <Textarea disabled={true} value={data.description}>

                    </Textarea>



                </FormControl>

            </Stack>


        </>



    );
};

export default ConsentForm;
