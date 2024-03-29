import Header from "./components/Header";
import Body from "./components/Body";
import background2 from "./assets/background2.mp4";
 // Import the MP4 video file
import Right from "./components/Right";
import Add from "./components/Add";
import {Provider} from "react-redux";



export default function App() {
  return (
    <div className="relative h-screen text-white font-cuteFont size-2xl font-bold ">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src={background2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Header />
        <div className="flex justify-between p-40 px-14">

        <Body />
        <Right/>
        </div>
      </div>
    </div>
  );
}
