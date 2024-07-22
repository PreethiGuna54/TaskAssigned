import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import CartContext from '../utils/CartContext';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarOutlineTwoToneIcon from '@mui/icons-material/StarOutlineTwoTone';
import Badge from '@mui/material/Badge';

function ItemDisplay({title,price,thumbnail,rating,brand,id,category}){
  const [isAddedToCart,setIsAddedToCart]=React.useState(true)
  const [cartUseCxt,setCartUseCxt]=React.useContext(CartContext)
    return (
        <>
        
      <div style={{display:"flex",width: "346px",height: "436px",margin: "2%"}}>
      
      <Card sx={{ maxWidth: 345,flexDirection:"row",width:"346px" ,alignItems:"center"}}>
      {category==='specialitem'?<Badge  sx={{left:"327px",backgroundColor:'black',color:'black'}}  color={'warning'} badgeContent={'Sale'} max={999} value="sale"></Badge>:""}

      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title.substring(0,1).toUpperCase()}
          </Avatar>
        }
      
        title={title}
        subheader={brand}
      />
      <CardMedia 
        sx={{width:"50%",alignItems:"center",objectFit:"unset", marginLeft:"25%"}}
        component="img"
        height="190"
        width="50%"
        image={thumbnail}
        alt={title}
      />
      <CardContent sx={{alignContent:"center", alignItems:"center"}}>
        <Typography sx={{textAlign:"center"}} variant="h5" color="text.secondary" >
         {title}
        </Typography>
        <Typography sx={{textAlign:"center"}} variant="body2" color="text.secondary">
         {price}
        </Typography>
        {category==='specialitem'?<Typography sx={{textAlign:"center"}}>
        <StarOutlineTwoToneIcon></StarOutlineTwoToneIcon><StarOutlineTwoToneIcon></StarOutlineTwoToneIcon> <StarOutlineTwoToneIcon></StarOutlineTwoToneIcon>
        </Typography>:<div></div>}
      </CardContent>
     {isAddedToCart?<Button style={{alignItems:"center",marginLeft:"30%"}}  variant="outlined"  onClick={()=>{
        console.log(cartUseCxt)
        setCartUseCxt(cartUseCxt+1)
        setIsAddedToCart(false)
      }}> Add To Cart</Button>:<Button style={{alignItems:"center",marginLeft:"30%"}}  variant="outlined"  onClick={()=>{
        console.log(cartUseCxt)
        setCartUseCxt(cartUseCxt-1)
        setIsAddedToCart(true)
      }}> Remove From Cart</Button>}
      
    </Card>
        </div>
       
        </>
    )
}

export default ItemDisplay