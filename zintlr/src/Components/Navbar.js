import { useState } from "react";

export default function Navbar(){
  const [selectedCountry, setSelectedCountry] = useState('USD'); // Set a default country code
  const countryCodes = ['USD', 'EUR', 'GBP']; // Add more country codes as needed
  const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£',
  };
  let buyprice = 7390.00;
  let sellprice=7090.00;
  let symbol = currencySymbols[selectedCountry];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  return(
<div class="flex items-center justify-between">
    <div class="relative text-gray-600">
        <input type="search" name="search" placeholder="Search" class="border-2 border-gray-300 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"/>
        <button type="submit" class="absolute right-0 top-0 mt-3 mr-4">
            <svg class="text-gray-600 h-4 w-4" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M21 21l-5-5m-2 0a7 7 0 111-14 7 7 0 01-1 14zm-3-7a7 7 0 10-14 0 7 7 0 0014 0z"></path>
            </svg>
        </button>
    </div>
    
    <div class="flex items-center space-x-4">
        <svg class="text-gray-600 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M11.9392 2.21178L9.52922 7.82178H7.11922C6.71922 7.82178 6.32922 7.85178 5.94922 7.93178L6.94922 5.53178L6.98922 5.44178L7.04922 5.28178C7.07922 5.21178 7.09922 5.15178 7.12922 5.10178C8.28922 2.41178 9.58922 1.57178 11.9392 2.21178Z" fill="#292D32"/>
          <path d="M18.7311 8.08953L18.7111 8.07953C18.1111 7.90953 17.5011 7.81953 16.8811 7.81953H10.6211L12.8711 2.58953L12.9011 2.51953C13.0411 2.56953 13.1911 2.63953 13.3411 2.68953L15.5511 3.61953C16.7811 4.12953 17.6411 4.65953 18.1711 5.29953C18.2611 5.41953 18.3411 5.52953 18.4211 5.65953C18.5111 5.79953 18.5811 5.93953 18.6211 6.08953C18.6611 6.17953 18.6911 6.25953 18.7111 6.34953C18.8611 6.85953 18.8711 7.43953 18.7311 8.08953Z" fill="#292D32"/>
          <path d="M12.5195 17.6581H12.7695C13.0695 17.6581 13.3195 17.3881 13.3195 17.0581C13.3195 16.6381 13.1995 16.5781 12.9395 16.4781L12.5195 16.3281V17.6581Z" fill="#292D32"/>
          <path d="M18.2883 9.52031C17.8383 9.39031 17.3683 9.32031 16.8783 9.32031H7.11828C6.43828 9.32031 5.79828 9.45031 5.19828 9.71031C3.45828 10.4603 2.23828 12.1903 2.23828 14.2003V16.1503C2.23828 16.3903 2.25828 16.6203 2.28828 16.8603C2.50828 20.0403 4.20828 21.7403 7.38828 21.9503C7.61828 21.9803 7.84828 22.0003 8.09828 22.0003H15.8983C19.5983 22.0003 21.5483 20.2403 21.7383 16.7403C21.7483 16.5503 21.7583 16.3503 21.7583 16.1503V14.2003C21.7583 11.9903 20.2883 10.1303 18.2883 9.52031ZM13.2783 15.5003C13.7383 15.6603 14.3583 16.0003 14.3583 17.0603C14.3583 17.9703 13.6483 18.7003 12.7683 18.7003H12.5183V18.9203C12.5183 19.2103 12.2883 19.4403 11.9983 19.4403C11.7083 19.4403 11.4783 19.2103 11.4783 18.9203V18.7003H11.3883C10.4283 18.7003 9.63828 17.8903 9.63828 16.8903C9.63828 16.6003 9.86828 16.3703 10.1583 16.3703C10.4483 16.3703 10.6783 16.6003 10.6783 16.8903C10.6783 17.3103 10.9983 17.6603 11.3883 17.6603H11.4783V15.9703L10.7183 15.7003C10.2583 15.5403 9.63828 15.2003 9.63828 14.1403C9.63828 13.2303 10.3483 12.5003 11.2283 12.5003H11.4783V12.2803C11.4783 11.9903 11.7083 11.7603 11.9983 11.7603C12.2883 11.7603 12.5183 11.9903 12.5183 12.2803V12.5003H12.6083C13.5683 12.5003 14.3583 13.3103 14.3583 14.3103C14.3583 14.6003 14.1283 14.8303 13.8383 14.8303C13.5483 14.8303 13.3183 14.6003 13.3183 14.3103C13.3183 13.8903 12.9983 13.5403 12.6083 13.5403H12.5183V15.2303L13.2783 15.5003Z" fill="#292D32"/>
          <path d="M10.6797 14.1391C10.6797 14.5591 10.7997 14.6191 11.0597 14.7191L11.4797 14.8691V13.5391H11.2297C10.9197 13.5391 10.6797 13.8091 10.6797 14.1391Z" fill="#292D32"/>
        </svg>
        
        <svg class="text-gray-600 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M20 15C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13C19.4477 13 19 13.4477 19 14C19 14.5523 19.4477 15 20 15Z" fill="#0F0F0F"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M16.775 0.985398C18.4919 0.460783 20.2821 1.55148 20.6033 3.3178L20.9362 5.14896C22.1346 5.54225 23 6.67006 23 8V10.7639C23.6137 11.3132 24 12.1115 24 13V15C24 15.8885 23.6137 16.6868 23 17.2361V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V8C1 6.51309 2.08174 5.27884 3.50118 5.04128L16.775 0.985398ZM21 16C21.5523 16 22 15.5523 22 15V13C22 12.4477 21.5523 12 21 12H18C17.4477 12 17 12.4477 17 13V15C17 15.5523 17.4477 16 18 16H21ZM21 18V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V8C3 7.44772 3.44772 7 4 7H20C20.55 7 20.9962 7.44396 21 7.99303L21 10H18C16.3431 10 15 11.3431 15 13V15C15 16.6569 16.3431 18 18 18H21ZM18.6954 3.60705L18.9412 5H10L17.4232 2.82301C17.9965 2.65104 18.5914 3.01769 18.6954 3.60705Z" fill="#0F0F0F"/>
        </svg>
        
        <svg class="text-gray-600 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        </svg>
        
        <svg class="text-gray-600 h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
        </svg>
    </div>
    
    <div class="text-black bg-white" style={{ display: 'flex' }}>
        <section style={{ marginRight: '10px', padding:'10px'}} >
          <h1>Gold</h1>
          <select id="countrySelect" onChange={handleCountryChange} value={selectedCountry}>
            {countryCodes.map((code) => (
            <option key={code} value={code}>
              {code}
            </option>
              ))}
          </select>
        </section >
        <section style={{padding:'10px'}}>
          <p>Buy: `{symbol}{buyprice}`</p>
          <p>sell: `{symbol}{sellprice}`</p>
        </section>
    </div>
</div>
    );
}