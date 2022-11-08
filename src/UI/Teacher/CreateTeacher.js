import { Field, useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Yup from "yup";
import FacultyAPI from "../../API/FacultyAPI";
import TeacherAPI from "../../API/TeacherAPI";

const CreateTeacher = (values) => {
  const [onSubmited, setOnSubmit] = useState({});
  console.log(
    "🚀 ~ file: CreateTeacher.js ~ line 10 ~ CreateTeacher ~ onSubmited",
    onSubmited
  );
  const [loading, setLoading] = useState(false);
  const [faculties, setFaculties] = useState("");
  const [selectFaculty, setSelectFaculty] = useState("");

  useEffect(() => {
    // Faculty
    try {
      (async () => {
        const response = await FacultyAPI.getALLFaculty(true);
        if (response.status >= 200 && response.status <= 299) {
          setFaculties(response.data);
        }
        console.log(
          "🚀 ~ file: CreateTeacher.js ~ line 14 ~ response",
          response
        );
      })();
    } catch (e) {
      console.log(e.message);
      toast.error("Có lỗi xảy ra, kiểm tra lại đường truyền", {
        className: "top-10",
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
    // post create teacher
    try {
      if (loading === true) {
        (async () => {
          //   const response = await TeacherAPI.postCreateTeacher();
          setLoading(false);
        })();
      }
    } catch (e) {
      console.log(e.message);
    }
  }, [loading]);

  const formik = useFormik({
    initialValues: {
      address: "",
      dob: "",
      email: "",
      facultyCode: "",
      gender: "",
      manager: "",
      name: "",
      password: "",
      phone: "",
      remark: "",
      roleCodes: ["ROLE_TEACHER"],
      userId: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không hợp lệ")
        .required("Bạn chưa nhập Email"),
    }),

    onSubmit: (valuesForm) => {
      setLoading(true);
      setOnSubmit(valuesForm);
    },
  });
  const handleSelectFaculty = (e) => {
    setSelectFaculty(e.target.value);
  };
  return (
    <div className="min-h-screen  bg-slate-100">
      <h2 className="w-4/5 m-auto pt-8 pb-4 text-xl text-blue-400 uppercase">
        Thêm giảng viên
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-4/5 m-auto grid md:grid-cols-2 sm:grid-cols-1  gap-4 pb-8">
          <div className="  rounded bg-white shadow-md">
            <div className=" p-6">
              <div className="mb-3 ">
                <label
                  htmlFor="userId"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Tên đăng nhập<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="userId"
                  placeholder="Nhập tên đăng nhập"
                  {...formik.getFieldProps("userId")}
                />
                {formik.touched.userId && formik.errors.userId ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.userId}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="name"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Họ tên<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="name"
                  placeholder="Nhập họ tên"
                  {...formik.getFieldProps("name")}
                />
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.name}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="password"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Mật khẩu đăng nhập
                  <span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="password"
                  placeholder="Nhập mật khẩu"
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
              <div className="mb-3 ">
                <label
                  htmlFor="email"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Email<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="email"
                  placeholder="Nhập tiêu đề"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.email}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="  rounded bg-white shadow-md">
            <div className="p-6">
              <div className="mb-3 ">
                <label
                  htmlFor="faculty"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Khoa<span className="text-red-400 text-lg">*</span>
                </label>
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  id="faculty"
                  name="facultyCode"
                  onChange={handleSelectFaculty}
                >
                  {faculties.length > 0 &&
                    faculties.map((item, index) => (
                      <option value={item.code} key={index}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="dob"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Ngày sinh<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="date"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="dob"
                  placeholder="Nhập tiêu đề"
                  {...formik.getFieldProps("dob")}
                />
                {formik.touched.dob && formik.errors.dob ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.dob}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    id="gender"
                    defaultValue="option1"
                    {...formik.getFieldProps("gender")}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="inlineRadio10"
                  >
                    Nam
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    id="gender"
                    defaultValue="option1"
                    {...formik.getFieldProps("gender")}
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    htmlFor="inlineRadio10"
                  >
                    Nữ
                  </label>
                </div>
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="phone"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Số điện thoại<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="number"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="phone"
                  placeholder="Nhập Số điện thoại"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.phone}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="address"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Địa chỉ<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="address"
                  placeholder="Nhập địa chỉ"
                  {...formik.getFieldProps("address")}
                />
                {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.address}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="remark"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Nhận xét<span className="text-red-400 text-lg">*</span>
                </label>
                <textarea
                  type="textarea"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="remark"
                  placeholder="Nhập nhận xét"
                  {...formik.getFieldProps("remark")}
                />
                {formik.touched.remark && formik.errors.remark ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.remark}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="sm:col-span-2 flex space-x-2 justify-center w-full mb-8">
            {loading === false ? (
              <>
                <button
                  type="submit"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Tạo thông báo
                </button>
              </>
            ) : (
              <>
                <div
                  className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full m-12 text-blue-600"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTeacher;
