import { Link } from "react-router-dom";
import {datalist} from "../constants/data.js"
export default function Right() {
  return (
    <div className="bg-white bg-opacity-15  text-black w-1/6 rounded-3xl py-6 ">
      <h1 className="flex justify-center text-3xl bg-white rounded-lg">Quick Navigation</h1>
      {datalist.map((item, index) => (
        <Link to="/PlayDice" key={index} className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out   ">
          {`${item.text}`}
        </Link>
      ))}
    </div>
  );
}
