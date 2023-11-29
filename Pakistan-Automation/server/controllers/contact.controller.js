// const { CREATE } = require("../global/functions/create");
const RESPONSE = require("../global/response/RESPONSE");
const pool = require("../utils/db");
const { sendEmail, sendEmailToAdmin } = require("../utils/email/sendEmail");
const tableName = require("../utils/tableNames");

exports.insertContact = async (req, res) => {
  // console.log("req.body >>>", req.body);
  if (!req.body.userEmail || !req.body.userName || !req.body.message) {
    return res
      .status(404)
      .send(RESPONSE("Please fill the mandatory fields", {}));
  }
  try {
    const payload = {
      tableName: tableName.contact_us,
      fieldsName: {
        userEmail: req.body.userEmail,
        userName: req.body.userName,
        companyName: req.body.companyName || "",
        contectNumber: req.body.contectNumber || "",
        projectType: req.body.projectType || "",
        projectBudget: req.body.projectBudget || "",
        message: req.body.message,
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
            sendEmail(payload.fieldsName)
            sendEmailToAdmin(payload.fieldsName)
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
