import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => (

  <div className="w-full flex-col flex justify-center items-center">
    <h1 className='font-bold text-2xl text-white mt-2'>Something went wrong. Please try again.</h1>
    <p className='font-medium text-base text-gray-400 mt-2 text-center'>Sorry, we are not able to fetch data from the API right now. <br /><br /><b className='text-gray-300'>Till then visit our offline page.</b>
      <a className='font-semibold text-base text-blue-600 underline ml-2' href='https://aurabeat.netlify.app/'>Click here</a>
    </p>
  </div>
);

export default Error;
