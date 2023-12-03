import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

export default function Home() {
  const [selectedTime, setSelectedTime] = useState('Total');
  const [selectedOption, setSelectedOption] = useState();
  const timeOptions = ['Total','Lastweek', 'Lastmonth'];
  const lastWeekEarning = 598760.80;
  const lastMonthEarning = 854975.25;
  const totalEarning = lastWeekEarning + lastMonthEarning;
  const times = {
    Lastweek: lastWeekEarning,
    Lastmonth: lastMonthEarning,
    Total: totalEarning,
  };

  let floatWallet = 1453736.05;
  let cashWallet = 1453736.05;
  let bullionWalletGold = 9242.5;
  let bullionWalletSilver = 922.5;

  let directConsumers = 342;
  let throughAssociates = 300;
  let throughFieldExecutives = 400;
  let throughSalesExecutives = 300;
  var totalConsumers = directConsumers + throughAssociates + throughFieldExecutives + throughSalesExecutives;

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const [chartData, setChartData] = useState([65, 59, 80, 81, 56, 55, 40]);

  useEffect(() => {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    let myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7'],
        datasets: [
          {
            label: 'Revenue',
            data: chartData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Destroy the existing Chart instance before creating a new one
    return () => {
      myChart.destroy();
    };
  }, [chartData]);

  const handleChartDataChange = (e) => {
    const selectedOption = e.target.value;
    let newData = [];
    switch (selectedOption) {
      case 'Top 5':
        newData = [65, 59, 80, 81, 56];
        break;
      case 'Top 10':
        newData = [65, 59, 80, 81, 56, 55, 40, 35, 70, 90];
        break;
      case 'Top 50':
        newData = [65, 59, 80, 81, 56, 55, 40, 35, 70, 90, 75, 65, 50, 45, 80, 75, 60, 55, 70, 95, 85, 70, 65, 80, 75, 60, 55, 70, 95, 85, 70, 65, 80, 75, 60, 55, 70, 95, 85, 70, 65, 80, 75, 60, 55, 70];
        break;  
      case 'Top 100':
        newData = [65, 59, 80, 81, 56, 55, 40, 35, 70, 90, 75, 65, 50, 45, 80, 75, 60, 55, 70, 95, 85, 70, 65, 80, 75, 60, 55, 70, 95, 85, 70, 65, 80, 75, 60, 55, 70, 95, 85, 70, 65, 80, 75, 60, 55, 70, 95, 85, 70];
        break;

      default:
        break;
    }
    setChartData(newData);
  };


    return(
    <div class="flex">   
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-2/3">
            <section>
                <div class="grid grid-cols-3  ">
                    <div class="flex md-2 flex-col h-auto rounded bg-blue-50 dark:bg-gray-800 p-2 text-center">
                        <section>
                            <h1 class="font-bold text-xl text-blue-400">Total consumers</h1>
                        </section>
                        <section>
                            <h1 class="font-bold text-xl text-blue-400">{totalConsumers}</h1>
                        </section>
                    </div>
                    <div class="flex md-2 flex-col h-auto rounded bg-white-50 dark:bg-gray-800 p-2 ">
                        <section>
                            <p class="font-bold text-sm text-gray-500">Direct Consumers: {directConsumers}</p>
                        </section>
                        <section class="mt-4">
                            <p class="font-bold text-sm text-gray-500">Through Associates: {throughAssociates}</p>
                        </section>
                    </div>
                    <div class="flex md-2 flex-col h-auto rounded bg-white-50 dark:bg-gray-800 p-2 ">
                        <section>
                            <p class="font-bold text-sm text-gray-500">Through Field Executives: {throughFieldExecutives}</p>
                        </section>
                        <section class="mt-4">
                            <p class="font-bold text-sm text-gray-500">Through Sales Executives: {throughSalesExecutives}</p>
                        </section>
                    </div>
                </div>
            </section>
            <section>
                <div class="grid grid-cols-2 gap-2  ">
                    <div class="h-auto rounded bg-white-50 dark:bg-white-800 p-4">
                        <section>
                            <p class="font-bold">Total Earnings</p>
                            <p>Rs {times[selectedTime]}</p>
                            <select id="countrySelect" onChange={handleTimeChange} value={selectedTime}>
                                {timeOptions.map((time) => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                                ))}
                            </select>
                        </section>
                        <section>
                           {/* <Line data={chartData} options={chartOptions} /> */}
                        </section>
                    </div>
                    <div class="h-auto rounded bg-green-50 dark:bg-green-800 p-4 mt-1 flex">
                       <section>
                        <p>Overall Float Wallet</p>
                        <button class="bg-blue-400 text-white px-4 py-2 flex-grow text-xs rounded-md ">Wallet History</button>
                       </section>
                       <section class="pl-12">
                        <p>Rs. {floatWallet}</p>
                       </section>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2 mt-1 ">
                    <div class="h-auto rounded bg-violet-50 dark:bg-violet-800 p-4">
                    <section>
                        <p>Overall Cash Wallet</p>
                        <button class="bg-blue-400 text-white px-4 py-2 flex-grow text-xs rounded-md ">Wallet History</button>
                       </section>
                       <section class="pl-12">
                        <p>Rs. {cashWallet}</p>
                       </section> 
                    </div>
                    <div class="h-auto rounded bg-rose-50 dark:bg-rose-800 p-4 flex">
                        <section>
                         <p>Overall Bullion Wallet</p>
                         <button class="bg-blue-400 text-white px-4 py-2 flex-grow text-xs rounded-md ">Wallet History</button>
                       </section>
                       <section class="pl-12 ">
                         <p><span class="bg-yellow-400 rounded"> Gold </span> : Rs.  {bullionWalletGold}</p>
                         <p class="mt-5"><span class="bg-neutral-200 rounded"> Silver </span> : Rs. {bullionWalletSilver}</p>
                       </section>
                    </div>
                </div>
            </section>
        </div>
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-1/3">
            <div class="flex">
              <h1 class="font-bold">Highest Revenue Earned </h1>
              <select
                className="rounded ml-12 bg-zinc-300"
                onChange={handleChartDataChange}
                value={selectedOption}
                >
                <option>Top 5</option>
                <option>Top 10</option>
                <option>Top 50</option>
                <option>Top 100</option>
              </select>
            </div>
            <div className="p-4  rounded-lg dark:border-gray-700 mt-2 ">
                <canvas id="revenueChart" width="400" height="300" class="mt-5 bg-white dark:bg-gray-800 rounded-lg shadow-md"></canvas>
            </div>
        </div>
    </div>     
    );
}