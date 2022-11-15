const PetController = require("../controllers/pet.controllers")

module.exports = app => {
    app.get('/pets', PetController.findAllPets);
    app.get('/pet/:id', PetController.findOnePet);
    app.post('/pet/new', PetController.createPet);
    app.put('/pet/:id', PetController.updatePet);
    app.delete('/pet/:id', PetController.deletePet);
}