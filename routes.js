var nodeMailer = require('nodemailer')

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.render('index')
  })

  app.post('/mail', (req, res) => {
    let formMessage = (name, company, email, phone, msg) => {
      tor = "Name: " + name + "\n"; 
      tor = tor + "Company: " + company + "\n"; 
      tor = tor + "E-mail: " + email + "\n"; 
      tor = tor + "Phone number: " + phone + "\n"; 
      tor = tor + "Message: " + msg + "\n";
      return tor;
    }
    let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'sh0us1ek@gmail.com',
        pass: 'Parol4497685425newone0'
      }
    })
    let mailOptions = {
      from: req.body.name + ' ' + req.body.email,
      to: 'sh0us1ek@gmail.com',
      subject: 'Mail from the website',
      text: formMessage(req.body.name, req.body.phone, req.body.email, req.body.msg, req.body.company)
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