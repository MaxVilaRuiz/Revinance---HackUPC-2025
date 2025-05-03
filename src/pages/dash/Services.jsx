import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import PieDiagram from '../../components/diagram';
import '../../styles/App.css';
import { lightViewPosition } from 'three/src/nodes/TSL.js';

function Services() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.setItem('singout', true);
    navigate('/login');
  };

  useEffect(() => {
    const income = Number(localStorage.getItem('income') || 0);
    const rent = Number(localStorage.getItem('rent') || 0);
    const household = Number(localStorage.getItem('household') || 0);
    const living = Number(localStorage.getItem('living') || 0);
    const extras = Number(localStorage.getItem('extras') || 0);
    const saved = Number(localStorage.getItem('saved') || 0);
  
    const rent2 = (rent / income) * 100;
    const household2 = (household / income) * 100;
    const living2 = (living / income) * 100;
    const extras2 = (extras / income) * 100;
    const saved2 = (saved / income) * 100;
  
    const rent3 = Number(document.getElementById('rent3')?.value || 0);
    if (rent3 < rent2) document.getElementById('rent4').style.background = 'red';
    else if (rent3 === rent2) document.getElementById('rent4').style.background = 'orange';
    else document.getElementById('rent4').style.background = 'green';
  
    const household3 = Number(document.getElementById('household3')?.value || 0);
    if (household3 < household2) document.getElementById('household4').style.background = 'red';
    else if (household3 === household2) document.getElementById('household4').style.background = 'orange';
    else document.getElementById('household4').style.background = 'green';
  
    const living3 = Number(document.getElementById('living3')?.value || 0);
    if (living3 < living2) document.getElementById('living4').style.background = 'red';
    else if (living3 === living2) document.getElementById('living4').style.background = 'orange';
    else document.getElementById('living4').style.background = 'green';
  
    const extras3 = Number(document.getElementById('extras3')?.value || 0);
    if (extras3 < extras2) document.getElementById('extras4').style.background = 'red';
    else if (extras3 === extras2) document.getElementById('extras4').style.background = 'orange';
    else document.getElementById('extras4').style.background = 'green';
  
    const saved3 = Number(document.getElementById('saved3')?.value || 0);
    if (saved3 < saved2) document.getElementById('saved4').style.background = 'green';
    else if (saved3 === saved2) document.getElementById('saved4').style.background = 'orange';
    else document.getElementById('saved4').style.background = 'red';
  
    document.getElementById('income').innerText = income;
    document.getElementById('rent1').innerText = rent;
    document.getElementById('rent2').innerText = rent2.toFixed(0);
    document.getElementById('household1').innerText = household;
    document.getElementById('household2').innerText = household2.toFixed(0);
    document.getElementById('living1').innerText = living;
    document.getElementById('living2').innerText = living2.toFixed(0);
    document.getElementById('extras1').innerText = extras;
    document.getElementById('extras2').innerText = extras2.toFixed(0);
    document.getElementById('saved1').innerText = saved;
    document.getElementById('saved2').innerText = saved2.toFixed(0);
  }, []);

  return (
    <div className="flex w-full h-auto justify-center pb-20">
      <nav className="w-[17.5%] h-full">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-[17.5%] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-gradient-to-b from-blue-700 to-black">
            <ul class="space-y-2 font-medium">
              <li>
                <Link to="/dash/home_" class="flex items-center p-2 text-white rounded-lg hover:bg-blue-600 group">
                  <svg class="w-5 h-5 transition duration-75 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span class="ms-3">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/dash/services" class="flex items-center p-2 text-white rounded-lg  bg-blue-700 group">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/dash/profile" class="flex items-center p-2 text-white rounded-lg hover:bg-blue-600 group">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} class="flex items-center w-full text-left p-2 text-white rounded-lg hover:bg-blue-600 group">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
                </button>
              </li>
            </ul>
          </div>
        </aside>
      </nav>

      <div className="flex flex-col w-[75%] h-full mt-10 items-center px-10">
        <h1 className="text-[3.75rem] font-bold mb-10 text-blue-800 bg-clip-text">Services</h1>

        <div className="mb-24">
          <PieDiagram></PieDiagram>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-[750px] h-auto text-sm text-left rtl:text-right text-gray-400">
            <thead class="text-center text-xs uppercase bg-gray-700 text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Category Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Amount (monthly)
                </th>
                <th scope="col" class="px-6 py-3">
                  % of the total
                </th>
                <th scope="col" class="px-6 py-3">
                  Recommended
                </th>
                <th scope="col" class="px-6 py-3">
                  Grade
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="text-center border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                  Income
                </th>
                <td id='income' class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                    Reference
                </td>
                <td class="px-6 py-4">
                  -
                </td>
                <td class="px-6 py-4">
                  -
                </td>
              </tr>
              <tr class="text-center border-b bg-gray-800 border-gray-700 hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                  Rent
                </th>
                <td id='rent1' class="px-6 py-4">
                </td>
                <td id='rent2' class="px-6 py-4">
                </td>
                <td id='rent3' class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                  <div id='rent4' style="width: 30px; height: 30px; border-radius: 50%; background-color: gray;"></div>
                </td>
              </tr>
              <tr class="text-center border-b border-gray-700 bg-gray-800 hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                  Household expenses
                </th>
                <td id='household1' class="px-6 py-4">
                </td>
                <td id='household2' class="px-6 py-4">
                </td>
                <td id='household3' class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                  <div id='household4' style="width: 30px; height: 30px; border-radius: 50%; background-color: gray;"></div>
                </td>
              </tr>
              <tr class="text-center border-b border-gray-700 bg-gray-800 hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                  Living expenses
                </th>
                <td id='living1' class="px-6 py-4">
                </td>
                <td id='living2' class="px-6 py-4">
                </td>
                <td id='living3' class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                  <div id='living4' style="width: 30px; height: 30px; border-radius: 50%; background-color: gray;"></div>
                </td>
              </tr>
              <tr class="text-center border-b border-gray-700 bg-gray-800 hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                  Leisure expenses
                </th>
                <td id='extras1' class="px-6 py-4">
                </td>
                <td id='extras2' class="px-6 py-4">
                </td>
                <td id='extras3' class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                  <div id='extras4' style="width: 30px; height: 30px; border-radius: 50%; background-color: gray;"></div>
                </td>
              </tr>
              <tr class="text-center border-b border-gray-700 bg-gray-800 hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap text-white">
                  Saved
                </th>
                <td id='saved1' class="px-6 py-4">
                </td>
                <td id='saved2' class="px-6 py-4">
                </td>
                <td id='saved3' class="px-6 py-4">
                </td>
                <td class="px-6 py-4">
                  <div id='saved4' style="width: 30px; height: 30px; border-radius: 50%; background-color: gray;"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Services;