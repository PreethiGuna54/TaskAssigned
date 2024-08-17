import { Button } from "@mui/material"
import { useState } from "react"
import { allTodo } from "../utils/TodoData"
import TodoMap from "./TodoMap"


function TodoDisplay({todoList,setTodoList,name,desc,status,id}){
    const [todoName,setTodoName]=useState(name)
    const [todoDesc,setTodoDesc]=useState(desc)
    const [level,setLevel]=useState(status)
    const [todoId,setTodoId]=useState(id)
    const [allTodoCpy,setAllTodoCpy]=useState('')
    function onChange(event){
        if(name!=""){
            setTodoName(name)
        }else{
            setTodoName(e.target.value)
        }
        
    }
    return(
        <>
     
        <h4 style={{color:'green',textAlign:'center'}}>My todo</h4>
        
        <input style={{border:'1px solid green',width:"250px",height:"30px"}} 
        type="text" 
        id='todoName' 
        placeholder="Todo Name"
        defaultValue= {todoName}
        onChange={(e)=>{setTodoName(e.target.value)}}/>
        {console.log(todoName)}
        <span style={{margin:"20px"}}></span>
       
        <input style={{border:'1px solid green',width:"250px",height:"30px"}} 
        type="text" 
        id='todoDesc' 
        placeholder="Todo Desc"  
        defaultValue={todoDesc} 
        onChange={(e)=>{setTodoDesc(e.target.value)}}/>
        
        <span style={{margin:"20px"}}></span>
        
        <button id='add' 
        style={{backgroundColor:'yellowgreen',width:"250px",height:"30px",textAlign:'center',
            borderRadius:'5px',border:'1px solid green' }} 
        onClick={()=>{
            console.log(todoDesc+"--------"+todoName)
            const myTodo={
                name:todoName,
                desc:todoDesc,
                status:'notCompleted',
                isActive:true
            }
            console.log(JSON.stringify(todoList))
            setTodoList([...todoList,myTodo])
            console.log(JSON.stringify(todoList))
            
        }}>Add Todo</button>

        
        </>
    )
}

export default TodoDisplay