//TODO: highlight words over 8 letters
//TODO: add a link to the source of text
//TODO: split sentences based on the full-stop => .
//TODO: count the number of the words

function highlightWords(){
    const paragraph = document.getElementById("paragraph");

    //to split words we do this
    const words = paragraph.innerHTML.split(' ');

    paragraph.innerHTML = words.map( word =>{
        if(word.length > 8){
            return `<span>${word}</span>`;
        }
        return word;
    })
    .join(' ');//to join the words again,,, words.map(mycode).join(' ')
}
function addLink(){
    const paragraph = document.getElementById("paragraph");

    const link = document.createElement('a');
    link.href = 'https://google.com/';
    link.textContent = 'Google';
    paragraph.insertAdjacentElement('afterend', link);//to insert it in the paragraph but at the end
}
function splitSentence(){
    const paragraph = document.getElementById("paragraph");

    paragraph.innerHTML = paragraph.innerHTML.split('. ').join('.<br>');
    

}
function countWords(){
    const words = paragraph.innerText.split(' ');
    alert("Total word count is: " + words.length);
}
