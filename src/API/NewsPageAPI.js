const { default: axiosClient } = require("./axiosClient");

const NewsPageAPI = {
  getNewsPageAPI(page) {
    const url = `v1/news/page?page=${page}&size=10`;
    return axiosClient.get(url);
  },
};

export default NewsPageAPI;
