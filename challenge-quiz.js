(function () {




    var Question = function (question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    };

    Question.prototype.quiz = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(this.answers[i]);
        }
    }

    Question.prototype.isCorrect = function (answer, callback) {
        var sc;
        if (answer == this.correct) {
            console.log('Good job!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again!');
            sc = callback(false);
        }
        
        this.displayScore(sc);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Your current score is ' + score);
        console.log('--------------------');
    }

    var q_1 = new Question('What is the best city on Earth?', ['0. New York', '1. Tokyo', '2. BangKOK'], 2);
    var q_2 = new Question('What is the best food on Earth?', ['0. Pizza', '1. Sushi', '2. Grandma\'s cooking'], 2);
    var q_3 = new Question('Who is the hottest woman on Earth?', ['0. Scarlett Johansson', '1. Your girlfriend', '2. Emily Ratajkowski'], 1);

    var allQuestions = [q_1, q_2, q_3];
    
    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            } 
            return sc;
        }
    }

    var keepScore = score();
    
    function nextQuestion() {

        var questionNumber = Math.floor(Math.random() * 3);

        allQuestions[questionNumber].quiz();

        var answer = prompt('What is the correct answer?');

        if (answer !== 'exit') {
            allQuestions[questionNumber].isCorrect(parseInt(answer), keepScore);
            nextQuestion();
        }
    }

    nextQuestion();




})();
