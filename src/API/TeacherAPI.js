const { default: axiosClient } = require("./axiosClient");
const TeacherAPI = {
  postCreateTeacher(obj) {
    const url = "/api/v1/teachers";
    return axiosClient.post(url, obj);
  },
};

export default TeacherAPI;
