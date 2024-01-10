"use client";
import React from "react";
import Navbar from "../../components/Navbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import app from "../../firebase/config";
import {
  getDatabase,
  ref,
  get,
  child,
  set,
  onValue,
  remove,
} from "firebase/database";
type Props = {};

const Authors = (props: Props) => {
  const [data, setData] = useState<
    {
      name: string;
      year: number;
      genre: string;
      id: number;
      isDead: boolean;
      image: string;
      gender: string;
    }[]
  >([]);
  const [age, setAge] = React.useState("");
  let arr = [1, 2, 3, 4, 5];
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const getRealTimeDB = async () => {
    const db = getDatabase(app);
    const dbRef = ref(getDatabase(app));
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          setData(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // bu real update data oxumaqdir
  const getRealTimeOnValueDB = async () => {
    const db = getDatabase(app);
    const starCountRef = ref(db, "authors/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(snapshot.val());
    });
  };

  useEffect(() => {
    // getRealTimeDB();
    getRealTimeOnValueDB();
  }, []);
  const deleteAuthor = async (id) => {
    const db = getDatabase(app);
    remove(ref(db, "authors/" + id));
  };
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: "10px" }} maxWidth="xl">
        <Box sx={{ width: 350, display: "flex", gap: "10px" }}>
          <input
            placeholder="Search Author"
            type="text"
            style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
          />
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
          </FormControl>{" "}
        </Box>

        <Grid container style={{ marginTop: "50px" }}>
          {data &&
            data.map((elem, i) => {
              return (
                <Grid xl={3} md={4} sm={4} xs={12} lg={3}>
                  <Card
                    sx={{
                      maxWidth: 345,
                      paddingBottom: "20px",
                      objectFit: "cover",
                      marginBottom: "10px",
                    }}
                  >
                    <CardMedia
                      sx={{ height: 140 }}
                      image={elem.image}
                      title="green iguana"
                      style={{ height: "260px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {elem.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Genre:{elem.genre}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender:{elem.gender}
                      </Typography>
                    </CardContent>

                    <Button
                      variant="contained"
                      style={{
                        backgroundColor: "#BC4749",
                        margin: "0 auto",
                        display: "block",
                        textAlign: "center",
                      }}
                      onClick={() => {
                        deleteAuthor(elem.id - 1);
                      }}
                    >
                      Delete
                    </Button>
                  </Card>{" "}
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </>
  );
};

export default Authors;
