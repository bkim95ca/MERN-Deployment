const PetController = require("../controllers/pet.controllers")

module.exports = app => {
    app.get('/api/pets', PetController.findAllPets);
    app.get('/api/pet/:id', PetController.findOnePet);
    app.post('/api/pet/new', PetController.createPet);
    app.put('/api/pet/:id', PetController.updatePet);
    app.delete('/pet/:id', PetController.deletePet);
}