import QuestionHistorySummary from "../../main/js/QuestionHistorySummary";

export const QuestionHistorySummaryDemo = () => {
  return (
    <QuestionHistorySummary
      questionsHist={{
        questionIdsSeen: ["q1", "q2", "q3", "q4", "q5"],
        questionIdsRespondedTo: ["q1", "q2", "q3", "q4"],
        questionIdsCorrectFirstTime: ["q1", "q2"],
        questionIdsIncorrect: ["q3"],
        questionIdsCorrectAfterIncorrect: ["q4"],
      }}
    />
  );
}
