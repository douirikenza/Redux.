import React from "react";
import { Provider } from "react-redux";
import store from "./JS/Store";
import AddTask from "./AddTask";
import ListTask from "./ListTask";
import FilterTasks from "./FilterTasks";
const App = () => {
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>ToDo App</h1>

        <AddTask />
        <FilterTasks />
        <ListTask />
      </div>
    </Provider>
  );
};

export default App;
