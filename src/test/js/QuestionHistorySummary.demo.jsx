import QuestionHistorySummary from "../../main/js/QuestionHistorySummary";

export const QuestionHistorySummaryDemo = () => {
  return (
    <QuestionHistorySummary
      questionsHist={{
        idsSeen: ["q1", "q2", "q3", "q4", "q5"],
        respondedTo: ["q1", "q2", "q3"],
        correctFirstTime: ["q1", "q2"],
        incorrect: ["q3"],
        correctAfterIncorrect: ["q4"],
      }}
    />
  );
}
