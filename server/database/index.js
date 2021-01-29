/***********************************************************/
/****************** POSTGRES CONNECTION ********************/
/***********************************************************/

var pgp = require('pg-promise')(/*options*/);
var pgConfig = 'postgres://localhost:5432/questions_answers';
var db = pgp(pgConfig);

// const { Client, Pool } = require('pg');
// const pgConfig = require('./config.js');

// const client = new Client(pgConfig);
// client.connect();

/***********************************************************/
/************************ QUERIES **************************/
/***********************************************************/

const getQuestionsForProduct = (productId, callback) => {
  db.query('SELECT * FROM questions WHERE product_id = $1', productId)
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error);
    })
};

const getAnswersForQuestion = (questionId, callback) => {
  db.query('SELECT * FROM answers WHERE question_id = $1', questionId)
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error);
    })
};

const addQuestion = (productId, body, asker_name, asker_email, callback) => {
  // Define a new date object when a new question is posted
  let date = new Date();
  let date_written = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
  db.query(`INSERT INTO questions(product_id, body, date_written, asker_name, asker_email, reported, helpful) VALUES (1, 'hello', '${date_written}', 'anon', 'anon@email.com', ${0}, ${0})`)
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error);
    })
};

module.exports = {
  getQuestionsForProduct,
  getAnswersForQuestion,
  addQuestion
  // addAnswer,
  // markQuestionHelpful,
  // reportQuestion,
  // markAnswerHelpful,
  // reportAnswer
}