import User from "/movie.js";

const user = new User("name");
console.log(user);
const apiKey = "a8efe207d66bb7e206ca1488b949500a";
const videoUrl = "https://www.youtube.com/embed/";

// this class has all methods to work with themoviedb
const player = document.getElementById("player");
class Movies {
  static getOneMovie(id) {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    )
      .then((res) => res.json())
      .then((movies) => {
        console.log(movies);
      })
      .catch((err) => {
        console.log(err, "error occured");
      });
  }
  static getOneMovieImage(imageUrl) {
    // fetch(
    //   `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}&language=en-US`
    // )
    fetch(
      `https://api.themoviedb.org/3/movie/${imageUrl}/videos?api_key=a8efe207d66bb7e206ca1488b949500a&language=en-US`
    )
      // fetch(
      //   `https://api.themoviedb.org/3/movie/643586/videos?api_key=a8efe207d66bb7e206ca1488b949500a&language=en-US`
      // )
      // fetch(`https://image.tmdb.org/t/p/w500/${imageUrl}`)
      // fetch(
      //   `https://api.themoviedb.org/3/movie/643586/recommendations?api_key=a8efe207d66bb7e206ca1488b949500a&language=en-US&page=1`
      // )
      .then((res) => res.json())
      .then((movies) => {
        player.setAttribute("src", `${videoUrl}${movies.results[1].key}`);
        console.log(movies.results[1].key);
      })
      .catch((err) => {
        console.log(err, "error occured");
      });
  }
}

let MoviesMethods = {
  api: "slfjalsdfsa",

  getPopular: function () {
    return fetch(`${this.api}`);
  },
};

Movies.getOneMovieImage(643586);
