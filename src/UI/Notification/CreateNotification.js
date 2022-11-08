import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import NotificationAPI from "../../API/NotificationAPI";
import data from "./NotificationData";
import * as Yup from "yup";
// editor for content
import { Editor } from "@tinymce/tinymce-react";
import NotificationGroupAPI from "../../API/NotificationGroupAPI";
import { toast } from "react-toastify";

const CreateNotification = () => {
  const [notification, setNotification] = useState(0);
  const [selectNotifi, setSelectNotifi] = useState();

  const [studentTo, setStudentTo] = useState(0);
  const [...dataSchoolYear] = data[0].SchoolYear;
  const [...dataFaculty] = data[0].Faculty;
  const [...dataClass] = data[0].Class;
  const [onSubmited, setOnSubmit] = useState({});
  const [loading, setLoading] = useState(false);
  const [notificationGroup, setNotificationGroup] = useState({});
  const [notificationIP, setNotificationIP] = useState({});

  const [editor, setEditor] = useState("");

  const handleNotification = (e) => {
    setNotification(e.target.value);
    setStudentTo(0);
  };
  const handleNotificationGroup = (e) => {
    setSelectNotifi(e.target.value);
  };
  const handleStudent = (e) => {
    setStudentTo(Number(e.target.value));
  };
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      shortDescription: "",
      thumbnailFile: "",
      notificationTo: "",
      schoolYear: "",
      faculty: "",
      notificationGroupCode: "",
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .max(150, "'Tiêu đề' không quá 150 kí tự")
        .min(2, "'Tiêu đề' ít nhất 2 kí tự")
        .required("Vui lòng nhập 'Tiêu đề'"),
      content: Yup.string()
        .min(9, "'Nội dung' ít nhất 2 kí tự")
        .required("Vui lòng nhập 'Nội dung'"),
      shortDescription: Yup.string()
        .max(255, "'Mô tả ngắn gọn' không quá 255 kí tự")
        .min(2, "'Mô tả ngắn gọn' ít nhất 2 kí tự")
        .required("Vui lòng nhập 'Mô tả ngắn gọn'"),
    }),

    onSubmit: (valuesForm) => {
      setLoading(true);
      setOnSubmit(valuesForm);
    },
  });
  const handleEdittor = (e) => {
    setEditor(e);
    formik.setFieldValue("content", e);
  };
  useEffect(() => {
    (async () => {
      try {
        const result1 = await NotificationGroupAPI.getNotificationGroupAll(
          true
        );
        const result2 = await NotificationAPI.getNotificationIdAPI(1);
        setNotificationGroup(result1.data);
        setNotificationIP(result2.data);
        // console.log(result2.data);
      } catch (e) {
        console.log(e.message);
        toast.error("Có lỗi xảy ra, kiểm tra lại đường truyền", {
          className: "top-10",
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
      }
    })();
    if (loading === true && onSubmited) {
      const formData = new FormData();
      formData.append("notifyRequestDtoJson", {
        title: onSubmited?.title,
        content: onSubmited?.content,
        shortDescription: onSubmited?.shortDescription,
        type: notification.toString(),
        notificationGroupCode: selectNotifi,
        facultyCodes: ["FIT"],
        schoolYearCodes: ["2019"],
        classCodes: ["CCQ1911C"],
      });

      formData.append("file", "null");
      // Display the key/value pairs
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      (async () => {
        try {
          const response = await NotificationAPI.postNotificationAPI(formData);
          if (response.status === 200) {
            setLoading(false);
            toast.success("Tạo thông báo thành công", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          } else if (response.status >= 400) {
            setLoading(false);

            toast.error("Tạo thông báo không thành công", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
          }
        } catch (error) {
          setLoading(false);
          toast.error("Có lỗi xảy ra", {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
          });
          console.log(error.message);
        }
      })();
    }
  }, [loading, notification, onSubmited, selectNotifi]);
  return (
    <div className="min-h-screen bg-slate-100 ">
      <h2 className="w-4/5 m-auto pt-8 pb-4 text-xl text-blue-400 uppercase">
        Tạo thông báo
      </h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="w-4/5 m-auto grid md:grid-cols-2 sm:grid-cols-1  gap-4">
          <div className="  rounded bg-white shadow-md">
            <div className=" p-6">
              <div className="mb-3 ">
                <label
                  htmlFor="title"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Tiêu đề<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="title"
                  placeholder="Nhập tiêu đề"
                  {...formik.getFieldProps("title")}
                />
                {formik.touched.title && formik.errors.title ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.title}
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div className="mb-3 ">
                <label
                  htmlFor="shortDescription"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Mô tả ngắn gọn<span className="text-red-400 text-lg">*</span>
                </label>
                <input
                  type="text"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="shortDescription"
                  placeholder="Nhập mô tả ngắn gọn"
                  {...formik.getFieldProps("shortDescription")}
                />
                {formik.touched.shortDescription &&
                formik.errors.shortDescription ? (
                  <div className="text-red-400 text-sm">
                    {formik.errors.shortDescription}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor=""
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Nhóm thông báo<span className="text-red-400 text-lg">*</span>
                </label>
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  id=""
                  onChange={handleNotificationGroup}
                >
                  {notificationGroup.length > 0 &&
                    notificationGroup?.map((item, index) => (
                      <option key={item?.id} value={item?.code}>
                        {item?.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="mb-3 ">
                <label
                  htmlFor="thumbnailfile"
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  File đính kèm
                </label>
                <input
                  type="file"
                  className=" form-control  block  w-full  px-3  py-1.5  text-base  font-normal  text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300  rounded  transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  id="thumbnailfile"
                  // required
                  accept=".png, .jpg, .jpeg"
                />
              </div>
            </div>
          </div>
          <div className="  rounded bg-white shadow-md">
            <div className=" p-6">
              <div className="mb-3 ">
                <label
                  htmlFor=""
                  className="form-label inline-block mb-2 text-gray-700"
                >
                  Thông báo đến<span className="text-red-400 text-lg">*</span>
                </label>
                <select
                  className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                  id=""
                  onChange={handleNotification}
                >
                  <option key={0} value={0}>
                    Tất cả
                  </option>
                  <option key={1} value={1}>
                    Sinhviên
                  </option>
                  <option key={2} value={2}>
                    Giảng viên
                  </option>
                </select>
              </div>
              {Number(notification) === 1 ? (
                <>
                  <div className="mb-3 ">
                    <label
                      htmlFor=""
                      className="form-label inline-block mb-2 text-gray-700"
                    >
                      Sinh viên nhận thông báo theo
                      <span className="text-red-400 text-lg">*</span>
                    </label>
                    <select
                      className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      id=""
                      onChange={handleStudent}
                    >
                      <option value={0} key={0}>
                        Niên khóa
                      </option>
                      <option value={1} key={1}>
                        Khoa
                      </option>
                      <option value={2} key={2}>
                        Lớp
                      </option>
                    </select>
                  </div>
                  {Number(studentTo) === 0 ? (
                    <>
                      <div className="mb-3 ">
                        <label
                          htmlFor=""
                          className="form-label inline-block mb-2 text-gray-700"
                        >
                          Niên khóa
                          <span className="text-red-400 text-lg">*</span>
                        </label>
                        <select
                          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          id=""
                        >
                          {dataSchoolYear &&
                            dataSchoolYear.map((item, index) => (
                              <option value={item.idY} key={index}>
                                {item.year}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="mb-3 ">
                        <label
                          htmlFor=""
                          className="form-label inline-block mb-2 text-gray-700"
                        >
                          Khoa<span className="text-red-400 text-lg">*</span>
                        </label>
                        <select
                          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          id=""
                        >
                          {dataFaculty &&
                            dataFaculty.map((item, index) => (
                              <option value={item.idF} key={index}>
                                {item.faculty}
                              </option>
                            ))}
                        </select>
                      </div>
                    </>
                  ) : studentTo === 1 ? (
                    <>
                      <div className="mb-3 ">
                        <label
                          htmlFor=""
                          className="form-label inline-block mb-2 text-gray-700"
                        >
                          Khoa<span className="text-red-400 text-lg">*</span>
                        </label>
                        <select
                          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          id=""
                        >
                          {dataFaculty &&
                            dataFaculty.map((item, index) => (
                              <option value={item.idF} key={index}>
                                {item.faculty}
                              </option>
                            ))}
                        </select>
                      </div>
                      <div className="mb-3 ">
                        <label
                          htmlFor=""
                          className="form-label inline-block mb-2 text-gray-700"
                        >
                          Niên khóa
                          <span className="text-red-400 text-lg">*</span>
                        </label>
                        <select
                          className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          aria-label="Default select example"
                          id=""
                        >
                          {dataSchoolYear &&
                            dataSchoolYear.map((item, index) => (
                              <option value={item.idY} key={index}>
                                {item.year}
                              </option>
                            ))}
                        </select>
                      </div>
                    </>
                  ) : (
                    studentTo === 2 && (
                      <>
                        <div className="mb-3 ">
                          <label
                            htmlFor=""
                            className="form-label inline-block mb-2 text-gray-700"
                          >
                            Lớp<span className="text-red-400 text-lg">*</span>
                          </label>
                          <select
                            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example"
                            id=""
                          >
                            {dataClass &&
                              dataClass.map((item, index) => (
                                <option value={item.idC} key={index}>
                                  {item.class}
                                </option>
                              ))}
                          </select>
                        </div>
                      </>
                    )
                  )}
                </>
              ) : (
                Number(notification) === 2 && (
                  <>
                    <div className="mb-3 ">
                      <label
                        htmlFor=""
                        className="form-label inline-block mb-2 text-gray-700"
                      >
                        Khoa<span className="text-red-400 text-lg">*</span>
                      </label>
                      <select
                        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        aria-label="Default select example"
                        id=""
                      >
                        <option value={0} key={0}>
                          CNTT
                        </option>
                        <option value={1} key={1}>
                          Maketing
                        </option>
                        <option value={2} key={2}>
                          Different
                        </option>
                      </select>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
          <div className="sm:col-span-2 w-full mb-4">
            <label
              htmlFor="content"
              className="form-label inline-block mb-2 text-gray-700"
            >
              Nội dung<span className="text-red-400 text-lg">*</span>
            </label>

            {formik.touched.content && formik.errors.content ? (
              <div className="text-red-400 text-sm">
                {formik.errors.content}
              </div>
            ) : (
              ""
            )}
            <Editor onEditorChange={handleEdittor} />
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

export default CreateNotification;
