var correct = 0;
var wrong = 0;
var unanswered = 0;
var answered = 0;
var place = 0;
var interval;
var time = 31;
var q1 = {
    question: "What is love?",
    answer1: ["<button>Baby don't hurt me.</button>", 0],
    answer2: ["<button>MC squared</button>", 0],
    answer3: ["<button>Turkey legs</button>", 1],
    answer4: ["<button>An illusion of time and space</button>", 0],
    explanation: "Love was invented by card companies.",
    gif: "<img src='https://media.giphy.com/media/2dQ3FMaMFccpi/giphy.gif'/>"

}
var q2 = {
    question: "How many fingers am I holding up?",
    answer1: ["<button>11</button>", 1],
    answer2: ["<button>7</button>", 0],
    answer3: ["<button>7/11</button>", 0],
    answer4: ["<button>Root beer.</button>", 0],
    explanation: "Daaa na na naaa na naa na naaaa....",
    gif: "<img src='https://media.giphy.com/media/JLTkYdbu5usnu/giphy.gif'/>"

}
var q3 = {
    question: "Do you have any corn? ",
    answer1: ["<button>Ya</button>", 0],
    answer2: ["<button>Naw</button>", 0],
    answer3: ["<button>I wish</button>", 1],
    answer4: ["<button>It's on my cob.</button>", 0],
    explanation: "I was asking for a friend.",
    gif: "<img src='https://media.giphy.com/media/hV2M9GS5taKAM/giphy.gif'/>"
}
var q4 = {
    question: "Are you my dad?",
    answer1: ["<button>Yeah</button>", 0],
    answer2: ["<button>I'll think about it</button>", 0],
    answer3: ["<button>Probably</button>", 0],
    answer4: ["<button>Santa Claus</button>", 1],
    explanation: "He likes gifts folks!",
    gif: "<img src='https://media.giphy.com/media/KDH9hJ2mSEUYU/giphy.gif'/>"

}
var q5 = {
    question: "Who you gonna call?",
    answer1: ["<button>My mom</button>", 0],
    answer2: ["<button>Grandma</button>", 1],
    answer3: ["<button>Ghostbusters</button>", 0],
    answer4: ["<button>Domino's</button>", 0],
    explanation: "She's got the best cold meats.",
    gif: "<img src='https://media.giphy.com/media/Zk79oziuknnws/giphy.gif'/>"

}
var q6 = {
    question: "Are you sure you don't have any corn? ",
    answer1: ["<button>Maybe</button>", 0],
    answer2: ["<button>I'm a food pantry.</button>", 0],
    answer3: ["<button>You betcha</button>", 0],
    answer4: ["<button>I'm hungry</button>", 1],
    explanation: "Clearly.",
    gif: "<img src='assets/images/me.jpg'/>"
}
var q7 = {
    question: "How cute was that photo of me?",
    answer1: ["<button>Very flattering</button>", 1],
    answer2: ["<button>So professional</button>", 1],
    answer3: ["<button>Beautiful smile</button>", 1],
    answer4: ["<button>10 out of 10</button>", 1],
    explanation: "You made the right choice.",
    gif: "<img src='https://media.giphy.com/media/n0eJLge10ujSM/giphy.gif'/>"

}
var q8 = {
    question: "How many questions do you have left?",
    answer1: ["<button>I lost track of time somewhere</button>", 0],
    answer2: ["<button>7</button>", 0],
    answer3: ["<button>2</button>", 0],
    answer4: ["<button>7/11</button>", 1],
    explanation: "Shoulder sideways smack it smack it in the air.",
    gif: "<img src='https://media.giphy.com/media/tUuaj1Sq8fmww/giphy.gif'/>"

}
var q9 = {
    question: "Can you give me about five minutes? I have a carburetor out back that needs some work.",
    answer1: ["<button>What the heck no</button>", 0],
    answer2: ["<button>You're a star, sure</button>", 1],
    answer3: ["<button>I don't have a car</button>", 0],
    answer4: ["<button>Never!!!</button>", 0],
    explanation: "Appreciate ya!",
    gif: "<img src='https://media.giphy.com/media/13B40FkhzSC2c/giphy.gif'/>"
}
var q10 = {
    question: "What did you think of this trivia game sensory experience? ",
    answer1: ["<button>Sensational</button>", 0],
    answer2: ["<button>A+++</button>", 1],
    answer3: ["<button>You're a genius</button>", 0],
    answer4: ["<button>Above average</button>", 0],
    explanation: "I was asking for a friend.",
    gif: "<img src='https://media.giphy.com/media/26xBDhnJPhdSTHSkU/giphy.gif'/>"
}
var continueGame = $('<button>Continue</button>');
var restartGame = $('<button>Restart?</button>');
var showQuestions;
var startTimer;
var questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
var gameRuns = false;

// Start of the window load
window.onload = (function() {
    $('#right').hide();
    $('#wrong').hide();
    $('#noanswer').hide();

    $('#start').on("click", function startGame() {
        $('.answers').show();
        $('#question').show();
        $('#timer').show();
        $('#start').hide();
        gameRuns = true;
        timer();
        questionDisplay();
        console.log(questions[place].question);
    })

    function questionDisplay() {
        console.log('questions fired');
        $('#gif').hide();
        $('#explanation').hide();
        $('#continue').hide();
        $('.answer').show();
        $('#question').show();
        $('#timer').show();
        $('#right').hide();
        $('#wrong').hide();
        $('#noanswer').hide();
        time = 31;
        $('#question').html(questions[place].question);
        $('#answer1').html(questions[place].answer1[0]);
        $('#answer2').html(questions[place].answer2[0]);
        $('#answer3').html(questions[place].answer3[0]);
        $('#answer4').html(questions[place].answer4[0]);
        $('#answer1').attr('data-name', questions[place].answer1[1]);
        $('#answer2').attr('data-name', questions[place].answer2[1]);
        $('#answer3').attr('data-name', questions[place].answer3[1]);
        $('#answer4').attr('data-name', questions[place].answer4[1]);
    }

    $('.answer').on("click", function answers(objButton) {
        console.log($(this).data("name"))
        var userGuess = $(this).data("name");
        if (userGuess === 1) {
            answered++;
            correct++;
            $('#right').show();
            explanations();
            console.log("Correct: " + correct);
            console.log("Wrong: " + wrong);
            console.log("Answered: " + answered);
            console.log("Unanswered: " + unanswered);
            console.log("Place: " + place);
            console.log("You chose the correct answer");
        } else if (userGuess === 0) {
            answered++;
            wrong++;
            $('#wrong').show();
            explanations();
            console.log("Correct: " + correct);
            console.log("Wrong: " + wrong);
            console.log("Answered: " + answered);
            console.log("Unanswered: " + unanswered);
            console.log("Place: " + place);
            console.log("You chose the incorrect answer");
        }

    })

    function explanations() {
        $('#gif').html(questions[place].gif);
        $('#explanation').html(questions[place].explanation);
        place++;
        if (place < 10) {
            $('.answer').hide();
            $('#question').hide();
            $('#timer').hide();
            //$('#continue').show();
            clearInterval(interval);
            $('#gif').show();
            $('#explanation').show();
            showQuestions = setTimeout(questionDisplay, 5000);
            setTimer = setTimeout(timer, 5000);
        } else {
            gameRuns = false;
            $('.answer').hide();
            $('#question').hide();
            $('#timer').hide();
            clearInterval(interval);
            end();
        }
    }

    function end() {
        $('#gameover').show();
        $('#wins').show();
        $('#losses').show();
        $('#unanswered').show();
        $('#restart').show();
        $('#gif').hide();
        $('#explanation').hide();
        $('#continue').hide();
        $('#right').hide();
        $('#wrong').hide();
        $('#noanswer').hide();
        $('#gameover').text('Game over! Try harder next time?');
        $('#wins').html('Number of correct: ' + correct);
        $('#losses').html('Number of incorrect: ' + wrong);
        $('#unanswered').html('Number of unanswered: ' + unanswered);
        $('#restart').html(restartGame);
    }

    $('#restart').on('click', function() {
        $('#gameover').hide();
        $('#wins').hide();
        $('#losses').hide();
        $('#unanswered').hide();
        $('#restart').hide();
        $('#start').show();
        clearInterval(interval);
        place = 0;
        correct = 0;
        wrong = 0;
        answered = 0;
        unanswered = 0;
    })

    function timer() {
        if (gameRuns === true) {
            interval = setInterval(decrement, 1000);
        } else {
            return;
        }


    }

    function decrement() {
        if (time > 0) {
            time--;
            $('#timer').html(time);

        } else if (time <= 0) {
            unanswered++;
            $('#noanswer').show();
            explanations();
            console.log(place);
            console.log('Didnt answer question. Unanswer is now: ' + unanswered);
            stop();
        }




    }


});
