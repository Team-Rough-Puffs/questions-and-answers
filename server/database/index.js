/***********************************************************/
/****************** POSTGRES CONNECTION ********************/
/***********************************************************/

// pg-promise
// var pgp = require('pg-promise')(/*options*/);
// var pgConfig = 'postgres://localhost:5432/questions_answers';
// var db = pgp(pgConfig);

// Difference between Client vs. Pool?
// Client ==> one static connection
// Pool ==> manages dynamic list of Client objects
// (use if you expect to have multiple concurrent requests)

const { Client, Pool } = require('pg');
const pgConfig = require('./config.js');

const client = new Client(pgConfig);
client.connect();

/***********************************************************/
/************************ QUERIES **************************/
/***********************************************************/

const getQuestionsForProduct = (productId, callback) => {
  client.query(`SELECT * FROM questions WHERE product_id = ${productId}`)
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      callback(error);
    })
};

const getAnswersForQuestion = (id, callback) => {
  client.query(`SELECT * FROM answers WHERE question_id = ${id}`)
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      callback(error);
    })
};

module.exports = {
  getQuestionsForProduct,
  getAnswersForQuestion
  // addQuestion,
  // addAnswer,
  // markQuestionHelpful,
  // reportQuestion,
  // markAnswerHelpful,
  // reportAnswer
}