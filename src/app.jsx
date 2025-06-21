import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import React from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return <div className="flex-center h-[100vh]">App</div>;
};

export default App;
