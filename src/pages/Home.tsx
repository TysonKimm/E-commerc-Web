import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/presentation/navbar/Navbar";
import { Grid2, Stack, Typography, Box } from "@mui/material";
import SalesOffer from "../components/presentation/salesoffer/SalesOffer";
import TextOnLeft from "../components/presentation/textleft/TextOnLeft";
import CategoryCard from "../components/presentation/cards/CategoryCard";
import catIconPhone from "../assets/icons/Category-CellPhone.png";
import catIconCamera from "../assets/icons/Category-Camera.png";
import catIconComputer from "../assets/icons/Category-Computer.png";
import catIconGamePad from "../assets/icons/Category-Gamepad.png";
import catIconHeadPhone from "../assets/icons/Category-Headphone.png";
import catIconWatch from "../assets/icons/Category-SmartWatch.png";
import ProductCard from "../components/presentation/cards/ProductCard";
import Button from '@mui/material/Button';
import TodaySales from "../components/presentation/eachpart/TodaySales";
import ThisMonth from "../components/presentation/eachpart/ThisMonth";
import Footer from "../components/presentation/footer/Footer";
import Frame600 from "../assets/icons/Frame-600.png";
import Frame560 from "../assets/icons/Frame-560.png"
import CloudIcon from '@mui/icons-material/Cloud';
import { useState } from "react";

export default function HomePage() {
  const cateCard = [
    { iconSrc: catIconPhone, label: "Phones" },
    { iconSrc: catIconComputer, label: "Computers" },
    { iconSrc: catIconWatch, label: "SmartWatch" },
    { iconSrc: catIconCamera, label: "Camera" },
    { iconSrc: catIconHeadPhone, label: "HeadPhones" },
    { iconSrc: catIconGamePad, label: "Gaming" },
  ];

  const images = [
    { src: Frame600, alt: "Frame600" },
    { src: Frame560, alt: "Frame560" },
    { src: Frame600, alt: "Frame600" }
    // Add more images here if needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div>
      <Typography>
        <SalesOffer />
      </Typography>
      <ResponsiveAppBar />

      {/* Text and ImageSlider of Ads */}
      <div>
        <Grid2 container spacing={2}>
          <Grid2/><TextOnLeft />
          <Grid2/><div >
            <Box sx={{ position: 'absolute', maxWidth: '55%', overflow: 'hidden', alignItems: "center"}}>
              {/* Image container */}
              <Box
                sx={{
                  display: 'flex',
                  transition: 'transform 0.5s ease',
                  transform: `translateX(-${currentIndex * 100}%)`
                }}
              >
                {images.map((image, index) => (
                  <Box key={index} sx={{ minWidth: '100%' }}>
                    <img
                      src={image.src}
                      alt={image.alt}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  </Box>
                ))}
              </Box>

              {/* Dot navigation */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  display: 'flex',
                  gap: 1,
                }}
              >
                {images.map((_, index) => (
                  <Box
                    key={index}
                    onClick={() => handleDotClick(index)}
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: '50%',
                      backgroundColor: currentIndex === index ? '#DB4444' : '#fff',
                      cursor: 'pointer',
                      transition: 'background-color 0.3s',
                    }}
                  />
                ))}
              </Box>
            </Box>
          </div>
        </Grid2>
        <hr style={{ width: "190vh", paddingLeft: "100px" }}></hr>
      </div>

      {/* Today Sales Section */}
      <Box sx={{ display: 'flex', }}>
        <CloudIcon sx={{ marginTop: 7, fontSize: 70, color: "#DB4444" }} />
        <TodaySales />
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', padding: 2 }}>
        <Button variant="contained" color="primary" sx={{ fontSize: 17, backgroundColor: "#DB4444", padding: 2 }}>
          View All Products
        </Button>
      </Box>

      {/* Categories Section */}
      <div>
        <Stack spacing={2}>
          <Box sx={{ display: "flex" }}>
            <CloudIcon sx={{ fontSize: 70, color: "#DB4444" }} />
            <Typography sx={{ fontSize: 23, color: "#DB4444", paddingLeft: "100px" }}>Categories</Typography>
          </Box>
          <Typography sx={{ fontSize: 50, paddingBottom: 2, paddingLeft: "120px", paddingTop: "none", fontFamily: "inherit" }}>
            Browse By Category
          </Typography>
        </Stack>
        <Stack sx={{ paddingLeft: "100px" }}>
          <Grid2 container spacing={1}>
            {cateCard.map((category, index) => (
              <Grid2 key={index}>
                <CategoryCard iconSrc={category.iconSrc} label={category.label} />
              </Grid2>
            ))}
          </Grid2>
        </Stack>
      </div>

      {/* This Month Section */}
      <div>
        <Box sx={{ display: 'flex', }}>
          <CloudIcon sx={{ marginTop: 7, fontSize: 70, color: "#DB4444" }} />
          <ThisMonth />
        </Box>
      </div>

      {/* Product Image Section */}
      <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: 5 }}>
        <img src={Frame600} alt="Product Promo" />
      </div>

      {/* Lower Navbar "Footer" Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

      