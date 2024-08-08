// Using the same function with multiple objects

var movie1;
var movie2;
var movie3;
var movie;
var showMovieInfo;
var quizQuestion;

movie1 = {
    title: "Inside Out",
    actors: "Amy Poehler, Bill Hader",
    directors: "Pete Doctor, Ronaldo Del Carmen"
};

movie2 = {
    title: "Spectre",
    actors: "Daniel Craig, Christoph Waltz",
    directors: "Sam Mendes"
};

movie3 = {
    title: "Star Wars: Episode VII - The Force Awakens",
    actors: "Harrison Ford, Mark Hamill, Carrie Fisher",
    directors: "J.J.Abrams"
};

showMovieInfo = function () {
    console.log("Movie information for " + movie.title);
    console.log("------------------------------");
    console.log("Actors: " + movie.actors);
    console.log("Directors: " + movie.directors);
    console.log("------------------------------");
};

movie = movie1;
showMovieInfo();

movie = movie2;
showMovieInfo();

movie = movie3;
showMovieInfo();

var quizQes1 = {
  question : "What is the capital of France?",
  options : "A) Paris B) London C) Rome",
  ans : "A)"
};

var quizQes2 = {
  question : "Largest planet on soloar system is ?",
  options : "A) earth B) mars C) jupiter",
  ans : "C)"
};

var quizQes3 = {
  question : "who wrote Harry Potter?",
  options : "A) Harper Lee B) JK Rowling C) Mark twain",
  ans : "B)"
};

var showQuiz = function() {
  console.log("Question: " + quizQuestion.question);
  console.log("Options: " + quizQuestion.options );
  console.log("ans: " + quizQuestion.ans);
}

quizQuestion = quizQes1;
showQuiz();

quizQuestion = quizQes2;
showQuiz();

quizQuestion = quizQes3;
showQuiz();



/* Further Adventures
 *
 * 1) Create an object to represent
 *    a multiple choice quiz question.
 *
 * 2) Create two more quiz question objects.
 *
 * 3) Create a function to show
 *    the question and answer options.
 *
 * 4) Use the same variable assignment technique
 *    as above to display all three questions
 *    on the console.
 *
 */