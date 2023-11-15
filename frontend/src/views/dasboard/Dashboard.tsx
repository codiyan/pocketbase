import React from "react";
import PocketBase from "pocketbase";

const Dashboard: React.FC = () => {
  const apiURL =
    process.env.REACT_APP_API_URL?.split("/api/")[0] || "http://127.0.0.1:8090";
  const authToken = process.env.REACT_APP_AUTH_TOKEN || "";

  const pb = new PocketBase(apiURL);

  if (authToken) {
    pb.authStore.save(authToken);
  }

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
    const fileUrl = `${apiURL}/api/files/waqar/${recordId}/${fileName}`;
    window.open(fileUrl, "_blank");
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
