const express = require("express");
const router = express.Router();
const ContactController = require("./controllers/contact_controller");

const contacts = [];

//routes
router.get("/", ContactController.newResource);

router.get("/contacts", ContactController.index);

router.post("/contacts", ContactController.create);

router.get("/contacts/:id", ContactController.show);

// router.post("/contacts/:id/delete", ContactController.remove);
router.delete('/contacts/delete/:id', (req, res, next) => {
    let id = ObjectID(req.params.id);

    dbase.collection('contacts').deleteOne(id, (err, result) => {
      if(err) {
        throw err;
      }

      res.send('enquiry deleted');
    });
 });

module.exports = router;