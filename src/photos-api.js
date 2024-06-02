import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchPhotos = async (searchQuery, currentPage) => {
  const response = await axios.get("/search/photos", {
    params: {
      client_id: "mv2M4RQlDoAWd09mEijha6bx0mKblfEdf5z9nBsVzAU",
      query: searchQuery,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data.results;
};