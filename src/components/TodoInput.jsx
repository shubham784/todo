import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import {v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux';
import './Todo.css'; 


const TodoInput = () => {
    let [name, setName] = useState();
    let dispatch = useDispatch();
    return (
        <>
            <h1 className='header-title'>TODO LIST ITEM</h1>
            <div className="row m-2">
                <input
                value={name}
                onChange={(e)=>setName(e.target.value)}
                type="text" className="col form-control"/>
                <button
                
                onClick={()=>{
                       dispatch(  addTodo({
                        id: uuid(),
                        name: name
                    }));
                        setName('');
                    }}
                className="btn btn-primary mx-2" style={{ width: "140px" }}>Add</button>


            </div>
        </>
    )
}

export default TodoInput
