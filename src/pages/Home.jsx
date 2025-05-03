import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css';

function Home() {
  return (
    <div className="bg-blue-900">
      <nav class="bg-transparent px-10">
        <div class="w-full flex flex-wrap items-center justify-between p-4">
          <Link to="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="text-white self-center text-2xl font-semibold whitespace-nowrap">Plantinance</span>
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div class="w-full md:block md:w-auto" id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-14 rtl:space-x-reverse md:mt-0 md:border-0">
              <li>
                <Link to="dash/home_" class="text-white w-[100px] h-[32px] flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-black hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link to="login" class="text-white w-[80px] h-[32px] flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-black hover:text-white">Log in</Link>
              </li>
              <li>
                <Link to="register" class="bg-white text-black w-[80px] h-[32px] flex items-center justify-center rounded-xl transition-all duration-300 hover:bg-gray-300 hover:text-black">Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <main className="mt-8">
        <div className="mb-10">
          <p className="text-white text-center text-[5rem] font-bold">Plantinance</p>
          <p className="text-white mt-3 text-[1.3rem] italic text-center font-semibold" >If you are looking for a way to achieve your financial goals, but you are having problems with that, this is your place!</p>
        </div>
        <div className="flex w-full h-auto px-14 items-center justify-center">
          <div className="flex flex-col bg-black rounded-2xl p-10 gap-5 w-[675px] h-auto">
            <p className="text-white text-[1.2rem] text-left font-medium"> Use our innovative method to save money for your future, where you will have to obtaing experience to level up your bonsai. Play minigames and complete the economic achievements that you will set for yourself, and your bonsai will be happy!</p>
            <p className="text-white text-[1.2rem] text-left font-medium"> Control your money expenses in a creative and interactive way. If you don't complete your goals, you will lose the points that you have had earned, and you would lose some of your plant options, but if you achieve the savings that you previusly wanted, it will grow, and you will be able to play with it. </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;