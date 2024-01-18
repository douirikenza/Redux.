import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from './JS/actions/Actions'; // Import your action creator
import Button from 'react-bootstrap/Button';

const FilterTasks = () => {
  const dispatch = useDispatch();

  const handleFilter = (filterType) => {
    dispatch(filterTasks(filterType)); // Dispatch action with the filter type
  };

  return (
    <div>
      <Button onClick={() => handleFilter('ALL')}>All</Button>
      <Button variant="outline-success" onClick={() => handleFilter('DONE')}>Done</Button>
      <Button variant="outline-warning" onClick={() => handleFilter('NOT_DONE')}>Not Done</Button>
    </div>
  );
};

export default FilterTasks;
