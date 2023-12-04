import React, { useState } from "react";
import UploadIcon from "@mui/icons-material/Upload";
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
} from "@mui/joy";
import { pb } from "../../../services/pocketbase";

const EditCaseActivity = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const activityResponse = await pb
        .collection("case_activity_item")
        .create(formData);
      const activityId = activityResponse.id;
      const caseId = formData.get("case");
      if (caseId) {
        const caseResponse = await pb
          .collection("cases")
          .getOne(caseId.toString());
        const currentActivities = caseResponse.activity_items || [];
        await pb.collection("cases").update(caseId.toString(), {
          activity_items: [...currentActivities, activityId],
        });
      }

      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen}> Case Activity Item</Button>
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
                <FormControl>
                  <FormLabel>Type</FormLabel>
                  <Select name="type" placeholder="Choose Type" size="sm">
                    <Option value="surgery_scheduled_added">
                      surgery scheduled added
                    </Option>
                    <Option value="surgery_scheduled_removed">
                      surgery scheduled removed
                    </Option>
                    <Option value="surgery_scheduled_updated">
                      surgery scheduled updated
                    </Option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel>Case</FormLabel>
                  <Select name="case" placeholder="Choose Case" size="sm">
                    <Option value="xbmarqiuhged0wf">case 1</Option>
                    <Option value="sb6eyuw267tfjge">case 2</Option>
                    <Option value="mw9op44a1xn92dv">case 3</Option>
                  </Select>
                </FormControl>
                <FormControl>
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
                </FormControl>
                <Stack direction="row" justifyContent="flex-end" spacing={2}>
                  <Button color="primary" size="sm" type="submit">
                    Submit
                  </Button>
                </Stack>
              </Stack>
            </Box>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
};

export default EditCaseActivity;
