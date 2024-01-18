import { ADD_TASK, EDIT_TASK, FILTER_TASKS, TOGGLE_TASK } from "./ActionTypes";

export const addTask = (description) => ({                 //ADDING TASK ACTION
    type: ADD_TASK,
    payload: {
      id: Math.random(), 
      description,
      isDone: false,
    },
  });
  
  export const toggleTask = (id) => ({                    //TOGGLE DONE OR NO ACTION
    type: TOGGLE_TASK,
    payload: { id },
  });
  
  export const editTask = (id, description) => ({              // EDITING TASKS
    type: EDIT_TASK,
    payload: { id, description },
  });
  
  export const filterTasks = (filterType) => ({            //FILTERING TASKS
    type: FILTER_TASKS,
    payload: { filterType },
  });