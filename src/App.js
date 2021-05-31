import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading:true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
  }
  // getMovies 가호출될때까지 기다림 (비동기함수)
  componentDidMount(){
    this.getMovies();
  }

  render() {
    const {isLoading} = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}


export default App;
