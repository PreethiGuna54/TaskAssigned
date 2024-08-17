import TodoStore from "./TodoStore"
import TodoUpdate from "./TodoUpdate"
import '../App.css'
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import { useState } from "react";


function TodoMap({todoList}){
    const [topLevel,setTopLevel]=useState("");
    const [isChanged,setIsChanged]=useState(false)
    const statusFilter=(event)=>{
        console.log(event)
        setTopLevel(event.target.value);
        if(event.target.value!=""){
            setIsChanged(true)
        }else{
            setIsChanged(false)
        }
       // todoList.filter((element)=>element.status=="event.target.value");
    }

    const contentFilter=(element,index)=>{
    const name="",desc="",status="",id="",isActive="";
    <TodoStore name={element.name} desc={element.desc} status={element.status} id={index} isActive={element.isActive}/>
    }
    return(
        <>
        <div className="header-class">
            <h4 className="todosclass">My todos </h4>
            <h4 className="statusclass">StatusFilter</h4>
            <Select sx={{margin:"10px",width:"120px",height:"30px"}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Status"
            value={topLevel}
            onChange={(event)=>statusFilter(event)}
            > 
            <MenuItem  value={''}>All</MenuItem>
            <MenuItem  value={'completed'}>Completed</MenuItem>
            <MenuItem value={'notCompleted'}>Not Completed</MenuItem>
            </Select>
        </div>
        
        
        <div className="App">
{console.log(topLevel)}
    <TodoStore name={""} desc={""} status={""} id={""} isActive={""} />
        {isChanged?todoList.filter((element)=>(element.isActive==true&&element.status==topLevel)).map((element,index)=>
       <TodoStore name={element.name} desc={element.desc} status={element.status} id={index} isActive={element.isActive} isChanged={isChanged}/>)
        :todoList.filter((element)=>(element.isActive==true)).map((element,index)=>
        <TodoStore name={element.name} desc={element.desc} status={element.status} id={index} isActive={element.isActive}/>)}
        </div>
        
        </>
    )
}

export default TodoMap