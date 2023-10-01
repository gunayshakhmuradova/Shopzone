import React from 'react';

export const Sorting = ({ setSort }) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex items-center justify-end'>
      <select onChange={(e) => setSort(e.target.value)} name="bg-white-200 py-3 px-5" id="">
        <option disabled value="">Select</option>
        <option value="inc">Inc</option>
        <option value="dec">Dec</option>
      </select>
    </div>
  );
};

export default Sorting;
