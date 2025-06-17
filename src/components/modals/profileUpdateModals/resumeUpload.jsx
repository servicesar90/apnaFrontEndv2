import React, { useState } from "react";
import { uploadFile } from "../../../API/ApiFunctions";
import { Box, Button, Modal } from "@mui/material";
import { showErrorToast } from "../../ui/toast";
import { fetchUserProfile } from "../../../Redux/getData";
import { useDispatch } from "react-redux";

const UserForm = ({ open, label, onClose, metaData }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(metaData.default);
  const [uploadStatus, setUploadStatus] = useState("");
  const dispatch= useDispatch();

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
    console.log(selected);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return showErrorToast("Please select an image!");
    setUploadStatus("Uploading....");
    const response = await uploadFile(file, metaData.field, metaData.Api);
    if (response) {
      setUploadStatus("Successfully Uploaded");
     dispatch(fetchUserProfile())
    } else {
      setUploadStatus("Could not uploaded, please try again");
    }
  };

  return (
    <Modal open={open} onClose={onClose} fullwidth>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: "auto",
          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="max-w-400 flex flex-col justify-center"
        >
          <h2 className="m-4 font-medium text-16 text-center text-gray-800">
            {label}
          </h2>
          {preview && !preview.toLowerCase().endsWith(".pdf") && (
            <img
              src={preview}
              alt="Preview"
              className="m-4 rounded-[50%] w-[10rem] h-[10rem] self-center"
            />
          )}
          <input
            type="file"
            accept={
              label === "Upload Resume"
                ? ".pdf, .doc, .docx, .txt"
                : ".jpg,.jpeg,.png, .svg"
            }
            onChange={handleFileChange}
            className="m-4"
          />

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              type="submit"
              sx={{ margin: "0.5rem", width: "4rem" }}
            >
              Submit
            </Button>
          </Box>

          <p className="m-4 text-14  text-red-500 ">{uploadStatus}</p>
        </form>
      </Box>
    </Modal>
  );
};

export default UserForm;
