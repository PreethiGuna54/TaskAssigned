import TodoDisplay from "./TodoDisplay"

function TodoUpdate({name,desc,status,id}){

    return(
    <>
    <TodoDisplay name={name} desc={desc} status={status} id={id}/>
    </>
    )
}

export default TodoUpdate