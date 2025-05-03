import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import bonsai from '../assets/bonsai.png';

function Home() {
  return (
    <div>
      <nav class="bg-green-400 px-10">
        <div class="w-full flex flex-wrap items-center justify-between p-4">
          <Link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={bonsai} class="h-10" alt="Bonsai Logo" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap">Plantinance</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-green-400 md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <a href="#" class="block py-2 px-3 rounded-sm md:bg-transparent text-black font-bold md:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <Link to="dash/home_" class="block py-2 px-3 text-black hover:underline rounded-sm md:p-0">Dashboard</Link>
              </li>
              <li>
                <Link to="login" class="block py-2 px-3 text-black hover:underline rounded-sm md:p-0">Log in</Link>
              </li>
              <li>
                <Link to="register" class="block py-2 px-3 text-black hover:underline  rounded-sm md:p-0">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="mt-8">
        <div className="mb-10">
          <p className="text-green-900 text-center text-[5rem] font-bold">Plantinance</p>
          <p className="mt-3 text-[1.3rem] italic text-center font-semibold" >If you are looking for a way to achieve your financial goals, but you are having problems with that, this is your place!</p>
        </div>
        <div className="flex w-full h-auto px-14 items-center justify-center gap-36">
          <div className="flex flex-col bg-green-600 rounded-2xl p-10 gap-5 w-[675px] h-auto">
            <p className="text-black text-[1.2rem] text-left font-medium"> Use our innovative method to save money for your future, where you will have to obtaing experience to level up your bonsai. Play minigames and complete the economic achievements that you will set for yourself, and your bonsai will be happy!</p>
            <p className="text-black text-[1.2rem] text-left font-medium"> Control your money expenses in a creative and interactive way. If you don't complete your goals, you will lose the points that you have had earned, and you would lose some of your plant options, but if you achieve the savings that you previusly wanted, it will grow, and you will be able to play with it. </p>
          </div>

          <img src={bonsai} alt="Bonsai" className="w-[425px] h-auto" />
        </div>
      </main>
    </div>
  );
}

export default Home;