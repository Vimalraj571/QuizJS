const readLineSync = require("readline-sync");

const quiz = () => {
  const quizQA = {
    questionsList: [
      {
        ques: "What does Jon Snow know?",
        ans: 1,
        ansList: ["1) Everything", "2) Nothing", "3) Stuffs", "4) Secrets"],
      },
      {
        ques: "What is Jon Snow's real first name?",
        ans: 1,
        ansList: ["1) Jon", "2) Aegon", "3) Snow", "4) Ygritte"],
      },
      {
        ques: "How many Direwolves do the Starks adopt?",
        ans: 2,
        ansList: ["1) 4", "2) 5", "3) 6", "4) 7"],
      },
      {
        ques: "What poison killed Joffrey Baratheon?",
        ans: 0,
        ansList: [
          "1) Strangler",
          "2) Cyanide",
          "3) Highgarden Tea",
          "4) Feast",
        ],
      },
      {
        ques: "What is Ned Stark’s sister’s name?",
        ans: 0,
        ansList: ["1) Lyanna Stark", "2) Lianna", "3) Cersei", "4) Leena"],
      },
    ],
  };

  quizQA.questionsList.forEach((question) => {
    console.log(question.ques);
    question.ansList.forEach((answer) => {
      console.log(answer);
    });
    const tempAns = readLineSync.question("Enter Your Answer \n");
    if (question.ans === tempAns - 1) {
      console.log("The Answer is Correct \n");
    } else {
      console.log(`The Correct Answer is ${question.ans + 1}`);
    }
  });
};

quiz();

module.exports = {
  quiz,
};
