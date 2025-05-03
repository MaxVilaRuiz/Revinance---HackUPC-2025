import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';
import bonsai from '../assets/bonsai.png';

function Home() {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 px-10">
        <div class="w-full flex flex-wrap items-center justify-between p-4">
          <Link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={bonsai} class="h-20" alt="Bonsai Logo" />
            <span class="self-center text-4xl font-semibold whitespace-nowrap dark:text-white">Plantinance</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul class="text-2xl font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
              </li>
              <li>
                <Link to="dashboard" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Dashboard</Link>
              </li>
              <li>
                <Link to="login" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Log in</Link>
              </li>
              <li>
                <Link to="register" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Sign up</Link>
              </li>
              <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        <p className="text-blue-700 text-center text-[5rem] font-medium">Plantinance</p>
        <p className= "mt-8 text-[1.5rem] text-center font-medium mb-8" >If you are looking for a way to achieve your financial goals, but you are having problems with that, this is your place!</p>
        <div className="bg-blue-700 w-128 h-[42rem] pt-4 px-4" >
          <div className="flex">
          <div className="flex-1">
          <p className="text-white text-[1.5rem] text-left mt-12 ml-16 font-medium"> Use our innovative method to save money for your future, where you will </p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium"> have to obtaing experience to level up your bonsai. Play minigames and  </p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium"> complete the economic achievements that you will set for yourself, and </p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium"> your bonsai will be happy!  </p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium"> Control your money expenses in a creative and interactive way. If you don't complete </p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium"> your goals, you will lose the points that you have had earned, and you would lose  </p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium"> some of your plant options, but if you achieve the savings that you previusly wanted,</p>
          <p className="text-white text-[1.5rem] text-left mt-4 ml-16 font-medium">  it will grow, and you will be able to play with it. </p>

          </div>

          <img src={bonsai} alt="Bonsai" className="ml-20 mr-10 w-128 h-auto"/>

          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;