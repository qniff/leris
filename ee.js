module.exports = (app) => {
  app.get('/', (req, res) => {
    var about = {
      head: "Meie meeskond",
      head0: "Leris Baltic OÜ",
      p0: "Oleksandr Leonov",
      p1: "Sergei Ryndin",
      p2: "Dmitri Ryndin",
      t0: "+37258503321",
      t1: "+37256705112",
      t2: "+37256888109"
    }

    var header = {
      head: "Leris Baltic",
      head0: "Horisontaalne puurimine kogu Eestis",
      contact: "Võtta meiega ühendust",
      q0: "Millega me tegeleme?",
      q1: "Kes me oleme?",
      q2: "Meie tehnika"
    }

    var nav = {
      what: "Millega tegeleme",
      about: "Kes oleme",
      tech: "Tehnika",
      contact: "Võtta ühendust"
    }

    var tech = {
      head: "Meie tehnika",
      drill: {
        head: "Puurimisseade",
        name: "DitchWitch 3020AT",
        desc: "paneb torujuhtmed läbimõõduga 20mm kuni 350mm kivises mullas, pehmetel alustel 20mm kuni 500mm."
      },
      bus: {
        head: "Bussid",
        name0: "Ford Tranzit t350",
        cap0: "Kandevõime 1.75t",
        vol0: "Maht 2.4m³",
        name1: "Peugeot Expert",
        cap1: "Kandevõime 1t",
        vol1: "Maht 2m³"
      },
      weld: {
        head: "Keevitusseadmed",
        name: "Ritmo 160 ja Ritmo 315",
        desc: "polüetüleentorude keevitamine ühismeetodil läbimõõduga 40mm kuni 315mm."
      }
    }

    var contact = {
      head: "Võtta meiega ühendust",
      phName: "Nimi",
      phCompany: "Firma",
      phMail: "E-post",
      phPhone: "Telefon",
      phMsg: "Sõnum",
      btn: "Saada",
      address: "Kivila 16, 13917 Tallinn",
      phone: "+372 58503321",
      mail: "info@leris.ee",
      copyright: "© 2018 | Leris Baltic OÜ | Kõik õigused kaitstud"
    }

    var what = {
      head: "Horisontaalne puurimine",
      title0: "Mis see on",
      text0 : "Maa-aluse kommunikatsiooniprotseduuri rajamine veetmata meetodiga, mis põhineb spetsiaalsete puurimisplatvormide kasutamisel.",
      title1: "Meeleavaldus",
      text1: "Paremaks arusaamiseks puurimisprotsessist võid tutvuda video näitega, mis primitiivselt vaid näitlikult demonstreerib protsessi."
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