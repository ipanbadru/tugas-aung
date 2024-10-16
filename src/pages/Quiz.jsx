import Navbar from "../components/Navbar";
import LinkPrimary from "../components/LinkPrimary";
import QuizCard from "../components/QuizCard";
import ButtonAnswer from "../components/ButtonAnswer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import dataQuiz from "../lib/data-quiz.json";
import { useSelector } from "react-redux";

export default function Quiz() {
  const answers = useSelector((state) => state.answer);
  const { order } = useParams();

  const currentQuiz = dataQuiz[order];
  const currentAnswer = answers[order];
  return (
    <>
      <Navbar />
      <div className="container pb-5">
        <div className="max-w-3xl mx-auto">
          <h3 className="font-bold text-3xl uppercase text-center my-4">
            Quiz Interaktive
          </h3>
          <QuizCard order={order}>{currentQuiz.question}</QuizCard>
          <div className="grid grid-cols-2 mt-6 gap-y-5 gap-x-5 md:gap-x-10 ">
            <ButtonAnswer value={"a"} text={currentQuiz.choises.a} checked={currentAnswer === "a"} order={order} />
            <ButtonAnswer value={"b"} text={currentQuiz.choises.b} checked={currentAnswer === "b"} order={order} />
            <ButtonAnswer value={"c"} text={currentQuiz.choises.c} checked={currentAnswer === "c"} order={order} />
            <ButtonAnswer value={"d"} text={currentQuiz.choises.d} checked={currentAnswer === "d"} order={order} />
          </div>
        </div>
        <div className={`flex ${order === "1" ? "justify-end" : "justify-between"} mt-10`}>
          {order !== "1" && (
            <LinkPrimary
              to={`/quiz/${parseInt(order) - 1}`}
              className="!text-xl !px-10 inline-flex gap-2 items-center"
            >
              <FaArrowLeft /> BACK
            </LinkPrimary>
          )}

          {order !== "5" ? (
            <LinkPrimary
              to={`/quiz/${parseInt(order) + 1}`}
              className="!text-xl !px-10 inline-flex gap-2 items-center"
            >
              NEXT <FaArrowRight />
            </LinkPrimary>
          ) : (
            <LinkPrimary
              to="/result-quiz"
              className="!text-xl !px-10 inline-flex gap-2 items-center"
            >
              Submit <FaArrowRight />
            </LinkPrimary>
          )}
        </div>
      </div>
    </>
  );
}
