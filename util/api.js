const  BASE_API = 'https://yts.lt/api/v2/';

class Api {
  async getSuggestion(id) {
    let url = `${BASE_API}movie_suggestions.json?movie_id=${id}`;
    const query = await fetch(url)
    const {data} = await query.json()

    return data.movies
  }
  async getMovies() {
    let url = `${BASE_API}list_movies.json`;
    const query = await fetch(url)
    const {data} = await query.json()

    return data.movies
  }
  async searchMovie(title) {
    const query = await fetch(`${BASE_API}list_movies.json?limit=1&sort_by=rating&query_term=${title}`);
    const { data } = await query.json();
    return data.movies
  }
}

export default new Api();