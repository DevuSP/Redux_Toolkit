import { createSlice, nanoid } from "@reduxjs/toolkit"; // nanoid creates id's or generate random id's.

const initialState = {
    todos: [{ id: 1, text: "Hello World." }]
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,             // value from data.
    reducers: {                // these are funcionalities. Must have whole function defined in these.
        
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload  //payload is an object.
            }
            state.todos.push(todo); // todos from initial state and todo from above. This is to save new todo.
        }, // state gives all the values in store.

        removeTodo: (state, action) => {    // state contains data from initailstate. 
            // Action contatins id to be removed sent through place where function is called from.
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },

        updateTodo: (state, action) => {
            state.todos = state.todos.map((element) => {
                return element.id === action.payload.id ? { ...element, text: action.payload.text } : element;
            })
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions; // to be used in components.

export default todoSlice.reducer; // this is to aware our store of reducer.