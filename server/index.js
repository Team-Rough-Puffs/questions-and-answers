const express = require('express');
const app = express();
const port = 4040;
// Import query functions
const db = require('./database/index.js');

app.get('/', (req, res) => {
  res.send('This works~');
});

/* GET ALL QUESTIONS FOR A PRODUCT */
// HTTP endpoint: `http://3.21.164.220/qa/questions?product_id=${product_id}`
app.get('/qa/questions', (req, res) => {
  db.getQuestionsForProduct(req.query.product_id, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
});

/* GET ALL ANSWERS FOR A QUESTION */
// HTTP endpoint: `http://3.21.164.220/qa/questions/${question_id}/answers`
app.get("/qa/questions/:question_id/answers", (req, res) => {
  db.getAnswersForQuestion(req.params.question_id, (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
});

/* POST A NEW QUESTION */
// HTTP endpoint: `http://3.21.164.220/qa/questions?product_id=${product_id}`
app.post("/qa/questions", (req, res) => {
  db.addQuestion(
    req.params.product_id,
    req.params.body,
    req.params.name,
    req.params.email,
    (error, data) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send(data);
    }
  })
});

/* POST A NEW ANSWER FOR A QUESTION */
// HTTP endpoint: `http://3.21.164.220/qa/questions/${question_id}/answers`
app.post("/qa/questions/:question_id/answers", (req, res) => {
  db.addAnswer(req.params.question_id, req.params.body, req.params.name, req.params.email, req.params.photos, (error, data) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send(data);
    }
  });
});

/* UPDATE QUESTION AS HELPFUL */
// HTTP endpoint: `http://3.21.164.220/qa/questions/${question_id}/helpful`
app.put("/qa/questions/:question_id/helpful", (req, res) => {
  db.markQuestionHelpful(req.params.question_id, (error, data) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

/* UPDATE QUESTION AS REPORTED */
// HTTP endpoint: `http://3.21.164.220/qa/questions/${question_id}/helpful`
app.put("/qa/questions/:question_id/report", () => {
  db.reportQuestion(req.params.question_id, (error, data) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

/* UPDATE ANSWER AS HELPFUL */
// HTTP endpoint: `http://3.21.164.220/qa/answers/${answer_id}/helpful`
app.put("/qa/answers/:answer_id/helpful", () => {
  db.markAnswerHelpful(req.params.answer_id, (error, data) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

/* UPDATE ANSWER AS REPORTED */
// HTTP endpoint: `http://3.21.164.220/qa/questions/${answer_id}/report`
app.put("/qa/answers/:answer_id/report", () => {
  db.reportAnswer(req.params.answer_id, (error, data) => {
    if (error) {
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
});

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});