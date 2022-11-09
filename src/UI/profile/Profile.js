import React from 'react'

const Profile = () => {
  return (
    <div class="fixed bottom-[30px] right-[30px] rounded-t-2xl rounded-b-2xl">

      <div class="group relative">
          <a href="#">
            <div 
              class="absolute  top-[-120px] left-[-160px] right-[130px] bottom-[30px] w-[150px] h-[150px] mt-[30px] ml-[30px] overflow-hidden bg-fixed invisible group-hover:visible transition duration-300 ease-in-out">
                <div className="h-[30px] mt-[2px] mb-[5px] pr-[10px]  z-index-0 shadow-lg">
                  <a>
                    <span className="text-red-400 text-lg"><p className="text-right">profile</p></span>
                  </a>
                  </div>  
                <div className="h-[30px] mt-[5px] mb-[5px] mr-[35px] shadow-lg">
                  <a>
                    <span className=" text-lg"><p className="text-right">notification</p></span>
                  </a>
                </div>  
                <div className="h-[30px] mt-[5px] mb-[5px] mr-[60px] shadow-lg">
                  <a>
                    <span className=" text-lg"><p className="text-right">...</p></span>
                  </a>
                </div>  
                <div className="h-[30px] mt-[5px] mb-[2px] mr-[65px] shadow-lg">
                  <a>
                    <span className=" text-lg"><p className="text-right">...</p></span>
                  </a>
                </div>  
            </div>
          </a>
          {/* <img class="p-1 w-10 h-10 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="/docs/images/people/profile-picture-5.jpg" alt=""/> */}
          <div class=" overflow-hidden relative w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600" data-mdb-ripple="true" data-mdb-ripple-color="light">
            <svg class="absolute -left-1 w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
            </svg>
          </div>
          
      </div>
      
    </div>
    // <div class="group">
    //   <p>Some content that is always visible.</p>
    //   <p class="invisible group-hover:visible">I am hidden until my parent is hovered!</p>
    // </div>
  )
}

export default Profile 