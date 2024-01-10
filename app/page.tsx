import Image from "next/image";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "400px",
          fontSize: "25px",
          fontWeight: "600",
        }}
      >
        This is home
      </div>
    </main>
  );
}
