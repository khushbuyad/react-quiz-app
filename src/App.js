import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category) => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=30${
        category && `&category=${category}`
      }&type=multiple`
    );
    console.log("category is: " + category);
    console.log(data);
    setQuestions(data.results);
  };

  return (
    <Router>
      <div className="app" style={{ backgroundImage: "url(./ques.jpg)" }}>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home fetchQuestions={fetchQuestions} />}
          />
          <Route
            exact
            path="/quiz"
            element={
              <Quiz
                questions={questions}
                score={score}
                setScore={setScore}
                setQuestions={setQuestions}
              />
            }
          />
          <Route exact path="/result" element={<Result />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
