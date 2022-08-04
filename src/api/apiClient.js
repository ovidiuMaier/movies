const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "";

class apiClient {
  getMoviesList(page = 1) {
    const url = `${API_URL}/discover/movie?api_key=${API_KEY}&language=en-US&page=${page}`;
    return fetch(url)
      .then(res => res.json())
      .then(res => res.results);
  }
  getMovieData(id) {
    const urls = [
      `${API_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`,
      `${API_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    ];
    const movieData = {};
    const fetchs = [
      fetch(urls[0])
        .then(res => res.json())
        .then(res => (movieData.general = res)),
      fetch(urls[1])
        .then(res => res.json())
        .then(res => (movieData.credits = res))
    ];
    return Promise.all(fetchs).then(() => {
      return movieData;
    });
  }
}
export default new apiClient();
