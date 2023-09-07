import React from "react";

function InputBox({ lable }) {
  return (
    <div className="bg-white rounded-lg p-3 flex justify-between w-[350px]">
      <div>
        <p>{lable}</p>
        <input className=" outline-none py-2" type="number" value={0} />
      </div>
      <div>
        <p className="">Currency type</p>
        <select className=" border-2 border-gray-300 rounded-lg p-1 outline-none">
          <option value="">a</option>
          <option value="">a</option>
          <option value="">a</option>
        </select>
      </div>
    </div>
  );
}

export default InputBox;
