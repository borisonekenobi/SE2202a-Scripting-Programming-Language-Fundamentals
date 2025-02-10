let mov = require(`./movies-250.json`);//Do not touch

function getBestMovieBasedOn(genre, minRunTime, mov) {
    const movies = mov.movies;
    const filteredMovies = movies.filter(movie => movie.Genre.includes(genre) && parseInt(movie.Runtime) >= minRunTime * 60);
    const sortedMovies = filteredMovies.sort((a, b) => b.imdbRating - a.imdbRating);

    const bestMovie = sortedMovies[0];
    const bestMovieTitle = bestMovie.Title;
    const bestMovieYear = bestMovie.Released.split(' ')[2];
    const bestMovieRating = bestMovie.Ratings[0].Value.split('/')[0];
    return `${bestMovieTitle} released in ${bestMovieYear} is the highest rated ${genre} movie over ${minRunTime} hour(s) long, with an imdb rating of ${bestMovieRating}`;
}

//Do not touch
console.log(getBestMovieBasedOn('Romance', 2, mov));
module.exports=getBestMovieBasedOn;