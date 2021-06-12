window.alert("Welcome to the food triva! Click 'OK' to continue!")

//Array quetisons
var questions = [
    { q: 'Brown is the rarest M&M color.', a: 't' },
    { q: 'Switzerland consumes the most chocolare per capita.', a: 't' },
    { q: 'Gouda cheese originated in France.', a: 'f' },
    //Gouda cheese originated in Netherlands
    { q: 'Popsicle was invented by an 11 year old', a: 't' },
    { q: 'French fries were made in Greece.', a: 'f' },
    //French fries originated in Belgium and France
    { q: 'Avocados can take up to 20 years to fully grow.', a: 'f' },
    //Avocadoes can take up to anywhere between 10-15 years to fully grow
    { q: 'Coconut water has the same chemical makeup as human plasma in the bloodstream.', a: 'f' },
    //Plasma contains high levels of sodium and low levels of potassium, but coconut water contains the exact opposite
    { q: 'Arachibutyrophobia is the fear of peanut butter.', a: 'f' },
    //Arachibutyrophobua is actually the fear of having peanut butter stuck to the roof of your mouth
    { q: 'Eggplants are actually berries.', a: 't' },
    { q: 'Fruit Loops are all the same flavor.', a: 't' }
];

var score = 0;

for (var i = 0; i < questions.length; i++) {

    var answer = confirm(questions[i].q);

    if (
        (answer === true && questions[i].a === 't') ||
        (answer === false && questions[i].a === 'f')
    ) {
        score++;
        alert('Correct!');
    } else {
        alert('Wrong!');
    }
}

alert('You got ' + score + ' out of ' + questions.length + ' right.');
    
    
