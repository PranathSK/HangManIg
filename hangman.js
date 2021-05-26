// Random Words -> Random Word picker -> Key -> Create guesses array.
var totalWords = 'affix avenue awkward beekeeper boggle cobweb cycle disavow duplex equip exodus funny galaxy gossip icebox injury ivory jackpot jelly jockey joking joyful jumbo kayak khaki kiosk lengths lucky luxury lymph nightclub onyx ovary pajama pneumonia pshaw puppy scratch staff stretch';
var totalWords = totalWords.split(' ');
var key = totalWords[Math.round(Math.random()*40)].toUpperCase();
var guesses = key.split(' ');
var errors = 0;
var hint;
console.log(key);
for (var f = 0; f < key.length; f++)
    guesses[f] = '_';
if (key.length >= 5){
    var hint = Math.round(Math.random()*key.length);
    guesses[hint] = key.charAt(hint);
}

function dashes(){
    document.getElementById('word').innerHTML = '';
    for (var i = 0; i < guesses.length; i++)
        document.getElementById('word').innerHTML += guesses[i] + ' ';
    document.getElementById('start').style.visibility = "hidden";
}
function letterGuess(){
    var c = document.getElementById('Gletter').value.toUpperCase();
    if (key.includes(c)){
        for (var w = 0; w < guesses.length; w++){
            if (c == key[w]){
                if (guesses[w] == '_'){
                    guesses[w] = c;
                }
                else
                    alert('Letter Already Present!!');
            }
        }
    }
    else{
        errors += 1;
        changeImage();
    }
    if (errors == 10)
        resultingText(false);
    if (guesses.toString().replaceAll(',', '') == key)
        resultingText(true);
    document.getElementById('Gletter').value = '';
    dashes();
}

function wordGuess(){
    var w = document.getElementById('Gword').value.toUpperCase();
    if (w == key)
        resultingText(true);
    else
        resultingText(false);
}

function changeImage(){
    var img = document.getElementById('hang');
    if (errors == 1)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/1.jpg";
    else if (errors == 2)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/2.jpg";
    else if (errors == 3)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/3.jpg";
    else if (errors == 4)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/4.jpg";
    else if (errors == 5)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/5.jpg";
    else if (errors == 6)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/6.jpg";
    else if (errors == 7)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/7.jpg";
    else if (errors == 8)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/8.jpg";
    else if (errors == 9)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/9.jpg";
    else if (errors == 10)
        img.src = "https://www.oligalma.com/downloads/images/hangman/hangman/10.jpg";
}

function resultingText(res){
    if (res){
        document.getElementById('hang').src = "https://image.shutterstock.com/image-vector/congrats-you-win-vector-banner-260nw-1927146812.jpg";
        document.getElementById('last').innerHTML = 'You Won =)! The Word was ' + key;
        setTimeout(function(){ window.open("https://www.youtube.com/watch?v=attUrDwfdr8") }, 1500);
    }
    else{
        errors = 10;
        changeImage();
        document.getElementById('last').innerHTML = 'You Lost =(! The Word was ' + key;
        setTimeout(function(){ window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ") }, 1500);
    }
}