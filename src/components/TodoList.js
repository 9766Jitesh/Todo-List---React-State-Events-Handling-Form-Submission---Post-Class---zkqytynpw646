import React from 'react'

export default function TodoList({ todos, setTodos }) {
    const DeleteHandler=({id})=>{
        setTodos(todos.filter((todo)=>todo.id !==id));
    }
    const completeHnadler=(todo)=>{
        setTodos(
            todos.map((item)=>{
                if(item.id=== todo.id){
                    
                    return{...item,completed:!item.completed}
                }
                
                if(todos.completed==='true'){
                    return{...item,title:style={styles}}
                }
            })
        )
    }
    


    return (
        <div>
            {todos.map((todo) => (
                <li key={todo.id} >
                    <input type="text" value={todo.title} 
                    onChange={(event) => event.preventDefault()}></input>
                    <button>
                    <i className="bi bi-pencil-square" onClick={()=>completeHnadler(todo)}></i>
                    </button>
                    <button>
                    <i className="bi bi-check-circle-fill"></i>
                    </button>
                    <button >
                    <i className="bi bi-trash" onClick={()=>DeleteHandler(todo)}></i>
                    </button>
                
                </li>
            )
            )}
        </div>
    )
}

