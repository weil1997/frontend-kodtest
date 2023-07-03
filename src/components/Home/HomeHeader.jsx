import React from 'react';

function HomeHeaderStatistics({ totalArr, totalSeats }) {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='text-2xl font-bold'>Home</h1>
      <div className='flex'>
        <StatisticItem title='ARR' value={totalArr} />
        <StatisticItem title='SEATS' value={totalSeats} />
      </div>
    </div>
  );
}

function StatisticItem({ title, value }) {
  return (
    <div className='w-1/2'>
      <p className='font-bold text-[#a4aabd]'>{title}</p>
      <p className='font-bold text-4xl'>{value}</p>
    </div>
  );
}

export default HomeHeaderStatistics;
