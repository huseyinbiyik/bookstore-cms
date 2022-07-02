import './Categories.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { statusChecked } from '../redux/categories/categories';

export default function Categories() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.categoriesReducer);

  const handleClick = () => {
    dispatch(statusChecked());
  };

  return (
    <div className="categories">
      <button className="status-button" type="button" onClick={() => handleClick()}>
        Check status
      </button>
      <p>{status}</p>
    </div>
  );
}
