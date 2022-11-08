import React from "react";
import FacultyAPI from "../../API/FacultyAPI";
import Logo from "../../asset/img/logo.png";
import Notification from "../Notification/Notification"
import NewsHomePage from "../News/NewsListPage"
import PNTPage from "../News/pagination/index"
import Slider from "../Slider/slider"

const Home = () => {


  
  return (
    <div className="m-[2rem_4rem]">

      <h1 className="text-center m-0 text-5xl">NEWS LIST</h1>
      
      <div className="home-page w-full h-auto grid grid-cols-[100fr_0.5fr_50fr] mt-[1rem]">
        <div className="col-1 col-start-1 shadow-lg p-[1rem]">
          <div className="news-list">
            <p>Danh mục</p>
            <NewsHomePage/>
              
          </div>
        </div>
        <div className="col-start-2 border-l border-black ml-[2px]">
        </div>
        <div className="col-2 col-start-3">
          <div className="new-news shadow-lg p-[1rem]">
            
            <p className="text-green-900">Tin tức mới nhất</p>

            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>

          </div>
          <div className="important-news shadow-lg p-[1rem]">
          
            <p className="text-red-600">Tin tức nổi bật</p>
            
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>
            <div className="bg-yellow-500 shadow-lg m-[0.5rem_0rem]" >
              <div className="bg-blue-50 ">
                <section className="container-1">
                  <div className="p-1">
                      <h4 className="text-xs">Lorem, ipsum.</h4>
                  </div>
                </section>
              </div>
            </div>

          </div>
          <div className="notification">
            
          </div>
        </div>
        {/* <Slider/> */}
        {/* <PNTPage/> */}
        {/* <Notification/> */}
        
      </div>

      <div class="zalo-container right">
			
				<div class="fixed "></div>
        {/* <span>
        <img
            src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
            alt="example"
          />
        </span> */}
		</div>

    </div>
    );
};

export default Home;
