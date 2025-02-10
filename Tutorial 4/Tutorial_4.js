//the value of format WNO, LMF or MFL ex: for Taylor Alison Swift
// WNO – Western Name order (First, middle, last), e.g. Taylor, Alison, Swift
// ENO – Eastern Name order (Last,middle, first ), e.g. Swift, Alison, Taylor
// SCH -  School order (last, first, middle), e.g. Swift, Taylor, Alison
function getNameFormat(format) {
    //Define functions that take in an arbitrariy number of strings. 
    //Each strings contains names to be parsed according to the given format (defined above) and received here as an argument.
    //Within each string, the name components are sperated by a space (" "), the different names are seperated by commas.
    //Each function returns a stringified array of objects containing the parsed names
    //the order of the properties in each object should be name, middle, last, regardless of the orginial format

    function CreateListOfObjects() {
        output = [];
        for (let person of arguments) {
            names = person.split(" ");
            switch (format) {
                case 0: output.push({"first": names[0], "middle": names[1], "last": names[2]}); break;
                case 1: output.push({"first": names[2], "middle": names[1], "last": names[0]}); break;
                case 2: output.push({"first": names[1], "middle": names[2], "last": names[0]}); break;
            }
        }
        return JSON.stringify(output);
    }

    return CreateListOfObjects;
}

// add an assignment for each of the following bindings so that it would be point at a closure of the corresponding format 
let WesternOrderParser = getNameFormat(0);
let EasternOrderParser = getNameFormat(1);
let SchoolOrderParser = getNameFormat(2);

// Please don't change these lines
module.exports.westernOrderParser = WesternOrderParser;
module.exports.easternOrderParser = EasternOrderParser;
module.exports.schoolOrderParser = SchoolOrderParser;

/*
   If you would like to run the tests locally to check your work before submission you need to following the following steps
- Open a terminal inside the working directory
- Run the command `npm install` (only needed once)
- Run the command `npm test` (everytime you would like to run the tests)
*/