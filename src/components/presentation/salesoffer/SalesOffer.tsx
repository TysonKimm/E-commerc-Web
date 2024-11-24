import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function SalesOffer(){
    return (
        <div>
            <Typography style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: 10}}>
            Summer Sale for All Summer Items And Free Express Delivery-50% OFF! <Link to="/product">Sales</Link>
            </Typography>
        </div>
    )
}