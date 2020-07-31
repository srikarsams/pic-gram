import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const uploadHandler = e => {
    const selectedFile = e.target.files[0];
    console.log(selectedFile);
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError("Please select a valid file type!");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={uploadHandler} />
        <span>+</span>
      </label>
      {error && <div className="error">{error}</div>}
      {file && <div>{file.name}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  );
};

export default UploadForm;
