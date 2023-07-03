import React from 'react';

function CustomerTable({ customers, sortColumn, sortOrder, onSort }) {
  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th
            className='py-2 text-left cursor-pointer'
            onClick={() => onSort('name')}
          >
            Name{' '}
            {sortColumn === 'name' &&
              (sortOrder === 'asc' ? '(sort: asc) ▲' : '(sort: desc) ▼')}
          </th>
          <th className='py-2 text-left'>ARR</th>
          <th className='py-2 text-left'>ID</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td className='py-2'>{customer.name}</td>
            <td className='py-2'>{customer.arr}</td>
            <td className='py-2'>{customer.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerTable;
