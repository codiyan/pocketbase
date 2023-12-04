import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
type FileCardProps = {
  file: {
    id: string;
    file: string;
    created: string;
    updated: string;
  };
};

const FileCard: React.FC<FileCardProps> = ({ file }) => {
  const { id, file: fileName } = file;

  const getIcon = (fileName: string) => {
    if (fileName.endsWith(".pdf")) return PictureAsPdfOutlinedIcon;
    if (fileName.endsWith(".xlsx")) return TableChartOutlinedIcon;
    return ImageOutlinedIcon;
  };

  const formatFileName = (name: string) => {
    let nameWithoutId = name.split("_")[0];
    nameWithoutId =
      nameWithoutId.charAt(0).toUpperCase() + nameWithoutId.slice(1);
    const extension = name.substring(name.lastIndexOf("."));
    return nameWithoutId + extension;
  };
  const handleFileOpen = () => {
    const fileUrl = `http://127.0.0.1:8090/api/files/attachments/${id}/${encodeURIComponent(
      fileName
    )}`;
    window.open(fileUrl, "_blank");
  };
  const getFileExtension = (name: string) => {
    const matches = name.match(/(?<=\.)\w+$/);
    return matches ? matches[0].toUpperCase() : "UNKNOWN";
  };

  const Icon = getIcon(fileName);
  const formattedName = formatFileName(fileName);
  const fileExtension = getFileExtension(fileName);

  return (
    <Card
      variant="outlined"
      sx={{
        width: 280,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 1,
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        "&:hover": {
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        },
      }}
      onClick={handleFileOpen}
    >
      <Icon sx={{ fontSize: "40px" }} />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography level="body-md" fontWeight="bold">
          {formattedName}
        </Typography>
        <Typography level="body-sm">2.5 MB {fileExtension}</Typography>
      </Box>
    </Card>
  );
};

export default FileCard;
