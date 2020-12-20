const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '19032313-4dd4b1c57c2e902bf9f549139';

async function fetchImagesAPI({ searchName, currentPage }) {
  const searchQuery = `?q=${searchName}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  try {
    const response = await fetch(`${BASE_URL}/${searchQuery}`);
    const data = await response.json();
    return data.hits;
  } catch (error) {
    return error('Some error in fetch');
  }
}

const api = {
  fetchImagesAPI,
};

export default api;
