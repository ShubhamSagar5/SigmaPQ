import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const Todo = () => {
    
    const [todo,setTodo] = useState([{tasks:"Go to gym",tasksId:uuidv4(),isDone:false}])
    const [todoText,setTodoText] = useState('')

    const handleSubmit = () => {
        
        setTodo((prevTodo)=>{
            return [...prevTodo,{tasks:todoText,tasksId:uuidv4()}]
        })
        setTodoText("")
        
    }

    const handleDelete = (id) => {
        // const newTasks = todo.filter((tasks)=>{
        //     return tasks.tasksId != id
        // })

        // setTodo(newTasks)

        setTodo((prevTodo)=>{
           
            return prevTodo.filter((tasks)=>{
                return tasks.tasksId != id
            })
        })

    }
    const updateAll = () => {
    //  let newArr =    todo.map((tasks)=>{
    //         return {
    //             ...tasks,
    //             tasks:tasks.tasks.toUpperCase()
    //         }
    //     })

    setTodo((prevTodo)=>{
        return prevTodo.map((item)=>{
                    return {
                        ...item,
                        tasks:item.tasks.toUpperCase()
                    }
                })
    })
       
    }

    const updateone = (id) => {
    //    const newUpdate = todo.map((item)=>{
    //     if(item.tasksId == id){
    //         return {
    //             ...item,
    //             tasks:item.tasks.toUpperCase()
    //         }
    //     }else{
    //         return item
    //     }
    //    })

    //    setTodo(newUpdate)

    setTodo((prevTodo)=>{
        return prevTodo.map((item)=>{
          
            if(item.tasksId == id){
                return {
                    ...item,
                    tasks:item.tasks.toUpperCase()
                }
            }else{
                return item 
            }
        })
    })


    }

    const doneAll = () => {
        setTodo((prevTasks)=>{
            return prevTasks.map((item)=>{
                return {
                    ...item,
                    isDone:true
                }
            })
        })
    }

    const handleDone = (id) => {
        const doneTasks = todo.map((item)=>{
            if(item.tasksId === id){
                return {
                    ...item,
                    isDone:true
                }
            }else{
                return item
            }
        })

        setTodo(doneTasks)
    }

    return(
        <div>

            <h3>Todo</h3>

            <br />

        <input type="text" value={todoText} onChange={(e)=>setTodoText(e.target.value)} placeholder="Add Todo"/>
        <button onClick={handleSubmit}>Add</button>

        <div>
            <ul>
                {
                    todo.map((el)=>{
                        return (
                       

                            <li key={el.tasksId}><span style={{textDecoration: el.isDone && "line-through"}}>{el.tasks}</span> <button onClick={()=>handleDelete(el.tasksId)}>Delete</button> <button onClick={()=>updateone(el.tasksId)}>update one</button> <button onClick={()=>handleDone(el.tasksId)}>Done</button> </li>
                         
                        )
                    })
                }
            </ul>

            <button onClick={updateAll}>Update All</button>
            <button onClick={doneAll}>All Done</button>
        </div>

        </div>
    )
}


export default Todo