const nodemailer = require("nodemailer");

async function sendEmail(emailData) {
  console.log("EmailData ====================>", emailData);
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.digitalcoverage.com.pk",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "contact@digitalcoverage.com.pk", // generated ethereal user
        pass: "bBkWWAb=Mh&!", // generated ethereal password
      },
    });
    // email object
    let mailOptions = {
      from: '"Digital Coverage" contact@digitalcoverage.com.pk', // sender address
      to: `${
        // ("userEmail====>", "reflux.mee@gmail.com,hamzanaeemkhan977@gmail.com")
        ("userEmail====>",  `${emailData.userEmail} ,reflux.mee@gmail.com`)
      }`, // list of receivers
      // text: `Hello world?text${emailData.ownerEmail}`, // plain text body
      subject: "Thank You for Contacting Us", // Subject line
      html: `<!DOCTYPE html>
      <html>
      <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
          font-size: 24px;
        }
        p {
          color: #666;
          font-size: 16px;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
      </style>
      </head>
      <body>
        <div style="background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: #fff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px;">
            <h1>Thank You, ${emailData?.userName}!</h1>
            <p>We have received your message and will address your question or feedback shortly. Thank you for your patience.</p>
            <p>If you need further information or have any other questions, please feel free to contact us:</p>
            <ul>
              <li>Email: contact@digitalcoverage.com.pk</li>
              <li>Phone: +1-123-456-7890</li>
            </ul>
            <p>Thank you once again and have a great day!</p>
            <p>Digital Coverage & Technology</p>
          </div>
        </div>
      </body>
      </html>`,
      // html body
    };

    // send mail with defined transport object

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: %s", info.messageId);
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log("error from sendEmail ========>", error);
  }
}

async function sendEmailToAdmin(emailData) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.digitalcoverage.com.pk",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "contact@digitalcoverage.com.pk", // generated ethereal user
        pass: "bBkWWAb=Mh&!", // generated ethereal password
      },
    });
    // email object
    let mailOptions = {
      from: '"Digital Coverage" contact@digitalcoverage.com.pk', // sender address
      to: `${
        ("userEmail====>", "reflux.mee@gmail.com")
        // ("userEmail====>", "reflux.mee@gmail.com,saadsiddiqui@pakistanautomation.com.pk, awaislatif418@gmail.com")
      }`, // list of receivers
      subject: "New Contact Request",
      html: `<!DOCTYPE html>
      <html>
      <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
          font-size: 24px;
        }
        p {
          color: #666;
          font-size: 16px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
      </style>
      </head>
      <body>
        <div style="background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: #fff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px;">
            <h1>New Contact Request</h1>
            <p>You have received a new contact request from the website. Below are the details:</p>
            <ul>
              <li><strong>Name:</strong> ${emailData.userName}</li>
              <li><strong>Email:</strong> ${emailData.userEmail}</li>
              <li><strong>Company Name:</strong> ${emailData.companyName || "-"}</li>
              <li><strong>Contect Number:</strong> ${emailData.contectNumber || "-"}</li>
              <li><strong>Project Type:</strong> ${emailData.projectType || "-"}</li>
              <li><strong>Project Budget:</strong> ${emailData.projectBudget || "-"}</li>
              <li><strong>Message:</strong> ${emailData.message}</li>
            </ul>
            <p>Please respond to the user as soon as possible.</p>
            <p>Thank you!</p>
          </div>
        </div>
      </body>
      </html>`,
      // html body
    };

    // send mail with defined transport object

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: %s", info.messageId);
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log("error from sendEmail ========>", error);
  }
}

async function bookDemoEmail(emailData) {
  try {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "mail.digitalcoverage.com.pk",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: "contact@digitalcoverage.com.pk", // generated ethereal user
        pass: "bBkWWAb=Mh&!", // generated ethereal password
      },
    });
    // email object
    let mailOptions = {
      from: '"Digital Coverage" contact@digitalcoverage.com.pk', // sender address
      to: `${
        ("userEmail====>", "reflux.mee@gmail.com,saadsiddiqui@pakistanautomation.com.pk, info@digitalcoverage.com.pk")
        // ("userEmail====>", "reflux.mee@gmail.com")
        // ("userEmail====>", "reflux.mee@gmail.com,saadsiddiqui@pakistanautomation.com.pk, awaislatif418@gmail.com")
      }`, // list of receivers
      subject: "Book A Demo Request",
      html: `<!DOCTYPE html>
      <html>
      <head>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        h1 {
          color: #333;
          font-size: 24px;
        }
        p {
          color: #666;
          font-size: 16px;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
      </style>
      </head>
      <body>
        <div style="background-color: #f5f5f5; padding: 20px;">
          <div style="background-color: #fff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px;">
            <h1>New "Book A Demo" Request</h1>
            <p>You have received a new "Book A Demo" request from the website. Below are the details:</p>
            <ul>
              <li><strong>First Name:</strong> ${emailData.firstName}</li>
              <li><strong>Last Name:</strong> ${emailData.lastName}</li>
              <li><strong>Business Email:</strong> ${emailData.email || "-"}</li>
              <li><strong>Prefered Time For Demo:</strong> ${emailData.dateAndTime || "-"}</li>
            </ul>
            <p>Thank you!</p>
          </div>
        </div>
      </body>
      </html>`,
      // html body
    };

    // send mail with defined transport object

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Message sent: %s", info.messageId);
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log("error from sendEmail ========>", error);
  }
}

module.exports = {
  sendEmail,
  sendEmailToAdmin,
  bookDemoEmail,
};

// html: `
// <div style="background-color: #f5f5f5; padding: 20px;">
//   <div style="background-color: #fff; border-radius: 5px; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); padding: 20px;">
//     <h1 style="color: #333; font-size: 24px; margin-bottom: 20px;">Hi there!</h1>
//     <p style="color: #666; font-size: 16px; line-height: 1.5;">Thank you for signing up on our website. We are excited to have you on board!</p>
//     <p style="color: #666; font-size: 16px; line-height: 1.5;">If you have any questions or concerns, please don't hesitate to contact us.</p>
//     <p style="color: #666; font-size: 16px; line-height: 1.5;">Best regards,<br>The Website Team</p>
//   </div>
// </div>
// `,
