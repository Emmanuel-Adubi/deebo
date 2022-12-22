import "./App.css";
import "./styles.css";

import DesktopNavbar from "./components/Navbar/Navbar";
import MobileNavbar from "./components/Navbar/Navbar";
import Footer from "./components/pages/Footer";
import DesktopFooter from "./components/pages/Footer";
import MobileFooter from "./components/pages/Footer";
import Home from "./components/Home/Index";
import { Link, Routes, Route } from "react-router-dom";
import CreatePolls from "./container/Polls/createPolls";
import Voting from "./container/voting/voting";
import Pricing from "./container/Pricing/pricing";
import Forms from "./container/forms/forms";
import GetStarted from "./getStarted";
import Login from "./container/Login/login";

import { Splide, SplideSlide } from "@splidejs/react-splide";

import "./styles.css";
import { configure } from "@testing-library/react";

// import Swiper styles

function App(props) {
  // const slides = [];

  // for (let i=0; i< 5; i+=1){
  //   slides.push(
  //     <SwiperSlide key={`slide-$${i}`}>
  //       <img src={`assets/img/https://picsum.photos/id/{$i+1}/500/300`} alt={`i`}></img>
  //     </SwiperSlide>
  //   )
  // }
// const componentMapping = [
//   {DesktopNavbar,MobileNavbar,DesktopFooter, MobileFooter,}
// ]

  const Desktop = true
  const Mobile = true

  return (
    <div>
      <DesktopNavbar/>
      {/* {configure.map((Desktop) =>{
        const Component = componentMapping[Desktop];
        return<> 
          {props.componentMapping ? Desktop : Mobile};
          
      })}; */}
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/voting" component={<Voting />} />
        <Route path="/createPolls" element={<CreatePolls />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/getStarted" element={<GetStarted />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
