 function camelCase(word){
    let result = "";
    let upperCase = false;

    for (let i = 0; i < word.length; i++){
        if(word[i] == " "){     //to Check for empty spaces
            upperCase = true;
        }
        else if (upperCase){    //Make the second word first letter capital
            result += word[i].toUpperCase();
            upperCase = false;
        }
        else{ // Make the rest letters lowercased
            result += word[i].toLowerCase();
        }
    }
    return result;
 }

console.log(camelCase("aSEm MoHamMAd shaWKat Zaghal"));
/********************************
*     JS Exercise               *
*     Q9 By Asem Al-Zaghal      *
********************************/