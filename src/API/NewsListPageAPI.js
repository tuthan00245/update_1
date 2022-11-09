const { default: axiosClient } = require("./axiosClient");

const NewsPageAPI = {
  getNewsPageAPI(page,size) {
    const url = `v1/news/page?page=${page}&size=${size}`;
    return axiosClient.get(url);
  },
};

export default NewsPageAPI;
