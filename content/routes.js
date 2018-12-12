var nodeMailer = require('nodemailer')
var directTransport = require('nodemailer-direct-transport')
var fs = require('fs')

module.exports = (app) => {

  app.post('/mail', (req, res) => {
    let formMessage = (name, company, email, phone, msg) => {
      tor = "Имя: " + name + "\n"; 
      tor = tor + "Фирма: " + company + "\n"; 
      tor = tor + "Почта: " + email + "\n"; 
      tor = tor + "Телефон: " + phone + "\n"; 
      tor = tor + "Сообщение: " + msg + "\n";
      return tor;
    }

    let transporter = nodeMailer.createTransport({
      host: 'localhost',
      port: 25,
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    })
    
    let mailOptions = {
      from: 'info@leris.ee', 
      to: 'info@leris.ee',
      subject: 'Сообщение с веб-сайта',
      text: formMessage(req.body.name, req.body.company, req.body.email, req.body.phone, req.body.msg)
    }

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        return console.log(error)      
      }
      console.log('Message %s sent: %s', info.messageId, info.response)
      res.redirect('/')
    })
  })
}