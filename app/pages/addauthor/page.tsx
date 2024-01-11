"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import { Container } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import { getDatabase, ref, set } from "firebase/database";
import app from "@/app/firebase/config";
import { useState, useEffect } from "react";
type Props = {};

const AddAuthor = (props: Props) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  // const addAuthor = async () => {
  //   const db = getDatabase(app);
  //   set(ref(db, "authors/" + userId), {
  //     username: name,
  //     email: email,
  //     profile_picture: imageUrl,
  //   });
  // };
  return (
    <>
      <Navbar />
      <Container
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "30px",
          width: "400px",
        }}
      >
        <h1 style={{ fontWeight: "700", fontSize: "30px" }}>Add Author</h1>
        <input
          type="text"
          placeholder="Name*"
          style={{ borderBottom: "1px solid grey", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Birth Year*"
          style={{ borderBottom: "1px solid grey", width: "100%" }}
        />
        <input
          type="text"
          placeholder="Genre*"
          style={{ borderBottom: "1px solid grey", width: "100%" }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">is Dead</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Yes</MenuItem>
            <MenuItem value={20}>No</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Woman</MenuItem>
            <MenuItem value={20}>Man</MenuItem>
            <MenuItem value={30}>x</MenuItem>
          </Select>
        </FormControl>
        <input
          type="text"
          placeholder="ImageURL*"
          style={{ borderBottom: "1px solid grey", width: "100%" }}
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#BC4749",
            margin: "0 auto",
            display: "block",
            textAlign: "center",
            width: "100%",
          }}
          // onClick={() => {
          //   AddAuthor();
          // }}
        >
          ADD
        </Button>
      </Container>
    </>
  );
};

export default AddAuthor;
