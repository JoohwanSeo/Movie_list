// fetch함수 옵션
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDQ2OTNhN2JjOWNkNWI2NDdmYmNhMGQ1OWZhOWM4ZCIsInN1YiI6IjY2MjdhYWJkNjJmMzM1MDE3ZGRjNTU2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RuqG0U0GriM0__RAU7ZBT9e3SQNtJNsFHD0dubrf9MQ",
  },
};

//fetch 옵션
fetch(
  "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1",
  options
)
  .then((response) => response.json())
  .then((response) => {
    const movieContainer = document.getElementById("movies-container");
    // 구조분해 할당
    const createMovieCard = (movie) => {
      const { id, title, overview, poster_path, vote_average } = movie;

      // DOM 요소 생성
      const card = document.createElement("div");
      const image = document.createElement("img");
      const titleElement = document.createElement("h2");
      const overViewElement = document.createElement("p");
      const voteAverageElement = document.createElement("p");

      // DOM 요소 클래스 이름 설정
      card.className = "movie-card";
      image.className = "poster-image";
      titleElement.className = "title";
      overViewElement.className = "overview";
      voteAverageElement.className = "vote-average";

      // 이미지 속성값 설정
      image.src = `https://image.tmdb.org/t/p/w500${poster_path}`;

      // 텍스트 컨텐츠 설정
      titleElement.textContent = title;
      overViewElement.textContent = `줄거리📖: ${overview}`;
      voteAverageElement.textContent = `평점📌: ${vote_average}`;

      card.setAttribute("id", id);

      // 생선된 카드 반환
      card.appendChild(image);
      card.appendChild(titleElement);
      card.appendChild(overViewElement);
      card.appendChild(voteAverageElement);

      return card;
    };
    
    // 검색 인식 DOM 요소
         const searchInput = document.getElementById("search-input");
         const searchBtn = document.getElementById("search-btn");
    
    // 카드 생성    
    function renderMovie(movies) {
      movieContainer.innerHTML = ""
      movies.forEach((movie) => {
        const movieCard = createMovieCard(movie);
        movieContainer.appendChild(movieCard);
        
        // alert창 띄우기
        movieCard.addEventListener("click", () => {
          const movieId = movieCard.getAttribute("id");
          alert(`영화 ID는 ${movieId}입니다!`);
        });
      });
      
      
         const searchMovie = function(event) {
          event.preventDefault()
           const searchRate = searchInput.value.toLowerCase()
           const filterMovie = response.results.filter(search => search.title.toLowerCase().includes(searchRate))
           console.log(filterMovie)
           renderMovie(filterMovie)
         }
         searchBtn.addEventListener('click', searchMovie);


  
         searchInput.addEventListener('keyup', event => {
          if (event.key === 'Enter') {
            searchMovie();
          }
        });
}
//함수 실행
renderMovie(response.results)

    
  });
