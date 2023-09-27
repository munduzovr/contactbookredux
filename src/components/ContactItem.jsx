
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import styles from "../../src/index.module.css"
import { deleteContact } from '../store/contactSlice';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';




export default function CardItem({contact}) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  return (
    
    <Card sx={{ display: 'flex' , justifyContent:'center', width: '25%'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={contact.image}
          alt="contact img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p className={contact.status ? styles.completed : styles.undone}>
            Name:{contact.body}
          </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>+{contact.number}</p>
          </Typography>
          <button onClick={()=> dispatch(deleteContact(contact.id))}>Delete</button>
          <button onClick={()=> navigate(`/edit/${contact.id}`)}>Edit</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
