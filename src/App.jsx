import React from "react";
import InputBox from "./components/InputBox";

function App() {
  return (
    <>
      <div className=" bg-[url('./assets/currency_background_image.jpg')] bg-cover bg-center w-full h-[100vh] flex justify-center items-center">
        <div className=" flex flex-col gap-5 items-center relative bg-slate-300 p-5 rounded-xl drop-shadow-2xl">
          <InputBox lable="From" />
          <button className=" p-1 text-white bg-blue-600 w-[100px] rounded-lg absolute top-[100px]">
            Swap
          </button>
          <InputBox lable="To" />
          <button className=" p-2 bg-blue-700 text-white rounded-lg cursor-pointer">
            Convert INR to USD
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
