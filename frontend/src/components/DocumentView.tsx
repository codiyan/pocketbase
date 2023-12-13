import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FileCard from "./FileCard";
import { pb } from "../services/pocketbase";

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
    <Box sx={{ maxWidth: 900, margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
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
              backgroundColor: "#000000",
              color: "#ffffff",
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
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </Box>
    </Box>
  );
};

export default DocumentView;
