
let triangleFrame = function(letter)
{
    let framedLetter = '';
    for (let i=0;i<4;i++)
    {
        let line='';
        // write a loop to start the line with 3 - i spaces
        for (let j = 0; j < 3 - i; j++)
        {
            line += ' ';
        }

        // The third line will contain the framed letter so we need to set the right condition
        if (i == 2) 
            line += `* ${letter} *`;
        else
        {
            line += '*'.repeat(2 * i + 1);
        }
        
        framedLetter += line + '\n';
    }

    return framedLetter;
}


let rectangleFrame = function(letter)
{
    framedLetter = '';
    line = "";

    //write a loop the add five stars to the line
    for (let i = 0; i < 5; i++)
    {
        line += '*';
    }

    //set the framed letter to be of 3 lines (one line of star, 
    //one line * Letter * and the last line of all stars)
    framedLetter = line + '\n' + `* ${letter} *` + '\n' + line + '\n';

    return framedLetter;
}


// Set the function definition for the generalFramer so that it would receive two arguments
//      - the first argument is a callback function that creates the desired frame
//      - the second argument is the letter to be framed.
// The retun should be the string of the letter framed by the given framer.
let generalFramer = function(func, letter)
{
    return func(letter);
}

console.log(generalFramer(triangleFrame, 'A'));
console.log(generalFramer(triangleFrame, 'B'));
console.log(generalFramer(triangleFrame, 'C'));

console.log(generalFramer(rectangleFrame, 'A'));
console.log(generalFramer(rectangleFrame, 'B'));
console.log(generalFramer(rectangleFrame, 'C'));