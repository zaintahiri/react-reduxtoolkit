import { createSlice,nanoid } from "@reduxjs/toolkit";

//1- set initial State
const initialState={
    todos:[]
}

//2-create slice using createSlice hook
export const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        createToDo:(state,action)=>{
            const todo={ 
                id:nanoid(),
                todo:action.payload,
                completed:false
            }
            state.todos.push(todo)
        },
        updateToDo:(state,action)=>{
            const {id,newText}=action.payload
            const todo=state.todos.find((todo)=>todo.id === id);
            if(todo){
                todo.todo=newText
             }
        },
        deleteToDo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id !== action.payload)
        },
        completeToDo:(state,action)=>{
            const todo=state.todos.find((todo)=>todo.id === action.payload);
            if(todo){
                todo.completed=!todo.completed;
            }
        }
    }
})

// export actions from slice like below todoSlice.actions
export const {createToDo,deleteToDo,updateToDo,completeToDo}=todoSlice.actions

export default todoSlice.reducer;