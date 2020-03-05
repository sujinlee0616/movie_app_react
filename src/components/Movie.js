import React from "react";
import PropTypes from "prop-types";
import "./Movie.css"; 

// tate가 필요X ==> class component로 만들 필요 없음. function component로 만들면 됨.
function Movie({ year, title, summary, poster, genres }) {
  return (
  <div className="movie">
    <img src={poster} alt={title} title={title}/>
    <div className="movie__data">
      <h3 className="movie__title">{title}</h3> 
      {/* <h3 class="movie__title" style={{backgroundColor: "pink"}}>{title}</h3>  */}
      {/* 위와 같이 style={{}}해서도 스타일 줄 수 있다. : javascript 위에 CSS 코딩하는 방식. */}
      <h5 className="movie__year">{year}</h5>
      <ul className="movie__genres">
        {genres.map((genre, index) => ( // index: map에서 자동으로 생김. 
          <li key={index} className="genres__genre">{genre}</li> 
        ))}
      </ul>
      <p className="movie__summary">{summary.slice(0,140)}...</p> 
      {/* summary 140글자까지 자르고 ... 넣어줬음 */}
    </div>
    
  </div>
  );
}

Movie.propTypes = {
  // API 보고 타입 정리. API -  https://yts.mx/api/v2/list_movies.json
  // API Documentation: https://yts.mx/api
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;
