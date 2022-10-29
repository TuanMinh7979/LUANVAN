import React from "react";

import axios from "axios";
import { useState } from "react";
function Upload() {
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    if (selectedFile.size / 1024 / 1024 > 1) {
      alert("Max file size is 5MB");
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error("AHHHHHHHH!!");
      alert("something went wrong!");
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    const message = await fetch("other/updateimg", {
      method: "POST",
      body: JSON.stringify({ data: base64EncodedImage }),
      headers: { "Content-Type": "application/json" },
    });

    setFileInputState("");
    setPreviewSource("");
    if (message.status == 200) {
      alert("Image uploaded successfully");
    } else {
      alert("Something wrong");
    }
  };
  return (
    <div>
      <h1 className="title">Upload an Image</h1>

      <form onSubmit={handleSubmitFile} className="form">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {previewSource && (
        <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
      )}
    </div>
  );
}
export default Upload;
