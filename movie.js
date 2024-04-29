// fetch 옵션
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2OTNhN2JjOWNkNWI2NDdmYmNhMGQ1OWZhOWM4ZCIsInN1YiI6IjY2MjdhYWJkNjJmMzM1MDE3ZGRjNTU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RuqG0U0GriM0__RAU7ZBT9e3SQNtJNsFHD0dubrf9MQ'
  }
};

// 함수선언
function fetchMovie (keyword = '') {
fetch('https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1', options)
  .then(response => response.json())
  .then((data) => {
    const movies = data.results;
    console.log(movies)
    const movieContain = document.getElementById('movie-container')
    movieContain.innerHTML = '';
    movies
    .filter((value) => value.title.incluedes(keyworld))
    .foreach((movie) => {
      const movieHtml = `
      <div class='card' onclick='getMovieId(${movie.id})'>
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title} Poster">
          <h2>${movie.title}</h2>
          <p class = 'overview'>${movie.overview}</p>

          <p class = 'vote'>평균 평점: ${movie.vote_average}</p>
      </div>`;
              const movieContainer = document.getElementById("movie-container");
              movieContainer.innerHTML += movieHtml;
          });
  })
      
      

  .catch(err => console.error(err));
}

  // fetch 함수가 비동기 함수이기에 먼저 다음 작업을 선행한 후에 그 다음 미뤄뒀던 fetch 함수의 작업을 진행하게 된다.
  // 1~9 번 줄까지 


  //카드 리스트 가져오기
  // let contain = document.querySelector()
  // contain.innerHTML

  const searchForm = document.querySelector('#container')
  searchForm.addEventListener('submit', function(event) {
    event.preventDefault()
    fetchMovie(event.target[0].value)
  })

  console.log(searchForm)