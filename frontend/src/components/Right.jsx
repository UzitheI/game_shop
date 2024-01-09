import { Link } from "react-router-dom";
import { datalist } from "../constants/data.js";
export default function Right() {
  const path = ["/PlayDice"];
  return (
    <div className="bg-white bg-opacity-15  text-black w-1/6 rounded-3xl py-6 ">
      <h1 className="flex justify-center text-3xl bg-white rounded-lg">
        Quick Navigation
      </h1>
      <Link
        to="/PlayDice"
        className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out "
      >
        PlayDice
      </Link>
      <Link
        to="/PlayDice"
        className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out "
      >
        Added Games
      </Link>
      <Link
        to="/Last30days"
        className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out "
      >
        Last30days
      </Link>
      <Link
        to="/Top30oftheMonth"
        className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out "
      >
        Top30oftheMonth
      </Link>
      <Link
        to="/Alltime"
        className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out "
      >
        All time
      </Link>
    </div>
  );
}
{
  /* <Link to={path[item]} key={index} className="bg-white text-black text-lg mt-4 rounded-lg flex align-middle justify-center w-2/3 ml-10 hover:bg-blue-600 cursor-pointer pop-out   ">
          {`${item.text}`}
        </Link> */
}
