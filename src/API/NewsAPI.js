const { default: axiosClient } = require("./axiosClient");

const NewsAPI = {
  getNewsAPI(code) {
    const url = `v1/news/${code}`;
    return axiosClient.get(url);
  },
//   postNotificationAPI(query) {
//     const url = `v1/notifications`;
//     return axiosClient.post(url, query);
//   },
};

export default NewsAPI;
