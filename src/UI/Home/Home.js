import React from "react";
// import FacultyAPI from "../../API/FacultyAPI";
import Logo from "../../asset/img/logo.png";
import NewView from "../News/page/news-view-home"
// import Notification from "../Notification/Notification"
// import NewsHomePage from "../News/NewsListPage"
// import PNTPage from "../News/pagination/index"
// import Slider from "../Slider/slider"

const Home = () => {
  
  return (
    <>
      <div className="logo w-full">
        {/* <p className="text-center">SLIDER</p> */}
        <div className=" m-auto bg-gray-200 my-10">
          <div className="w-full">
            <img src={Logo}/>
          </div>
        </div>
        {/* <img src={Logo} alt="Logo" className="w-[80%] m-auto"/> */}
      </div>
      <h1 className="text-center text-xl">ADMINISTRATIONS</h1>
      <div className="administrations w-[90%] h-[80%] bg-gray-200 m-[2rem_5%] grid grid-cols-3 ">
        <div className="bg-red-200 m-[10%] ">
          <div className="">
            <div className="bg-blue-600 m-auto w-[200px] h-[200px] mt-[5%]">
              <img className="admin"/>
            </div>
            <div className="col-start-2 border-t border-black m-[5px_15%]"></div>
            <div className="bg-gray-300 m-auto w-[300px] h-[200px] mb-[5%]">
            </div>
          </div>
        </div>
        <div className="bg-red-200 m-[10%] ">
          <div className="">
            <div className="bg-blue-600 m-auto w-[200px] h-[200px] mt-[5%]">
              <img className="admin"/>
            </div>
            <div className="col-start-2 border-t border-black m-[5px_15%]"></div>
            <div className="bg-gray-300 m-auto w-[300px] h-[200px] mb-[5%]">
            </div>
          </div>
        </div>
        <div className="bg-red-200 m-[10%] ">
          <div className="">
            <div className="bg-blue-600 m-auto w-[200px] h-[200px] mt-[5%]">
              <img className="admin"/>
            </div>
            <div className="col-start-2 border-t border-black m-[5px_15%]"></div>
            <div className="bg-gray-300 m-auto w-[300px] h-[200px] mb-[5%]">
            </div>
          </div>
        </div>
        
        {/* <img src={Logo} alt="Logo" className="w-[80%] m-auto"/> */}
      </div>

      <img src={"https://www.rmit.edu.vn/content/dam/rmit/vn/smart-crop/page-header/current-students-0-1920x600.jpg"}/>

      <p className="text-center">TARGET</p>
      <div className="target">
        <div className="h-[200px] m-auto bg-gray-200 m-[2rem_12rem] grid grid-cols-4">
          <div className="bg-yellow-500 shadow-lg m-[1rem_2rem]"></div>
          <div className="bg-yellow-500 shadow-lg m-[1rem_2rem]"></div>
          <div className="bg-yellow-500 shadow-lg m-[1rem_2rem]"></div>
          <div className="bg-yellow-500 shadow-lg m-[1rem_2rem]"></div>
        </div>
        {/* <img src={Logo} alt="Logo" className="w-[80%] m-auto"/> */}
      </div>

      <img src={"https://www.rmit.edu.vn/content/dam/rmit/vn/smart-crop/full-width-banner/students-outdoors-writing-1920x500.jpg"}/>

      <div className="m-[4rem_4rem]">
        <div className="home-page w-full h-auto grid grid-cols-[100fr_0.5fr_50fr] mt-[1rem]">
          <div className="col-1 col-start-1 shadow-lg p-[1rem] bg-gray-100">
            <div className="border-l-4 border-solid border-green-600 m-[2%_0%_2%_5%] shadow-lg"><p className="pl-[3%]">News</p></div>
            <div className="grid grid-cols-3 m-[2%]">
                {/* <div className="box shadow-lg h-[200px] mb-[8px]">
                  <div className="image w-[200px] h-[50%] m-[4px_auto] bg-red-100">
                    <img/>
                  </div>
                  <div className="description m-[2%_5%]" >
                    <h1 className="title">TITLE</h1>
                    <p className="text-xs">Description</p>
                  </div>
                </div> */}
                <NewView/>
            </div>
            <a href="/tin-tuc">
              <div className="news-list w-auto h-auto flex m-[5%_0%]">
                <button className="text-center m-auto shadow-lg bg-blue-400 rounded-t-md rounded-b-md">view more</button> 
              </div>
            </a>
          </div>
          <div className="col-start-2 border-l border-black ml-[2px]">
          </div>
          <div className="col-2 col-start-3">
          </div>
        </div>
        <div class="container right">
          <div class="fixed "></div>
          {/* <span>
          <img
              src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
              alt="example"
            />
          </span> */}
        </div>
      </div>
    </>
    );
};

export default Home;
