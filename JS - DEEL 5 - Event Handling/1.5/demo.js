const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who's afraid of negative numbers? He'll stop at nothing to avoid them!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "I'm on a seafood diet. I see food and I eat it!",
    "What do you call fake spaghetti? An impasta!",
    "I used to play piano by ear, but now I use my hands.",
    "What do you call an alligator in a vest? An investigator!",
    "I told my computer I needed a break, and now it won't stop sending me vacation ads!",
    "Why was the math book sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't eggs tell jokes? Because they'd crack each other up!",
    "What did the janitor say when he jumped out of the closet? 'Supplies!'",
    "I used to be a baker, but I couldn't make enough dough!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What did one hat say to the other? 'You stay here, I'll go on ahead!'",
    "I'm reading a book on the history of glue. I just can't seem to put it down!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What did one ocean say to the other ocean? Nothing, they just waved!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "I'm writing a book about reverse psychology. Do not read it!"
];
const hey = (cell,joke) =>{
    cell.innerText = joke;
}

let cells = document.querySelectorAll("td");
cells.forEach((cell,index) => {
    cell.addEventListener('click', () => {
        hey(cell,jokes[index]);
    });
})