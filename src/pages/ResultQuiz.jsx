import Navbar from "../components/Navbar";
import img1 from "../assets/images/illustration-1.png";
import img2 from "../assets/images/illustration-2.png";
import LinkPrimary from "../components/LinkPrimary";
import { useDispatch, useSelector } from "react-redux";
import { resetAnswer } from "../store/answerSlice";
import { useMemo } from "react";

export default function ResultQuiz() {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.answer);
  const score = useMemo(() => getScore(answers), []);
  setTimeout(() => {
    dispatch(resetAnswer());
  }, 1000);
  return (
    <>
      <Navbar />
      <div className="container pb-5">
        <div className="mt-10 flex justify-center gap-10">
          <img src={img1} className="h-72" alt="" />
          <div className="font-bold text-4xl leading-loose text-center">
            <h3 className="">Hasil Quiz</h3>
            <p>Jawaban Benar</p>
            <p>{score}/5</p>
          </div>
          <img src={img2} className="h-72" alt="" />
        </div>
        <div className="flex justify-center mt-12 gap-10">
          <LinkPrimary to={"/quiz/1"} className="!rounded-full !text-lg">
            Bermain Lagi
          </LinkPrimary>
          <LinkPrimary
            to={"/"}
            className="!rounded-full !text-lg border-primary border-4 !text-dark !bg-transparent !font-bold"
          >
            Kembali ke Beranda
          </LinkPrimary>
        </div>
      </div>
    </>
  );
}

function getScore(answers) {
  let score = 0;
  const rightAnswers = {
    1: "b",
    2: "b",
    3: "c",
    4: "b",
    5: "c",
  };
  for (const key in answers) {
    console.log(answers[key], rightAnswers[key]);
    if (answers[key] == rightAnswers[key]) {
      score++;
    }
  }
  return score;
}
