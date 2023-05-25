import React from 'react';
import './styles.css';

export const SearchBar = () => {
  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      // setCity(event.currentTarget.value);
      // event.currentTarget.blur();
    }
  }

  return (
    <div>
    {/* <div className='search'> */}
      <form onSubmit={(event) => handleSubmit(event)} className='search'>
        <input
          type='text'
          placeholder='Search'
        />
        <button type='submit'>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
            <path d="M21 21l-6 -6"></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
