const ContactModel = require("./../database/models/contact_model");


function newResource(req, res){
    res.render("form");
}

//this sends json data
function index(req, res){
    ContactModel.find()
      .then(contacts => {
        res.json(contacts);
      })
      .catch(err => {
        res.status(500).send(err);
      });
}


function create(req, res) {
    // console.log(res.body);
    // res.send();
    let {name, email, enquiry} = req.body; 
    
    ContactModel.create({name, email, enquiry})
      .then(contact => {
        res.render("success");
      })
      .catch(err => {
        res.status(500).send(err);
      });
}

function show(req, res){
        ContactModel.findOne()
          .then(contact => {
            res.json(contact.id);
          })
          .catch(err => {
            res.status(500).send(err);
          });
}


// function remove(req, res){
//     ContactModel.findOne()
//       .then(contact => {
//         res.json(contact.id);
//       })
//       .catch(err => {
//         res.status(500).send(err);
//       });
// }


module.exports = {
    newResource,
    index,
    create,
    show,
}