import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import { Result } from './Result';


export const Rout = () => {
  return (
    <div className='p-4'>
      <Routes>
      <Route path='/' element={<Navigate to='/search' replace />} />
      <Route path='/search' element={<Result />} />
      <Route path='/image' element={<Result />} />
      <Route path='/news' element={<Result />} />
      <Route path='/videos' element={<Result />} />
</Routes>
    </div>
  );
}
