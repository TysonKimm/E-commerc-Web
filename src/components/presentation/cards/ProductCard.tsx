import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';


export default function ProductCard({url, title,description,price,star,stock}) {
  return (
    <Card sx={{ maxWidth: 355 }}>
      <CardMedia
        sx={{ height: 150 }}
        image= { url }
        title= {title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
        <Typography sx={{ color: "green" }} variant="body2"  color="text.secondary">
            <strong >Price: ${price}</strong>
        </Typography>
        <Typography>
            Stock: {stock > 0 ? stock : "out of stock"}

        </Typography>
      </CardContent>
      <CardActions>
      <Rating name="read-only" value={star} readOnly />
        <Button size="small" variant="contained" sx={{ color: "white", background: "#DB4444" }}>Add Cart</Button>
      </CardActions>
    </Card>
  );
}