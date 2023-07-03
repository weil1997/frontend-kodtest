import React, { useEffect, useState } from 'react';
import CustomerTable from './CustomerTable';
import CustomerSearch from './CustomerSearch';
import Loading from '../Loading';
import ErrorDisplay from '../ErrorDisplay';
import { fetchData, filterCustomers, sortCustomers } from '../../utils';

function Customer() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    try {
      const data = await fetchData(
        'https://startdeliver-mock-api.glitch.me/customer'
      );
      setCustomers(data);
    } catch (error) {
      console.error('Error fetching customers:', error);
      setError('Failed to fetch customers');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCustomers = customers.filter(filterCustomers(searchTerm));
  const sortedCustomers = filteredCustomers.sort(
    sortCustomers(sortColumn, sortOrder)
  );

  return (
    <div>
      <h1 className='text-2xl font-bold'>Customer</h1>
      <CustomerSearch searchTerm={searchTerm} onSearch={handleSearch} />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <ErrorDisplay error={error} />
      ) : (
        <CustomerTable
          customers={sortedCustomers}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          onSort={handleSort}
        />
      )}
    </div>
  );
}

export default Customer;
