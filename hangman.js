// Random Words -> Random Word picker -> Key -> Create guesses array.
var totalWords = 'affix avenue awkward beekeeper boggle cobweb cycle disavow duplex equip exodus funny galaxy gossip icebox injury ivory jackpot jelly jockey joking joyful jumbo kayak khaki kiosk lengths lucky luxury lymph nightclub onyx ovary pajama pneumonia pshaw puppy scratch staff stretch';
var totalWords = totalWords.split(' ');
var key = totalWords[Math.round(Math.random()*40)].toUpperCase();
var guesses = key.split(' ');

// have errors as 0(initial) & just for development purpose log the key word hehe
var errors = 0;
console.log(key);

// Set the guesses array to dashes
for (var f = 0; f < key.length; f++)
    guesses[f] = '_';

// Give a hint if no. of letters is >= 5
if (key.length >= 5){
    var hint = Math.round(Math.random()*key.length);
    guesses[hint] = key.charAt(hint);
}

// Show the dashes on the top of the screen for the player to know the finished letters
function dashes(){
    document.getElementById('word').innerHTML = '';
    for (var i = 0; i < guesses.length; i++)
        document.getElementById('word').innerHTML += guesses[i] + ' ';
    document.getElementById('start').style.visibility = "hidden";
}

// If the player hits enter or presses the check button after entering a letter 
function letterGuess(){
    var c = document.getElementById('Gletter').value.toUpperCase();
    // If the guesses letter is Present !!
    if (key.includes(c)){
        // All the chars having same value as c must be shown ie if a letter is guessed, all places having it it shown
        for (var w = 0; w < guesses.length; w++){
            // Equals the word
            if (c == key[w]){
                // the space is still blank-Fill it in
                if (guesses[w] == '_')
                    guesses[w] = c;
                // If not
                else{
                    // Check if other blanks contain the same letter
                    var count = 0;
                    for (var v = w+1; v < key.length; v++){
                        if (key[v] == c)
                            count += 1;
                    }
                    // If they do not then for 5 seconds show that the letter exists
                    if (count == 0){
                        document.getElementById('last').innerHTML = 'Letter Already Present';
                        setTimeout(function(){document.getElementById('last').innerHTML = 'Current Position: ';}, 5000);
                    }
                }
            }
        }
    }
    // If the letter is not in the word at all => Punishment extra part to the hanging...
    else{
        errors += 1;
        changeImage();
    }
    // Checking for decisive result
    if (errors == 10)
        resultingText(false);
    if (guesses.toString().replaceAll(',', '') == key)
        resultingText(true);
    
    // Setting the input back to null and printing the new dashes again
    document.getElementById('Gletter').value = '';
    dashes();
}

// IF the player takes the risk of guessing the word | Equals = win / Not = Lose
function wordGuess(){
    var w = document.getElementById('Gword').value.toUpperCase();
    if (w == key)
        resultingText(true);
    else
        resultingText(false);
}

// Shout out to oligalma
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

// Do stuff if the result is decisive (RickRoll if lost)
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