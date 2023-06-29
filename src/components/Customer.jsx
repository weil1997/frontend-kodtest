import React, { useEffect, useState } from "react";

function Customer() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://startdeliver-mock-api.glitch.me/customer")
      .then((response) => response.json())
      .then((data) => setCustomers(data))
      .catch((error) => {
        console.error("Error fetching customers:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Customer</h1>
      {/* table for all customers including name, arr, id */}
      <table className="w-full">
        <thead>
          <tr>
            <th className="py-2 text-left">Name</th>
            <th className="py-2 text-left">ARR</th>
            <th className="py-2 text-left">ID</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td className="py-2">{customer.name}</td>
              <td className="py-2">{customer.arr}</td>
              <td className="py-2">{customer.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Customer;
