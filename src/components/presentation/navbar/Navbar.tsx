import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchBar from './searchbar/SearchBar';
import Box from '@mui/material/Box';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', boxShadow: "none", flexGrow: 1, borderBottom: '1px solid #ccc' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* Center Section with Home, Product, and Contact */}
        <Box sx={{ display: 'flex', gap: 4, justifyContent: 'center', alignItems: 'center', flexGrow: 1, }}>
          <Typography variant="h6">
            <Link to="/" style={{ fontSize: 25, color: "black", textDecoration: "none" }}>Home</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/Product" style={{ fontSize: 25, color: "black", textDecoration: "none" }}>Product</Link>
          </Typography>
          <Typography variant="h6">
            <Link to="/Contact" style={{ fontSize: 25, color: "black", textDecoration: "none" }}>Contact</Link>
          </Typography>
        </Box>

        {/* Right Section with Search and Login */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="/ItemsCart">
          <ShoppingCartIcon style={{ color: "#DB4444", fontSize: 40 }} />
          </Link>
          <SearchBar />
          <Link to="/Login">
          <Button color="inherit" style={{ color: "black", fontSize: 20 }}>Login</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}



