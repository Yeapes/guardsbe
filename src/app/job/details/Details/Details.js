"use client";

import React, { useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

const baseUrl = process.env.BASE_URL;

const Details = ({ JobsData }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    // jobId: JobsData.id,
    jobId: "",
    name: "",
    email: "",
    salary_expectation: "",
    current_salary: "",
    cv_file: null,
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    const cv_file = e.target.files[0];
    setFormData({
      ...formData,
      cv_file: cv_file,
    });
  };

  const handleSubmit = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("careers_id", JobsData.id);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("salary_expectation", formData.salary_expectation);
      formDataToSend.append("current_salary", formData.current_salary);
      formDataToSend.append("cv_file", formData.cv_file); // Append the file data, not the name
      await axios.post(`${baseUrl}/career-apply`, formDataToSend);
      handleClose();
    } catch (error) {
      // Handle and display any errors
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="py-12 px-6 md:px-12 lg:px-24 xl:px-36">
      <h3 className="text-3xl text-center text-black font-semibold py-3">
        Position: {JobsData?.title}
      </h3>

      <div dangerouslySetInnerHTML={{ __html: JobsData.description }}></div>

      <div>
        <Button
          className="text-white px-12 py-4 bg-blue-500 inline-block mt-4 rounded-xl text-xl hover:text-black"
          variant="outlined"
          onClick={handleClickOpen}
        >
          Apply For this position
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle> Submit Application </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Fill this form and attach your cv or resume to apply for this
              post.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Full Name"
              type="text"
              fullWidth
              variant="standard"
              value={formData.name}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="salary_expectation"
              label="Expected Salary"
              type="text"
              fullWidth
              variant="standard"
              value={formData.salary_expectation}
              onChange={handleInputChange}
            />
            <TextField
              autoFocus
              margin="dense"
              id="current_salary"
              label="Current Salary"
              type="text"
              fullWidth
              variant="standard"
              value={formData.current_salary}
              onChange={handleInputChange}
            />
            <input
              autoFocus
              margin="dense"
              id="cv_file"
              label="Upload you cv / resume (pdf)"
              type="file"
              fullWidth
              variant="standard"
              // value={formData.cv_file}
              onChange={handleFileChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Details;
