import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FileCard from "./FileCard";
import { pb } from "../../../services/pocketbase";
import ConsentForm from "./ConsentForm";

type FileData = {
  id: string;
  attachment: string;
  created: string;
  updated: string;
  size?: number;
  case: string;
};

type ViewProps = {
  caseId: string;
};

const DocumentView: React.FC<ViewProps> = ({ caseId }) => {
  const [files, setFiles] = useState<FileData[]>([]);

  useEffect(() => {
    fetchFiles(caseId);
  }, [caseId]);

  // open and closing for consentForm Model from this component
  const [open, setOpen] = React.useState(false);


  const fetchFiles = async (caseId: string) => {
    try {
      const response = await pb.collection("attachments").getList(1, 50, {
        filter: `case='${caseId}'`,
      });

      const filesData: FileData[] = response.items.map((item) => ({
        id: item.id,
        attachment: item.attachment,
        created: item.created,
        updated: item.updated,
        case: item.case,
      }));

      setFiles(filesData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      try {
        const formData = new FormData();
        formData.append("attachment", file);
        formData.append("case", caseId);
        await pb.collection("attachments").create(formData);

        fetchFiles(caseId);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Box sx={{ maxWidth: "90%", margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >

        <label htmlFor="raised-button-file">
          <Button
            //clicking on this button will open the consentForm model
            onClick={() => setOpen(true)}
            // component="span"
            sx={{
              borderRadius: "16px",
              padding: "6px 12px",
              marginX: 2,
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}


          >

            Consent Form
          </Button>

        </label>
        <input
          accept="image/*, .pdf, .xlsx"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          type="file"
          onChange={handleFileChange}
        />

        <label htmlFor="raised-button-file">
          <Button
            component="span"
            sx={{
              borderRadius: "16px",
              padding: "6px 12px",
              fontSize: "0.75rem",
              "&:hover": {
                backgroundColor: "#333333",
              },
            }}
          >
            Add new file
          </Button>

        </label>



      </Box>
      <Box
        sx={{
          display: "grid",

          gridTemplateColumns: { xs: "1fr", sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" },
          gap: 2,
          width: { xs: "100%", sm: "100%", },
        }}
      >
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </Box>

      {/* consentForm model */}
      {open && <ConsentForm open={open} setOpen={setOpen} />}
    </Box>
  );
};

export default DocumentView;
