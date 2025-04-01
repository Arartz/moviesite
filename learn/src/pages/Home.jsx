import React from 'react';
import Bee from '../assets/bee.jpeg'
import Steel from '../assets/steel.jpeg'
import '../App.css'

const Home = () => {
  return (
    <div class="flex rounded-[10px] mt-[30px] w-[100%] h-[550px] overflow-hidden m-l-[100px] m-t-[20px]">
    <div class="flex-1 grid items-center justify-center">
      <p>
      <b class="text-[20px] font-extrabold">FIND MOVIES</b>
      <h1 class="text-[35px] font-bold bg-[linear-gradient(to_right,red,orange,yellow,green,blue,indigo,violet)] bg-clip-text text-transparent">TV SHOWS AND MORE</h1>
      <p class="text-center">
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book
      </p>
      <button class="text-center text-[15px] border-white-500 border-[2px] bg-black text-white rounded-[10px] ml-[55px] mt-[20px] w-[300px] h-[50px] relative inline-block p-[15px_30px] bg-[linear-gradient(to_right,transparent_50%,rgba(73,65,119)50%)] bg-[length:200%_100%] bg-[position:100%_0] cursor-pointer overflow-hidden transition-[background-position_0.3s_linear,color_0.3s_linear hover:bg-[position:0%_0] hover:text-white">▶ Watch Tutorial</button>
      </p>
    </div>
    <div class="w-[500px] relative bg-[linear-gradient(to_left,#3f1818,transparent)]">
      <div class="absolute w-[300px] h-[400px] transition-[transform_0.3s_ease] m-[30px] ml-[35%]">
        <img src={Bee} alt="" class="w-2/2 h-2/2 rounded-[2px]" />
      </div>
      <div class="absolute w-[300px] h-[400px] m-[100px] transition-[transform_0.3s_ease]">
        <img src={Steel} alt="" class="w-2/2 h-2/2 rounded-[2px]" />
        <div class="absolute top-[50%] left-[50%] transform-translate-x-1/2 transform-translate-y-1/2 w-[80px] h-[80px] rounded-[50%] flex items-center justify-center text-[20px] font-bold text-white cursor-pointer transition-transform duration-300 ease-in-out shadow-[0_0_15px_rgba(255,0,0,0.7)]">
            <div class=" cursor-pointer h-0 border-l-[20px] border-l-white-500 border-t-[12px] border-t-transparent-500 border-b-[12px] border-b-transparent-500 transition-[transform_0.3s_ease-in-out]">▶</div>
        </div>
      </div>
    </div>
    <div class="absolute w-[310px] h-[355px] mt-[180px] ml-[160px] border-r-[2px] border-t-[2px] border-gray-500"></div>
    <div class="absolute w-[400px] h-[355px] mt-[180px] ml-[468.4px] border-b-[2px] border-gray-500"></div>
</div>
  );
};

export default Home;
