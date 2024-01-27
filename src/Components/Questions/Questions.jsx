import React from "react";
import Question from "./Question";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Questions.css";

const questions = [
  {
    question: "Do I Have To Allow The Use Of Cookies?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae harum voluptas ipsum maiores provident culpa optio quo nobis itaque, corrupti perspiciatis dolore facilis ipsam illo rem similique accusantium ratione!",
  },
  {
    question: "How Do I Change My My Page Password?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae harum voluptas ipsum maiores provident culpa optio quo nobis itaque, corrupti perspiciatis dolore facilis ipsam illo rem similique accusantium ratione!",
  },
  {
    question: "What Is BankID?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae harum voluptas ipsum maiores provident culpa optio quo nobis itaque, corrupti perspiciatis dolore facilis ipsam illo rem similique accusantium ratione!",
  },
  {
    question: "Whose Birth Number Can I Use?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae harum voluptas ipsum maiores provident culpa optio quo nobis itaque, corrupti perspiciatis dolore facilis ipsam illo rem similique accusantium ratione!",
  },
  {
    question: "When Do I Recieve A Password Ordered By Letter?",
    ans: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae harum voluptas ipsum maiores provident culpa optio quo nobis itaque, corrupti perspiciatis dolore facilis ipsam illo rem similique accusantium ratione!",
  },
];

const Questions = () => {
  return (
    <div className="mainCont">
      <div className="questions">
        <h1 className="text-center">FAQ</h1>
        {questions.map((ques) => {
          return <Question {...ques} />;
        })}
      </div>
    </div>
  );
};
export default Questions;
