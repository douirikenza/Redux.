import { createStore } from 'redux';
import tasksReducer from './TasksReducer'; //MAKING THE SOTRE
const store = createStore(tasksReducer);

export default store;
