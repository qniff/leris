module.exports = (app) => {
  app.get('/en', (req, res) => {
    var about = {
      head: "Our team",
      head0: "Leris Baltic OÜ",
      p0: "Oleksandr Leonov",
      p1: "Sergei",
      p2: "Dmitri",
      t0: "+37258503321",
      t1: "+37256705112",
      t2: "+37256888109"
    }

    var header = {
      head: "Leris Baltic",
      head0: "Horizontal drilling all around Estonia",
      contact: "Contact us",
      q0: "What do we do?",
      q1: "Who are we?",
      q2: "Our tech"
    }

    var nav = {
      what: "What",
      about: "Who",
      tech: "Tech",
      contact: "Contact"
    }

    var tech = {
      head: "Our tech",
      drill: {
        head: "Drilling rig",
        name: "DitchWitch 3020AT",
        desc: "lays pipelines with a diameter from 20mm to 350mm in rocky soil and from 20mm to 500mm in soft grounds."
      },
      bus: {
        head: "Buses",
        name0: "Ford Tranzit t350",
        cap0: "Load capacity 1.75т",
        vol0: "Volume 2.4m³",
        name1: "Peugeot Expert",
        cap1: "Load capacity 1t",
        vol1: "Volume 2m³"
      },
      weld: {
        head: "Welding machines",
        name: "Ritmo 160 and Ritmo 315",
        desc: "welding of polyethylene pipes by the joint method with a diameter from 40mm to 315mm."
      }
    }

    var contact = {
      head: "Contact us",
      phName: "Name",
      phCompany: "Company",
      phMail: "E-mail",
      phPhone: "Phone",
      phMsg: "Message",
      btn: "Send",
      address: "Kivila 16, 13917 Tallinn",
      phone: "+372 58503321",
      mail: "info@leris.ee",
      copyright: "© 2018 | Leris Baltic OÜ | All rights reserved"
    }

    var what = {
      head: "Horizontal drilling",
      title0: "What is it",
      text0 : "Trenchless method of installing underground pipe, conduit, or cables in a relatively shallow arc or radius along a prescribed underground bore path by using a surface-launched drilling rig.",
      title1: "Visual demonstration",
      text1: "For better understaning you can take a look at the following video, which demonstrates drilling process in a simplified way."
    }

    res.render('index', {
      header: header,
      nav: nav,
      tech: tech,
      about: about,
      what: what,
      contact: contact
    })
  })
}