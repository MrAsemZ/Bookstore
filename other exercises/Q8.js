 function convertCase(word){
    let result = "";

    for(let i = 0; i < word.length; i++){
        if(word[i] == word[i].toLowerCase()){
            result += word[i].toUpperCase();
        }
        else{
            result += word[i].toLowerCase();
        }
    }

    return result;
 }

console.log(convertCase("AseMZaGHaL"));
/********************************
*     JS Exercise               *
*     Q8 By Asem Al-Zaghal      *
********************************/