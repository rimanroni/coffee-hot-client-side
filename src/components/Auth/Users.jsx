import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedData = useLoaderData();
    let count = 1
    return (
        <div className='text-3xl text-center'>
            <h1>Our loaded Data : {loadedData.length}</h1>
            <div className="overflow-x-auto px-12 ">
  <table className="table  ">
    {/* head */}
    <thead>
      <tr>
         <th>ID</th>
        <th>Email </th>
        <th>Last Log in Time</th>
      </tr>
    </thead>
    <tbody>
        {loadedData.map(user=><tr key={user._id}>
        <th>{ count++}</th>
        <td>{user.email}</td>
        <td>{user.createTime}</td>
        
      </tr>)}
     </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;