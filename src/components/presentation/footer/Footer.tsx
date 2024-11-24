
import { Typography, TextField, Button, Box, Link, IconButton,Grid2 } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
export default function Footer(){
  return (
    <div>
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px', fontSize: 20,display: 'flex', justifyContent: 'center'}}>
      <Grid2 container spacing={4}>
        {/* Exclusive */}
        <Grid2>
          <Typography variant="h6" sx={{ fontWeight: 'bold',fontSize: 30 }}>Exclusive</Typography>
          <Typography variant="body2" sx={{ margin: '10px 0', fontSize: 20 }}>
            Subscribe
          </Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px', fontSize: 20}}>
            Get 10% off your first order
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', fontSize: 20 }}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              size="small"
              sx={{
                backgroundColor: '#fff',
                borderRadius: '5px',
                marginRight: '8px',
                flexGrow: 1,
              }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: '#fff', color: '#000', minWidth: '40px', padding: '8px' }}
            >
            </Button>
          </Box>
        </Grid2>

        {/* Support */}
        <Grid2>
          <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: 30}}>Support</Typography>
          <Typography variant="body2" sx={{ margin: '10px 0',fontSize: 20}}>
            Phnom Penh, Cambodia, Steung Mean Chey
          </Typography>
          <Typography variant="body2" sx={{ fontSize: 20}}>exclusive@gmail.com</Typography>
          <Typography variant="body2" sx={{ fontSize: 20}}>+855 0000000</Typography>
        </Grid2>

        {/* Account */}
        <Grid2>
          <Typography variant="h6" sx={{ fontWeight: 'bold',fontSize: 30 }}>Account</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <Link href="#" color="inherit" underline="hover">My Account</Link>
            <Link href="#" color="inherit" underline="hover">Login / Register</Link>
            <Link href="#" color="inherit" underline="hover">Cart</Link>
            <Link href="#" color="inherit" underline="hover">Wishlist</Link>
            <Link href="#" color="inherit" underline="hover">Shop</Link>
          </Box>
        </Grid2>

        {/* Quick Link */}
        <Grid2>
          <Typography variant="h6" sx={{ fontWeight: 'bold',fontSize: 30 }}>Quick Link</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: 20 }}>
            <Link href="#" color="inherit" underline="hover">Privacy Policy</Link>
            <Link href="#" color="inherit" underline="hover">Terms Of Use</Link>
            <Link href="#" color="inherit" underline="hover">FAQ</Link>
            <Link href="#" color="inherit" underline="hover">Contact</Link>
          </Box>
        </Grid2>

        {/* Download App */}
        <Grid2>
          <Typography variant="h6" sx={{ fontWeight: 'bold',fontSize: 30 }}>Download App</Typography>
          <Typography variant="body2" sx={{ marginBottom: '10px',fontSize: 20}}>
            Save $3 with App New User Only
          </Typography>
          <Box sx={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
            <Box
              component="img"
              src="/path/to/qr-code.png"
              alt="QR Code"
              sx={{ width: '50px', height: '50px' }}
            />
            <Box>
              <Box
                component="img"
                src="/path/to/google-play.png"
                alt="Google Play"
                sx={{ width: '100px', marginBottom: '5px',fontSize: 20 }}
              />
              <Box
                component="img"
                src="/path/to/app-store.png"
                alt="App Store"
                sx={{ width: '100px' }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <IconButton color="inherit"><Facebook /></IconButton>
            <IconButton color="inherit"><Twitter /></IconButton>
            <IconButton color="inherit"><Instagram /></IconButton>
            <IconButton color="inherit"><LinkedIn /></IconButton>
          </Box>
        </Grid2>
      </Grid2>
      <Typography variant="body2" align="center" sx={{ marginTop: '20px' }}>
        © Copyright Rimel 2022. All rights reserved
      </Typography>
    </Box>
    </div>
  );
};
