
class Movie {
// A constructor for the class Movie, it takes strings representing a movie's
// title, it's studio and it's ratings repsectively, as inputs
// the class property rating is set to "PG" as default when no rating is provided
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

// a method getPG which takes an array of base type Movie as its argument and returns
// a new array of only those movies in the input array with a rating of "PG".
// We assume that the input array "movies" is full of Movie instances.
    static getPG(movies){

        let arrayOfPG = [];

        for(let i = 0; i < movies.length; i++){
            if(movies[i].rating === "PG"){
                arrayOfPG.push({
                    title: movies[i].title,
                    studio: movies[i].studio,
                    rating: movies[i].rating,
                });
            }
        }

        return arrayOfPG;

    }

}

const arrayOfAllMovies = [
    new Movie("The Great Gatsby", "21st Century Fox", "R"),
    new Movie("Aladdin", "Disney Studios", "PG13"),
    new Movie("Tintin", "MGM", "PG"),
    new Movie("Home Alone", "Dreamworks"),
    new Movie("Minions", "WB Studios"),
];

const pgMovies = Movie.getPG(arrayOfAllMovies);

console.log(pgMovies);

const cRoyale = new Movie("Casino Royale", "Eon Productions", "PG13");
// console.log(cRoyale);
