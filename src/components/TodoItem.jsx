import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    let dispatch = useDispatch();

    return (
        <div>
            <div className="row mx-2 align-items-center">
            <div>#</div>
                <div className="col">
                    {editable ?
                        <input type="text" className="form-control"
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                            }}

                        />
                        :
                        <h4>{todo.name}</h4>}
                         
                         <hr/> 
                </div>
                
                <button className="btn btn-warning m-2"
                    onClick={() => {
                        dispatch(updateTodo({
                            ...todo,
                            name: name
                        }))
                        if(editable) {
                         setName(todo.name);   
                        }
                        setEditable(!editable);
                      

                    }}
                >{editable?"Update":"Edit"}</button>
                <button className="btn btn-danger m-2"
                    onClick={() => dispatch(deleteTodo(todo.id))}
                >Delete</button>
              
            </div>
        </div>
    )
}

export default TodoItem
