import React,{useState} from "react";
import "./../styles/App.css";
import Form from "./Form";
import Header from "./Header";
import TodoList from "./TodoList";


function App() {
	const[input,setInput]=useState("");
	const[todos,setTodos]=useState([]);
	return (
		<div id="main">
			<div id="inner">

			<div>
				<Header></Header>
			</div>
			<div>
				<Form 
					input={input}
					setInput={setInput}
					todos={todos}
					setTodos={setTodos}>
				</Form>
			</div>
			<div>
				<TodoList todos={todos}
					setTodos={setTodos} ></TodoList>
				
			</div>
		</div>
		</div>
	);
}
export default App;
