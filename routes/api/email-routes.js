const router = require('express').Router();
const nodemailer = require("nodemailer");

const mailer = async ({body}, res) => {

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", 
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "jasonwesleysmith82@gmail.com", // generated ethereal user
      pass: process.env.PASSWORD, // generated ethereal password
    },
  });
  
  try {
    let info = await transporter.sendMail({
      from: 'jasonwesleysmith82@gmail.com', // sender address
      to: 'jasonwesleysmith82@gmail.com', // list of receivers
      subject: `Email from ${body.senderName}`, // Subject line
      text:`${body.senderEmail}
      ${body.text}`, // plain text body
  // html body
    });  
    return res.json(info) 
} catch(e){
    console.log(e)
   return res.status(400).json(e)
}
  
}

router.route('/send').post(mailer)

module.exports = router
  