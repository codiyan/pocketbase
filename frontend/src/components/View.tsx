import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "./Card";
import { pb } from "../services/pocketbase";
type FileData = {
  id: string;
  attachment: string;
  created: string;
  updated: string;
  size?: number;
};

const View: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = async () => {
    try {
      const response = (await pb
        .collection("attachments")
        .getFullList()) as FileData[];
      setFiles(response);
    } catch (error) {
      console.error("Failed to fetch files:", error);
    }
  };
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.files) {
      const file = event.target.files[0];
      try {
        const formData = new FormData();
        // formData.append("file", file);
        formData.append("attachment", file);

        await pb.collection("attachments").create(formData);

        fetchFiles();
      } catch (error) {
        console.error("Error uploading file:", error);
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
              borderRadius: "20px",
              backgroundColor: "#000000",
              color: "#ffffff",
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
          <Card key={file.id} file={file} />
        ))}
      </Box>
    </Box>
  );
};

export default View;
