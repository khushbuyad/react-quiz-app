import { useEffect, useState } from "react";
import "./Quiz.css";
import { CircularProgress } from "@material-ui/core";
import Question from "../../components/Question/Question";
const Quiz = (questions, score, setScore, setQuestions) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [currQues, questions]);

  //To shuffle options
  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };
  // console.log("mmm" + currQues);
  return (
    <div className="quiz">
      <span className="subtitle">Welcome</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
