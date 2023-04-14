const initial_state = {
    todoList: []
};



const TODOReducer = (state=initial_state, action) => {
    switch(action.type) {
        case 'AddITEM': 
        return {
            ...state,
            todoList:todolist.push(data)
        }
        default:
            return state
    }
};

export default TODOReducer;