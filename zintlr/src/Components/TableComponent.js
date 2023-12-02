
import React from 'react';

const TableComponent = () => {
  return (
    <table className="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">
            <label htmlFor="selectBox" className="text-sm font-semibold">Select Box</label>
            <select id="selectBox" className="block w-full mt-1 p-2 border rounded-md">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </th>
          {[...Array(8)].map((_, index) => (
            <th key={index} className="py-2 px-4 border-b">
              Heading {index + 1}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {/* Add your table rows and data here */}
        <tr>
          <td className="py-2 px-4 border-b">Data 1</td>
          <td className="py-2 px-4 border-b">Data 2</td>
          <td className="py-2 px-4 border-b">Data 3</td>
          <td className="py-2 px-4 border-b">Data 4</td>
          <td className="py-2 px-4 border-b">Data 5</td>
          <td className="py-2 px-4 border-b">Data 6</td>
          <td className="py-2 px-4 border-b">Data 7</td>
          <td className="py-2 px-4 border-b">Data 8</td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  );
};

export default TableComponent;
