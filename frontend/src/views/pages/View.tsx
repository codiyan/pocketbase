import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "./Card";
import { pb } from "../../services/pocketbase";

type FileData = {
  id: string;
  file: string;
  created: string;
  updated: string;
  name: string;
  size: string;
  label: string;
  Icon: React.ElementType;
};

const View: React.FC = () => {
  const [files, setFiles] = useState<FileData[]>([]);
  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = (await pb
          .collection("attachments")
          .getFullList()) as FileData[];
        setFiles(response);
      } catch (error) {
        console.error("Failed to fetch files:", error);
      }
    }

    fetchFiles();
  }, []);

  return (
    <Box sx={{ maxWidth: 900, margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          padding: 2,
        }}
      >
        <Button
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
      </Box>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
          gap: 2,
        }}
      >
        {files.map((file, index) => (
          <Card key={index} file={file} />
        ))}
      </Box>
    </Box>
  );
};

export default View;
