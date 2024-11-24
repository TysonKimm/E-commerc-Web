import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import SalesOffer from "../components/presentation/salesoffer/SalesOffer";
import ResponsiveAppBar from "../components/presentation/navbar/Navbar";
import ContactCard from "../components/presentation/contactcard/ContactCard";


export default function ContactPage(){
    return (
      <div>
      <Typography>
        <SalesOffer/>
      </Typography>
      <ResponsiveAppBar/>
      <h1 style={{ textAlign: "center"}}>Contact Page</h1>
      <ContactCard/>

    </div>
    )
}