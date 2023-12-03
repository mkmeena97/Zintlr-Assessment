
import React, { useState } from 'react';

const TableComponent = () => {
  const initialData = [
    {
      id: 1,
      consumerName: 'Mahendra',
      assets: ['35,986', '32.96g', '96.38g'],
      revenues: {
        total: 35342,
        pending: 5342,
        progress: 30000,
      },
      kycStatus: 'Done',
      facilitator: 'Aniket Khavnekar -> Neha hirey',
      zone: 'South',
      accountType: 'Saving',
      tpa: '9685741230@truecard',
    },
    {
      id: 2,
      consumerName: 'Aaradhya',
      assets: ['40,000', '28.50g', '102.75g'],
      revenues: {
        total: 40000,
        pending: 6000,
        progress: 34000,
      },
      kycStatus: 'Pending',
      facilitator: 'Arun Jha -> Ankita Singh',
      zone: 'North',
      accountType: 'Current',
      tpa: '9856489672@trucard',
    },
    {
      id: 3,
      consumerName: 'Rajesh',
      assets: ['25,000', '20.00g', '50.75g'],
      revenues: {
        total: 28000,
        pending: 3000,
        progress: 25000,
      },
      kycStatus: 'Done',
      facilitator: 'Sneha Sharma -> Amit Patel',
      zone: 'West',
      accountType: 'Saving',
      tpa: '9745123658@truecard',
    },
    {
      id: 4,
      consumerName: 'Pooja',
      assets: ['55,000', '45.25g', '120.75g'],
      revenues: {
        total: 60000,
        pending: 8000,
        progress: 52000,
      },
      kycStatus: 'Done',
      facilitator: 'Rajat Verma -> Priya Kapoor',
      zone: 'South',
      accountType: 'Current',
      tpa: '9546785210@trucard',
    },
    {
      id: 5,
      consumerName: 'Suresh',
      assets: ['30,000', '25.50g', '80.25g'],
      revenues: {
        total: 32000,
        pending: 4000,
        progress: 28000,
      },
      kycStatus: 'Pending',
      facilitator: 'Neha Khanna -> Deepak Kumar',
      zone: 'North',
      accountType: 'Saving',
      tpa: '9365478123@truecard',
    },
    {
      id: 6,
      consumerName: 'Amit',
      assets: ['48,000', '40.75g', '110.25g'],
      revenues: {
        total: 50000,
        pending: 6000,
        progress: 44000,
      },
      kycStatus: 'Done',
      facilitator: 'Alok Singh -> Priyanka Sharma',
      zone: 'East',
      accountType: 'Current',
      tpa: '9654783210@trucard',
    },
    {
      id: 7,
      consumerName: 'Deepika',
      assets: ['42,000', '35.00g', '90.75g'],
      revenues: {
        total: 45000,
        pending: 5000,
        progress: 40000,
      },
      kycStatus: 'Pending',
      facilitator: 'Rohit Kumar -> Anjali Yadav',
      zone: 'South',
      accountType: 'Saving',
      tpa: '9245783650@truecard',
    },
    {
      id: 8,
      consumerName: 'Vikas',
      assets: ['38,000', '32.25g', '85.75g'],
      revenues: {
        total: 40000,
        pending: 3000,
        progress: 37000,
      },
      kycStatus: 'Done',
      facilitator: 'Monika Verma -> Abhishek Singh',
      zone: 'West',
      accountType: 'Current',
      tpa: '9587412365@trucard',
    },
    {
      id: 9,
      consumerName: 'Ananya',
      assets: ['22,000', '18.50g', '60.75g'],
      revenues: {
        total: 25000,
        pending: 3000,
        progress: 22000,
      },
      kycStatus: 'Done',
      facilitator: 'Ravi Sharma -> Nisha Singh',
      zone: 'North',
      accountType: 'Saving',
      tpa: '9012547856@truecard',
    },
    {
      id: 10,
      consumerName: 'Rohit',
      assets: ['60,000', '50.00g', '130.75g'],
      revenues: {
        total: 65000,
        pending: 7000,
        progress: 58000,
      },
      kycStatus: 'Pending',
      facilitator: 'Anita Gupta -> Manoj Tiwari',
      zone: 'East',
      accountType: 'Saving',
      tpa: '9874563210@trucard',
    },
  ];
  

  const [data, setData] = useState(initialData);
  const [selectedRevenue, setSelectedRevenue] = useState('Total');
  const [selectedZone, setSelectedZone] = useState('All');
  const [selectedKycStatus, setSelectedKycStatus] = useState('All');
  const [selectedConsumer, setSelectedConsumer] = useState(null);

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter(item => {
    const isRevenueMatch = item.revenues[selectedRevenue.toLowerCase()] > 0;
    const isZoneMatch = selectedZone === 'All' || item.zone === selectedZone;
    const isKycStatusMatch = selectedKycStatus === 'All' || item.kycStatus === selectedKycStatus;
    
    return isRevenueMatch && isZoneMatch && isKycStatusMatch;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleRevenueChange = (newRevenue) => {
    setSelectedRevenue(newRevenue);
    setCurrentPage(1); // Reset current page when changing revenue status
  };

  const handleZoneChange = (newZone) => {
    setSelectedZone(newZone);
    setCurrentPage(1); // Reset current page when changing zone
  };

  const handleConsumerClick = (consumer) => {
    setSelectedConsumer(consumer);
  };

  const handleClosePanel = () => {
    setSelectedConsumer(null);
  };

  const handleKycStatusChange = (newKycStatus) => {
    setSelectedKycStatus(newKycStatus);
    setCurrentPage(1); // Reset current page when changing KYC status
  };

  const getKycStatusColor = (status) => {
    switch (status) {
      case 'Done':
        return 'green';
      case 'Pending':
        return 'yellow';
      case 'Progress':
        return 'emerald';
      default:
        return 'gray';
    }
  };
  

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-sky-100">
          <tr>
            <th className="py-2 px-4 border-b">
              <h1>Consumer Name</h1>
            </th>
            <th className="py-2 px-4 border-b">
              <h1>Assets</h1>
            </th>
            <th className="py-2 px-4 border-b">
              <select
                id="revenueSelect"
                className="p-1 border rounded-md text-sky-700 bg-sky-100"
                value={selectedRevenue}
                onChange={(e) => handleRevenueChange(e.target.value)}
              >
                <option value="Total">Total</option>
                <option value="Pending">Pending</option>
                <option value="Progress">Progress</option>
              </select>
            </th>
            <th className="py-2 px-4 border-b">
              <select
                id="kycStatusSelect"
                className="block w-full mt-1 p-1 border rounded-md text-sky-700 bg-sky-100"
                value={selectedKycStatus}
                onChange={(e) => handleKycStatusChange(e.target.value)}
              >
              <option value="All">KYC Status</option>
              <option value="Done" className="bg-green-200">Done</option>
              <option value="Pending" className="bg-yellow-200">Pending</option>
              <option value="Progress" className="bg-emerald-200">Progress</option>
              </select>
            </th>
            <th className="py-2 px-4 border-b">
              <h1>Facilitator</h1>
            </th>
            <th className="py-2 px-4 border-b">
            <select
              id="zoneSelect"
              className="block w-full mt-1 p-1 border rounded-md text-sky-700 bg-sky-100"
              value={selectedZone}
              onChange={(e) => handleZoneChange(e.target.value)}
            >
              <option value="All">Zone</option>
              <option value="South">South</option>
              <option value="North">North</option>
              <option value="East">East</option>
              <option value="West">West</option>
            </select>
            </th>
            <th className="py-2 px-4 border-b">
              <select
                id="accountTypeSelect"
                className="block w-full mt-1 p-1 border rounded-md text-sky-700 bg-sky-100"
              >
                <option value="All">Account Type</option>
                <option value="Saving" className="bg-green-200">Saving</option>
                <option value="Current" className="bg-rose-200">Current</option>
                <option value="Checking" className="bg-emerald-200">Checking</option>
              </select>
            </th>
            <th className="py-2 px-4 border-b">
              <h1>TPA</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item) => (
            <tr key={item.id} onClick={() => handleConsumerClick(item)} style={{ cursor: 'pointer' }}>
              <td className="py-2 px-4 border-b">{item.consumerName}</td>
              <td className="py-2 px-4 border-b">
                <div className="flex">
                  {item.assets.map((asset, index) => (
                    <div key={index} className={`mr-4 rounded-md ${index === 0 ? 'bg-white-200' : index === 1 ? 'bg-yellow-200' : 'bg-neutral-100'}`}>{asset}</div>
                  ))}
                </div>
              </td>
              <td className="py-2 px-4 border-b">{item.revenues[selectedRevenue.toLowerCase()]}</td>
              <td className="py-2 px-4 border-b">
                <span
                  className={`rounded-md ${
                    item.kycStatus === 'Done'
                      ? 'bg-green-200'
                      : item.kycStatus === 'Pending'
                      ? 'bg-yellow-200'
                      : 'bg-emerald-200'
                  }`}
                >
                  {item.kycStatus}
                </span>
              </td>
              <td className="py-2 px-4 border-b">{item.facilitator}</td>
              <td className="py-2 px-4 border-b">{item.zone}</td>
              <td className="py-2 px-4 border-b">{item.accountType}</td>
              <td className="py-2 px-4 border-b">{item.tpa}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-between p-4 bg-white border-t border-gray-300">
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded-md ${
              currentPage === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            Previous
          </button>
          <span className="mx-4">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded-md ${
              currentPage === totalPages
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            Next
          </button>
        </div>
      </div>
      {selectedConsumer && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex items-center justify-center ">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white p-4 overflow-y-auto shadow-lg bg-yellow-100">
            <h2 className="text-2xl font-bold mb-4">{selectedConsumer.consumerName} Details</h2>
              <div className="mb-4">
                <p className="text-gray-600 m-2 rounded">Assets: {selectedConsumer.assets.join(', ')}</p>
                <p className="text-gray-600 m-2 rounded">Total Revenue: {selectedConsumer.revenues.total}</p>
                <p className="text-gray-600 m-2 rounded">Pending Revenue: {selectedConsumer.revenues.pending}</p>
                <p className="text-gray-600 m-2 rounded">Progress Revenue: {selectedConsumer.revenues.progress}</p>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 m-2 rounded">KYC Status: {selectedConsumer.kycStatus}</p>
                <p className={`text-gray-600 bg-${getKycStatusColor(selectedConsumer.kycStatus)}-200 p-1 rounded-md`}>
                {selectedConsumer.kycStatus}
                </p>
              </div>
                <p className="text-gray-600 m-2 rounded">Facilitator: {selectedConsumer.facilitator}</p>
                <p className="text-gray-600 m-2 rounded">Zone: {selectedConsumer.zone}</p>
                <p className="text-gray-600 m-2 rounded">Zone: {selectedConsumer.zone}</p>
                <p className="text-gray-600 m-2 rounded">Account Type: {selectedConsumer.accountType}</p>
                <p className="text-gray-600 m-2 rounded">TPA: {selectedConsumer.tpa}</p>
                <button onClick={handleClosePanel} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                  Close
               </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableComponent;
