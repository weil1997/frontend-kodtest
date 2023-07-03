const abbreviateNumber = (number) => {
  return Intl.NumberFormat('en-US', { notation: 'compact' }).format(number);
};

function formatNumberWithThousandsSeparator(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function convertDateFormat(dateString) {
  const months = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
  ];

  const [year, month] = dateString.split('-');
  const monthIndex = parseInt(month, 10) - 1;
  const formattedDate = `${months[monthIndex]} ${year}`;

  return formattedDate;
}

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
};

const filterCustomers = (searchTerm) => (customer) => {
  return customer.name.toLowerCase().includes(searchTerm.toLowerCase());
};

const sortCustomers = (sortColumn, sortOrder) => (a, b) => {
  const valueA = a[sortColumn].toLowerCase();
  const valueB = b[sortColumn].toLowerCase();

  if (sortOrder === 'asc') {
    return valueA.localeCompare(valueB);
  } else {
    return valueB.localeCompare(valueA);
  }
};

export {
  abbreviateNumber,
  formatNumberWithThousandsSeparator,
  convertDateFormat,
  fetchData,
  filterCustomers,
  sortCustomers,
};
