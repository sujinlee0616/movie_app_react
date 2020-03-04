import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css"; 

// #3.3 Planning the Movie Component
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // axios.get하는데 시간 오래 걸릴 수 있음 (데이터가 많다보니 ㅠㅠ)
    // ==> async(비동기) 함수로 만들었음
    // await는 axios.get이 끝날때까지 기다림.
    // <axios>
    // - HTTP통신을 하는데 매우 인기있는 Javascript라이브러리.
    // - fetch 위에 있는 레이어 같은 느낌.
    // - 우리는 fetch 대신 axios를 사용할 예정.
    // console.log(movies);  // console에서 확인해보니, movies 안에 data 안에 data 안에 movies에 데이터가 들어가고 있었음.
    // console.log(movies.data.data.movies);  // 영화 데이터 20개씩 잘 나오는거 확인했음
    // ==> 위에서 const movies에 axios.get해서 object를 넣었는데, 그러지 말고 아래와 같이 const movies에 바로 영화 데이터 들어가게 해주자.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies);
    this.setState({ movies: movies, isLoading: false });
    // movies 중 하나는 setState의 movies고, 다른 하나는 axios에서 가져온 movies. this.setState({movies}); 이렇게 적어도 알아서 똑똑하게 잘 출력해줌.
  };
  componentDidMount() {
    // setTimeout(() => { // setTimeout(): 타이머가 만료된 뒤 함수나 지정된 코드가 실행됨.
    //     this.setState({isLoading:false});
    // }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container"> 
        {/* JSX에서는 tag에 class 대신 className을 쓴다. */}
        {/* 컴포넌트의 class(class App extends React.Component)와 헷갈리기 때문. */}
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
            //console.log(movie); 
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section> //movies.map(): movies를 render한다.
    );
  }
}

// #3 State : #3.0~#3.2
// class App extends React.Component{ // <== class Component
//     state = { // state에 바꾸고 싶은 데이터를 넣는다.
//         count: 0
//     };
//     add = () => {
//         // console.log("add");
//         //this.state.count=1; // <== [Warning] Do not mutate state directly. 이렇게 하면 안 됨. 이렇게 하면 render를 refresh하지 않음.
//         this.setState(current => ({ count : current.count+1 }))
//         // setState 부를 때마다 매번 리액트는 새로운 상태로 다시 render한다.★
//     };
//     minus = () => {
//         // console.log("minus");
//         this.setState({ count : this.state.count-1 })
//     };
//     render(){ // <== class Component에는 render필요
//         return (
//             <div>
//                 <h1>The number is: {this.state.count}</h1>
//                 <button onClick={this.add}>Add</button>
//                 <button onClick={this.minus}>Minus</button>
//             </div>
//         );
//     }
// }

export default App;
