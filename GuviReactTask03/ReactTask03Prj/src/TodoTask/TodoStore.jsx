import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import Avatar from '@mui/material/Avatar';

import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


import {Button} from '@mui/material';
import TodoDisplay from './TodoDisplay';
import TodoUpdate from './TodoUpdate';
import TodoMap from './TodoMap';

function TodoStore({name,desc,status,id,isActive}){
 const [isNotDelete,setIsNotDelete]=React.useState(isActive)
 const [level, setLevel] = React.useState(status);
 const [edit,setEdit] =React.useState(false);

  const handleChange = (event) => {
    console.log(event)
    setLevel(event.target.value);

  };
 

  const compStyle={margin:"10px",width:"120px",height:"30px"}
    return (
        <>
      {isNotDelete===true? 
      <div style={{display:"flex",width: "260px",height: "180px",margin: "2%"}}>
      
      <Card >

      <CardContent sx={{width:"300px",height:"320px",backgroundColor:"#d3f1d3",fontFamily: "serif"}}>
        <Typography variant="body2" color="text.secondary" >
         Name:{name}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
         Description:{desc}
        </Typography>
        <Typography  variant="body2" color="text.secondary">
        
        Status:
       
        <Select sx={{margin:"10px",width:"120px",height:"30px"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={level}
          label="Status"
          onChange={handleChange}
        > 
        
          <MenuItem  value={'completed'}>Completed</MenuItem>
          <MenuItem value={'notCompleted'}>Not Completed</MenuItem>
         
        </Select>
        </Typography>
       
        <button style={{alignItems:"center",marginTop:"15%",marginLeft:"30%",backgroundColor:"#65a207",borderRadius:"3px",width:"60px",height:"25px",color:"white",fontSize:"9px",fontFamily: "serif"}} onClick={(event)=>{
        console.log(name+""+desc+""+id+""+status)
        setEdit(true)}}>Edit</button>
        {edit?<TodoUpdate name={name} id={id} desc={desc} status={status}/>:""}
      <button style={{alignItems:"center",marginLeft:"10%",backgroundColor:"#d22020",borderRadius:"3px",width:"60px",height:"25px",color:"white",fontSize:"9px",fontFamily: "serif"}} onClick={(e)=>{
        {console.log(e)}
        setIsNotDelete(false)
      }}> Delete</button>
      </CardContent>
      
    
      
    </Card>
        </div>:null}
       
        </>
    )
}

export default TodoStore