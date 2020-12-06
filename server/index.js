const express = require("express");
const app = express();
const port = 4040;

/* GET ALL QUESTIONS */
app.get("/qa/questions", (req, res) => {

});

/* GET ALL ANSWERS FOR A QUESTION */
app.get("/qa/questions/:question_id/answers", (req, res) => {

});

/* POST A NEW QUESTION */
app.post("/qa/questions", (req, res) => {

});

/* POST A NEW ANSWER FOR A QUESTION */
app.post("/qa/questions/:question_id/answers", (req, res) => {

});

/* UPDATE QUESTION AS HELPFUL */
app.put("/qa/questions/:question_id/helpful", (req, res) => {

});

/* UPDATE QUESTION AS REPORTED */
app.put("/qa/questions/:question_id/report", () => {

});

/* UPDATE ANSWER AS HELPFUL */
app.put("/qa/question/:answer_id/helpful", () => {

});

/* UPDATE ANSWER AS REPORTED */
app.put("/qa/questions/:answer_id/report", () => {

});

app.listen(port, () => {
  console.log(`Listening at PORT:${port}`);
});