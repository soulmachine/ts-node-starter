// define the class with constructor
class Author {
    constructor (public Name: string) { }
}
// create the instance of the class
let author = new Author("Kunal Chowdhury");
// print the information in the console
console.log("\nHello Readers,");
console.log("Thanks for visiting my blog");
console.log(`\t~ ${author.Name}`);