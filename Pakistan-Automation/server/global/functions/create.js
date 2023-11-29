const pool = require("../../utils/db");
const RESPONSE = require("../response/RESPONSE");

exports.CREATE = (payload, res) => {
  try {
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
            return res
              .status(200)
              .send(RESPONSE("succesfully Inserted", result));
          }
        }
      );
    });
  } catch (err) {
    return res.status(500).send(RESPONSE(err.message, err));
  }
};
