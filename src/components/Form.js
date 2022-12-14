import React from 'react';
import{v4 as uuidv4} from "uuid";

export default function Form({input,setInput,todos,setTodos}) {
    const onInputChange=(event)=>{
        setInput(event.target.value)
    }

    const onFormSubmit=(event)=>{
        event.preventDefault();
        setTodos([...todos,{id: uuidv4(), title: input ,completed: false}]);
        setInput('');
    }
    return (
       
            <form  onSubmit={onFormSubmit}>
                <input className='todo-input' 
                value={input} onChange={onInputChange} 
                placeholder='Enter a ToDo....' ></input>

                <button type="submit">Add</button>
            </form>
       
    )
}
