function fetchImagesWithQuery(nextName, page) {
  return fetch(
    `https://pixabay.com/api/?q=${nextName}&page=${page}&key=19032313-4dd4b1c57c2e902bf9f549139&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Something is wrong, please try again'));
  });
}
const apiService = { fetchImagesWithQuery };
export default apiService;
