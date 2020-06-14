import React,{useState} from 'react';
//import uuidv4 from 'uuid/v4';
import { v4 as uuidv4 } from 'uuid';
const Todos = () =>{
    const [todoText, setTodoText] = useState("");
    const [todos,setTodos] = useState([
        {
            id:1,
            text: "coding",
            isCompleted: false
        },
        {
            id:2,
            text: "gamingin",
            isCompleted: true
        }
    ]);
    const ChangeTodoText =(e) =>{
       // console.log(e.target.value);
        setTodoText(e.target.value);
       
    };
    const AddTodoText = () =>{
          
            const newTodo = {
            id: uuidv4(),
            text: todoText,
            isCompleted:false
        }; 
        //console.log(newTodo);
        setTodos([newTodo,...todos]);
        setTodoText("");
    };
    const completeTodo =(id) =>{
       // console.log(id);
        const updateTodo = todos.map((todo)=>{
            if(todo.id === id)
            {
                todo.isCompleted = true;
                return todo;
            }
            return todo;

        });
       // console.log(updateTodo);
        setTodos(updateTodo);
    };
    const DeleteTodo = (id) =>{
       const updateTodo = todos.filter(todo => todo.id !== id);
        setTodos(updateTodo); 
       
    }
    return(
    <div className="card">
     <div className="card-header">
    <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter todos" value={todoText} onChange={(e)=> ChangeTodoText(e)}  />
     <div className="input-group-append">
        <button className="btn btn-primary" onClick={AddTodoText}>Add</button>
    </div>
    </div>
</div>
        
        <ul className="list-group list-group-flush">
        {
            todos.map(todo =>{
                return(
                 <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                <div>
                <input type="checkbox" checked={todo.isCompleted} onChange={()=>completeTodo(todo.id)}/>
                <span className={todo.isCompleted ? 'completed': null}>
                {todo.text}
                </span>
                </div>
                 <button className="btn btn-danger" onClick={() => DeleteTodo(todo.id)}>Del</button>
                 </li>
                ); 
            })
        }
        </ul>
    
    </div>
    );
};

export default Todos;
