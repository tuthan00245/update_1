import React from 'react'
import NewsHomePage from "./news-list"

const NewsPage = () => {
    return (
        <div className="m-[2rem_4rem]">
          
          <div className="home-page w-full h-auto grid grid-cols-[100fr_0.5fr_50fr] mt-[1rem]">
            <div className="col-1 col-start-1 shadow-lg p-[1rem]">
              <div className="news-list">
                <div className="border-l-4 border-solid border-green-600 m-[2rem_0rem] w-[200px]"><p className="pl-[3%]"> Home {'>'} News</p></div>
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
}

export default NewsPage