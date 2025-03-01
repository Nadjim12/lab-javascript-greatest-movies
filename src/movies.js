// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const dirArray = moviesArray.map((currentMovie) => {
      return currentMovie.director;
    });
    return dirArray;
  }


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dramaMoviesbySpielberg = moviesArray.filter(
        (currentMovie) =>
          currentMovie.director === "Steven Spielberg" &&
          currentMovie.genre.includes("Drama")
      );
      
      return dramaMoviesbySpielberg.length;
}



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) {
      return 0;
    }
    const movieScores = moviesArray.reduce((accumulator, currentValue) => {
      if (currentValue.score >= 0) {
        return accumulator + currentValue.score;
      }
      if (currentValue.score === undefined) {
        return accumulator;
      }
    }, 0);
    
    const avg = movieScores / moviesArray.length;
    return Number(avg.toFixed(2));
  }
  
  // console.log(movieScores);
console.log(movieScores);





// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
const dramaMovies = moviesArray.filter((movie)=>movie.genre.includes("Drama"));
const SumofScores = dramamovies.reduce((sum, movie)=> sum + movie.score, 0);
const averageScore = (SumofScores / dramaMovies.length).toFixed(2);

return Number(averageScore);
}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    sortedMovied = moviesArray.sort((a, b) => a.year - b.year);
    return sortedMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
        
        const sortedMovies = moviesArray.sort((a, b) => a.title.localeCompare(b.title));
        
        const first20Titles = sortedMovies.slice(0, 20).map(movie => movie.title);
      
        console.log(first20Titles);

        return sortedMovies;
      }



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
