import axios from 'axios';

const apiService = async (nextName, currentPage) => {
  const { data } = await axios.get(
    `https://pixabay.com/api/?q=${nextName}&page=${currentPage}&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return data.hits;
};
export default apiService;

// export function fetchImages() {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${nextName}&page=${this.state.currentPage}&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
//     )
//     .then(response => this.setState({ images: response.data.hits }));
// }
// const api = { fetchImages };
// export default api;
