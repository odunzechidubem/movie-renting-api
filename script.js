("use strict");
//A simple Movie Renting Api console application usin ES6 classes in Javascript OOP.

const prompt = require("prompt-sync")({ sigint: true });

class allMovies {
  constructor(movieRent) {
    this.movieRent = movieRent;
  }

  calMovieRent() {
    if (this.movieRent == 1) {
      console.log("John Wick is rented for N300");
    } else if (this.movieRent == 2) {
      console.log("AFCON 2023 football is rented for N500");
    } else if (this.movieRent == 3) {
      console.log("Aki and Paw Paw is rented for N200");
    } else {
      console.log("Enter a value from 1 to 3");
    }
  }
}

const movieRent = prompt(
  "Welcome Odinakachukwu Movie Rent Shop. Select from the list:\n1. Rent John Wick 4 - N300 \n2. Rent AFCON 2023 football - N500 \n3. Rent Aki and Paw Paw - N200"
);

const odisMovies = new allMovies(movieRent);
console.log(odisMovies);
odisMovies.calMovieRent();
