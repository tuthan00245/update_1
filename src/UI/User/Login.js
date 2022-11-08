import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import UserAPI from "../../API/UserAPI";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import RouterConfig from "../../router/RouterConfig";
const Login = () => {
  let navigate = useNavigate();
  //   const [hiddenPassword, setHiddenPassword] = useState(false);
  const [submit, setSubmit] = useState({});
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, "'Username' không quá 20 kí tự")
        .min(2, "'Username' ít nhất 2 kí tự")
        .required("Bạn chưa nhập 'Username'"),
      password: Yup.string()
        .max(20, "'Password' không quá 20 kí tự")
        .min(2, "'Password' ít nhất 2 kí tự")
        .required("Bạn chưa nhập 'Password'"),
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      // ),
    }),
    onSubmit: (valuesForm) => {
      setSubmit(valuesForm);
      setLoading(true);
    },
  });

  useEffect(() => {
    if (loading === true) {
      (async () => {
        try {
          const response = await UserAPI.postLoginUser(JSON.stringify(submit));
          if (response.status === 200) {
            localStorage.setItem(
              "accessToken",
              JSON.stringify(response.data.accessToken)
            );
            localStorage.setItem(
              "refreshToken",
              JSON.stringify(response.data.refreshToken)
            );
            localStorage.setItem("name", JSON.stringify(response.data.name));
            localStorage.setItem("roles", JSON.stringify(response.data.roles));
            setLoading(false);
            return window.location.reload();
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
          toast.error(error.response.data.message, {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
        }
      })();
    }
  }, [loading, submit]);
  return (
    <>
      <section className="h-screen">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="sm:mb-3 grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12   md:mb-0">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="md:w-full "
                alt="SampleImage"
              />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form onSubmit={formik.handleSubmit}>
                <div className="text-center w-full box-border p-5 ">
                  <p className=" mb-0 text-2xl">Sign in </p>
                </div>
                {/* Email input */}
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Username"
                    {...formik.getFieldProps("username")}
                  />
                  {formik.touched.username && formik.errors.username ? (
                    <div className="text-red-400 text-sm">
                      {formik.errors.username}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                {/* Password input */}
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    {...formik.getFieldProps("password")}
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-400 text-sm">
                      {formik.errors.password}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="flex justify-between items-center mb-6">
                  <div className="form-group form-check">
                    <input
                      type="checkbox"
                      className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      id="exampleCheck2"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      htmlFor="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-gray-800">
                    Forgot password?
                  </a>
                </div>
                <div className="text-center lg:text-left">
                  {loading === true ? (
                    <>
                      <div className="">
                        <div
                          className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
                          role="status"
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <button
                      type="submit"
                      className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Login
                    </button>
                  )}
                  <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <a
                      href="#!"
                      className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
