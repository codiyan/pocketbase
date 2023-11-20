import React from "react";
import PocketBase from "pocketbase";
import { pb } from "../../services/pocketbase";

const Dashboard: React.FC = () => {


  const uploadFile = async () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;

    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const formData = new FormData();
      formData.append("file", fileInput.files[0]);

      try {
        const createdRecord = await pb.collection("waqar").create(formData);
        console.log("createdRecord:", createdRecord);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const downloadFile = (recordId: string, fileName: string) => {
    // const fileUrl = `${apiURL}/api/files/waqar/${recordId}/${fileName}`;
    // window.open(fileUrl, "_blank");
    alert('Code was wrong for downloading')
  };

  return (
    <div>
      <input type="file" id="fileInput" accept=".pdf,.csv" />
      <button onClick={uploadFile}>Upload File</button>
      <button
        onClick={() => downloadFile("kc8og6u4sgujt3h", "minder_hyqVZX1GNP.pdf")}
      >
        Download File
      </button>
    </div>
  );
};

export default Dashboard;
