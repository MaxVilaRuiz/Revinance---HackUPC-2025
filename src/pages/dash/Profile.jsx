import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../../styles/App.css';

function Profile() {
  const navigate = useNavigate();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [income, setIncome] = useState('');
  const [rent, setRent] = useState('');
  const [household, setHousehold] = useState('');
  const [living, setLiving] = useState('');
  const [extras, setExtras] = useState('');
  const [saved, setSaved] = useState('');
  const [wsave, setWsave] = useState('');
  const [amount, setAmount] = useState('');

  const handleLogout = () => {
    localStorage.setItem('singout', true);
    navigate('/login');
  };

  const handleClick1 = (e) => {
    e.preventDefault();
    setChecked1(prev => !prev);
    const question1 = document.getElementById('question1');
    question1.classList.contains('hidden') ? question1.classList.remove('hidden') : question1.classList.add('hidden');
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    setChecked2(prev => !prev);
    const question2 = document.getElementById('question2');
    question2.classList.contains('hidden') ? question2.classList.remove('hidden') : question2.classList.add('hidden');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch(
    'http://localhost:5000/profile', {
        method: "post",
        body: JSON.stringify({ income, rent, household, living, extras, saved, wsave, amount }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
      
    const data = await result.json();
    console.log(result.status);

    if(result.status === 201) {
      alert("Data manipuled correctly!");
    } else if(result.status === 409) { 
      alert(data.message);
    } else if(result.status === 400) {
      alert(data.message);
    } else {
      alert("Something went wrong X(");
    }
  }

  return (
    <div className="flex w-full h-screen justify-center">
      <nav className="w-[17.5%] h-full">
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100">
          <span class="sr-only">Open sidebar</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
          </svg>
        </button>

        <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-[17.5%] h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
          <div class="h-full px-3 py-4 overflow-y-auto bg-green-400">
            <ul class="space-y-2 font-medium">
              <li>
                <Link to="/dash/home_" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                  <svg class="w-5 h-5 transition duration-75 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span class="ms-3">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/dash/services" class="flex items-center p-2 text-gray-900 rounded-lg  hover:bg-green-500 group">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Services</span>
                </Link>
              </li>
              <li>
                <Link to="/dash/profile" class="flex items-center p-2 text-gray-900 rounded-lg bg-green-600 group">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                  </svg>
                  <span class="flex-1 ms-3 whitespace-nowrap">Profile</span>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} class="flex items-center w-full text-left p-2 text-gray-900 rounded-lg hover:bg-green-500 group">
                  <svg class="shrink-0 w-5 h-5 transition duration-75 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
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
        <h1 className="text-[3.75rem] text-black font-bold mb-10">Profile</h1>

        <form className="grid max-w-[100%] gap-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h3 className="font-semibold text-[1.5rem] mb-5">Financial Situation</h3>

              <div className="mb-4">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">What is your fixed monthly net income?</label>
                <input
                  type="number"
                  id="income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">How much do you pay for rent each month?</label>
                <input
                  type="number"
                  id="rent"
                  value={rent}
                  onChange={(e) => setRent(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">How much do you pay for household expenses monthly (water, electricity, gas)?</label>
                <input
                  type="number"
                  id="household"
                  value={household}
                  onChange={(e) => setHousehold(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-5">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">How much do you pay monthly for living expenses (e.g. food, hospital)?</label>
                <input
                  type="number"
                  id="living"
                  value={living}
                  onChange={(e) => setLiving(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div className="mb-8">
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900">How much do you spend monthly on leisure?</label>
                <input
                  type="number"
                  id="extras"
                  value={extras}
                  onChange={(e) => setExtras(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-[1.5rem] mb-5">Financial Goals</h3>

              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">How much do you have saved?</label>
                <input
                  type="number"
                  id="saved"
                  value={saved}
                  onChange={(e) => setSaved(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  required
                />
              </div>
              <div>
                <p className="block mb-2 text-sm font-medium text-gray-900">What is your financial goal?</p>

                <div className="ml-5 mb-6">
                  <div className="flex gap-2">
                    <button
                      onClick={handleClick1}
                      className="w-auto h-auto"> {checked1 ? '✅' : '⬜'}
                    </button>
                    <p>Save to keep it</p>
                  </div>

                  <div id='question1' className="hidden mt-2 mb-4 ml-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">How much would you like to save per year?</label>
                    <input
                      type="number"
                      id="wsave"
                      value={wsave}
                      onChange={(e) => setWsave(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>

                <div className="ml-5">
                  <div className="flex gap-2">
                    <button
                      onClick={handleClick2}
                      className="w-auto h-auto"> {checked2 ? '✅' : '⬜'}
                    </button>
                    <p>Save to spend it</p>
                  </div>

                  <div id='question2' className="hidden mt-2 mb-4 ml-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">How much does what you want cost?</label>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[400px] px-5 py-2.5 text-center">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;