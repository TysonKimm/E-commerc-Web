import { Box } from "@mui/material"
import { Link } from "react-router-dom"


export default function TextOnLeft(){
    const nameOfCat = [
        {
            name: "Woman Fashion",
            path: "/Product",
        },
        {
            name: "Men's Fashion",
            path:"/contact",
        },
        {
            name: "Electronic",
        },
        {
            name: "Home & Living",
        },
        {
            name: "Beauty & Health",
        },
        {
            name: "Sports & Outdoors",
        },
        {
            name: "Furniture",
        },
        {
            name: "Garden & Outdoor",
        },
        {
            name: "Home Decor",
        },
    ]
    return (
        <Box sx={{ width: "34vh", height: "50vh"}}>
        <div style={{paddingLeft: "100px", color: "red",}}>
            {nameOfCat.map((item, index) => (
                <Link to="" key={index} style={{ color: "#DB4444"}}>
                    <h2>{item.name}</h2>
                </Link>
            ))}
        </div>
        </Box>
    )
}