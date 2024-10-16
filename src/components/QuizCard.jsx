import questionMark from "../assets/images/question-mark.png";

export default function QuizCard({order, children}) {
  return (
    <div className="bg-transparent w-full border-8 border-primary rounded-3xl text-dark leading-6 px-7 py-3 md:px-20 md:py-16 relative mt-7 font-medium text-justify">
    <div className="hidden md:block absolute top-[19%] bottom-[19%] bg-secondary py-2 -left-[10%] mt-0">
      <img
        src={questionMark}
        alt="Question"
        className="h-full w-auto"
      />
    </div>
    <h4 className="text-center font-bold text-3xl md:text-7xl">{order}</h4>
    <p className="font-semibold text-lg text-left md:text-center z-10">
        {children}
    </p>
  </div>
  )
}
