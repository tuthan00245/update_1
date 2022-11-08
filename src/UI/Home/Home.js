import React from "react";
import FacultyAPI from "../../API/FacultyAPI";
import Logo from "../../asset/img/logo.png";
import Notification from "../Notification/Notification"
import NewsHomePage from "../News/NewsListPage"
import PNTPage from "../News/pagination/index"
import Slider from "../Slider/slider"

const Home = () => {
  let mybutton = document.getElementById("myBtn");
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  
  return (
    <div className="m-[2rem_4rem]">

      <header>
          <div className="news-link mt-5 bg-black w-2/12 p-1 ml-5">
              <p></p>

          </div>
          <hr className="hr1 block h-1 border-0 border-t border-solid border-black"/>
          <h1 className="text-center m-0 text-5xl"><span>NEWS</span>PAPER</h1>
          <p className="ad text-center whitespace-normal mt-0 bg-black text-white w-10/12 m-auto mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptatibus corporis! Quos nihil, eius similique eaque soluta cupiditate doloremque nesciunt, optio exercitationem impedit aspernatur laborum sunt voluptatibus voluptas commodi illo!</p>
          
          {/* <h2 className="edition">edition:01234</h2> */}
          <hr className="hr2 block h-1 border-0 border-t border-solid border-black mt-4 "/>
          <h2 className="date mt-5">may,5,2020</h2>
      </header>


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
			
				<div class="fixed"></div>
        <span>
        <img
            src="https://bobbyhadz.com/images/blog/react-usestate-dynamic-key/thumbnail.webp"
            alt="example"
          />
        </span>
		</div>

    </div>
    );
};

export default Home;
