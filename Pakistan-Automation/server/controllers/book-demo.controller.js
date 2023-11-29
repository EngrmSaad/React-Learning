// const { CREATE } = require("../global/functions/create");
const RESPONSE = require("../global/response/RESPONSE");
const pool = require("../utils/db");
const { bookDemoEmail } = require("../utils/email/sendEmail");
const tableName = require("../utils/tableNames");

exports.insertBookDemo = async (req, res) => {
  console.log("req.body >>>", req.body);
  if (!req.body.firstName || !req.body.lastName || !req.body.email || !req.body.dateAndTime) {
    return res
      .status(404)
      .send(RESPONSE("Please fill the mandatory fields", {}));
  }
  try {
    const payload = {
      tableName: tableName.book_demo,
      fieldsName: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        dateAndTime: req.body.dateAndTime,
      },
    };
    // await CREATE(payload, res);
    pool.getConnection(async (err, connection) => {
      if (err) {
        console.log("database error", err);
        res.status(500).send(RESPONSE("database error", {}));
        throw err;
      }
      connection.query(
        `INSERT INTO ${payload.tableName} SET ?`,
        payload.fieldsName,
        (err, result) => {
          connection.release();
          if (err) {
            console.log("error from query", err);
            return res.status(400).send(RESPONSE("error while inserting", {}));
          } else {
            bookDemoEmail(payload.fieldsName)
            return res
              .status(200)
              .send(RESPONSE("succesfully Inserted", result));
          }
        }
      );
    });
  } catch (err) {
    return res.status(500).send(RESPONSE(err.message, {}));
  }
};
