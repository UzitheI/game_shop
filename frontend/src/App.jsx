import Header from "./components/Header";
import Body from "./components/Body";
import background from "./assets/background.mp4"; // Import the MP4 video file

export default function App() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src={background} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Overlay */}
      <div className="relative z-10">
        <Header />
        <Body />
      </div>
    </div>
  );
}
