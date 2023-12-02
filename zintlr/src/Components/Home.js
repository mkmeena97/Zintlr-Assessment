import { useState } from "react";
// import { useEffect } from "react";
// import { Line, chartRef, Chart, chartConfig } from 'react-chartjs-2';

export default function Home(){
    // const [data, setData] = useState();
    // useEffect(() => {
    //     if (chartRef.current) {
    //       chartRef.current.destroy();
    //     }
    //     const newChart = new Chart(chartRef.current, chartConfig);
    //     chartRef.current = newChart;
    //   }, [data]);



    const [selectedTime, setSelectedTime] = useState('Total');
    const timeOptions = ['lastweek', 'lastmonth', 'total'];
    const lastWeekEarning = 598760.80;
    const lastMonthEarning = 854975.25;
    const totalEarning = lastWeekEarning + lastMonthEarning;
    const times = {
      lastweek: lastWeekEarning,
      lastmonth: lastMonthEarning,
      total: totalEarning,
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

    //   const chartData = {
    //     labels: timeOptions,
    //     datasets: [
    //       {
    //         label: 'Earnings',
    //         fill: false,
    //         lineTension: 0.1,
    //         backgroundColor: 'rgba(75,192,192,0.4)',
    //         borderColor: 'rgba(75,192,192,1)',
    //         borderCapStyle: 'butt',
    //         borderDash: [],
    //         borderDashOffset: 0.0,
    //         borderJoinStyle: 'miter',
    //         pointBorderColor: 'rgba(75,192,192,1)',
    //         pointBackgroundColor: '#fff',
    //         pointBorderWidth: 1,
    //         pointHoverRadius: 5,
    //         pointHoverBackgroundColor: 'rgba(75,192,192,1)',
    //         pointHoverBorderColor: 'rgba(220,220,220,1)',
    //         pointHoverBorderWidth: 2,
    //         pointRadius: 1,
    //         pointHitRadius: 10,
    //         data: timeOptions.map((time) => times[time]),
    //       },
    //     ],
    //   };

    //   const chartOptions = {
    //     scales: {
    //       y: {
    //         beginAtZero: true,
    //       },
    //     },
    //   };

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
                            <p>Total Earnings</p>
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
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 w-1/3 h-1/2">
            <div class="flex">
              <h1 class="font-bold">Highest Revenue Earned </h1>
              <select class="rounded ml-12 bg-zinc-300">
                <option>Top 5</option>
                <option>Top 10</option>
                <option>Top 50</option>
                <option>Top 100</option>
              </select>
            </div>
        </div>
    </div>     
    );
}