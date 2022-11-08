import React from "react";
import { Link } from "react-router-dom";
import logo from "../asset/img/logoHITU.png";
import { VscChevronDown } from "react-icons/vsc";
const Header = () => {
  return (
    <>
      <header>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        
          <div className="grid grid-cols-3 w-full">
            <div className=" lg:col-span-2 px-6 w-full flex flex-wrap items-center justify-between">
              <div className="flex items-center">
                <button
                  className="lg:hidden inline-block px-6 py-2.5 text-gray-500 font-medium text-xs leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out mr-1.5"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    className="w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="navbar-collapse collapse grow items-center"
                id="navbarSupportedContentY"
              >
                <ul className="navbar-nav mr-auto lg:flex lg:flex-row md:hidden ">
                  <li className="nav-item">
                    <Link
                      className="first-letter:uppercase nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                      to="/"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                    >
                      home
                    </Link>
                  </li>
                  <li className="nav-item   dropdown relative">
                    <a
                      href="#collapseExample"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                    >
                      <span className="first-letter:uppercase">
                        Notification
                        <VscChevronDown className="inline-block" />
                      </span>
                    </a>

                    <div
                      className="dropdown-menu absolute hidden rounded-lg shadow-lg"
                      id="collapseExample "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <ul className="bg-white rounded-lg w-full text-gray-900">
                        <li className="px-6 py-2 block hover:bg-gray-100 whitespace-nowrap hover:rounded-lg  w-full rounded-t-lg">
                          <Link to="/Notification/Create">
                            Create Notification
                          </Link>
                        </li>
                        <li className="px-6 py-2 block hover:bg-gray-100 whitespace-nowrap hover:rounded-lg  w-full rounded-t-lg">
                          <Link to="/Notification/Create">
                            Update Notification
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item   dropdown relative">
                    <a
                      href="#collapseExample"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out dropdown-toggle flex items-center whitespace-nowrap"
                    >
                      <span className="first-letter:uppercase">
                        Teacher
                        <VscChevronDown className="inline-block" />
                      </span>
                    </a>

                    <div
                      className="dropdown-menu absolute hidden rounded-lg shadow-lg"
                      id="collapseExample "
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <ul className="bg-white rounded-lg w-full text-gray-900">
                        <li className="px-6 py-2 block hover:bg-gray-100 whitespace-nowrap hover:rounded-lg  w-full rounded-t-lg">
                          <Link to="/Teacher/Create">Create teacher</Link>
                        </li>
                        <li className="px-6 py-2 block hover:bg-gray-100 whitespace-nowrap hover:rounded-lg  w-full rounded-t-lg">
                          <Link to="/Teacher/Create">Update teacher</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:hidden  flex flex-wrap items-center">
              <Link to="/">
                {/* <img src={logo} alt="Logo" className="w-52" /> */}
              </Link>
            </div>
            {/* search */}
            <div className=" col-span-1 flex justify-end">
              <button
                className=" inline-block px-6 py-2.5 text-gray-500 font-medium text-xs leading-tight uppercase rounded    focus:outline-none focus:ring-0   transition duration-150 ease-in-out mr-1.5"
                type="button"
                id="button-addon2"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalCenter"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="search"
                  className="w-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/* Offcanvas */}
        <>
          <div
            className=" offcanvas offcanvas-start fixed bottom-0 flex flex-col max-w-full bg-white invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out text-gray-700 top-0 left-0 border-none w-96"
            tabIndex={-1}
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div className="offcanvas-header flex items-center justify-between p-4">
              <h5
                className="offcanvas-title mb-0 leading-normal font-semibold"
                id="offcanvasRightLabel"
              >
                <div className="inline-block">
                  <img src={logo} alt="Logo" className="w-52" />
                </div>
              </h5>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-2 -my-5 -mt-12 -mr-2 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
              <div className="flex justify-center">
                <ul className="bg-white rounded-lg w-96 text-gray-900 ">
                  <li className="px-6 py-2 last:border-none border-b border-gray-200 w-full rounded-t-lg">
                    <Link to="/" className="">
                      <span className="first-letter:uppercase">home</span>
                    </Link>
                  </li>
                  <li className="px-6 py-2 last:border-none border-b border-gray-200 w-full rounded-t-lg">
                    <a
                      href="#collapseExample"
                      data-bs-toggle="collapse"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      className="block"
                    >
                      <span className="first-letter:uppercase">teacher</span>
                      <span className=" inline-flex justify-items-end">
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="caret-down"
                          className="w-2 ml-2  "
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 320 512"
                        >
                          <path
                            fill="currentColor"
                            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                          />
                        </svg>
                      </span>
                    </a>
                    <div className="collapse w-full" id="collapseExample">
                      <ul className="bg-white rounded-lg w-full text-gray-900">
                        <li className="px-6 py-2 last:border-none border-b :border-gray-200 w-full rounded-t-lg">
                          <Link to="/">dropdown level 1</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </>
        {/* end Offcanvas */}
        {/* modal */}
        <>
          <div
            className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
            id="exampleModalCenter"
            tabIndex={-1}
            aria-labelledby="exampleModalCenterTitle"
            aria-modal="true"
            role="dialog"
          >
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
              <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4   rounded-t-md">
                  <button
                    type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    title="press ESC to close"
                  />
                </div>
                <div className="flex justify-center">
                  <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
                      <input
                        type="search"
                        className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon2"
                      />
                      <button
                        className="btn  px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                        type="button"
                        id="button-addon2"
                      >
                        <svg
                          aria-hidden="true"
                          focusable="false"
                          data-prefix="fas"
                          data-icon="search"
                          className="w-4"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            fill="currentColor"
                            d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* end modal */}
      </header>
    </>
  );
};

export default Header;
