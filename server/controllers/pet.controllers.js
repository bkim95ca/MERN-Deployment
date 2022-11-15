const Pet = require("../models/pet.models")

//READ ALL
module.exports.findAllPets = (req, res) => {
    Pet.find()
        .then((allPets) => {
            res.json(allPets)
        })
        .catch(err => res.json({ message: 'Something went wrong with finding all PMs', error: err}));
}

//FIND ONE 
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params.id})
    .then(onePet => res.json(onePet))
    .catch(err => res.json({ message: 'Something went wrong with finding one by id', error: err}))
}

//CREATE
module.exports.createPet = (req, res) => {
    console.log(req.body)
    Pet.create(req.body)
    .then(newPet => res.json(newPet))
    .catch(err => res.status(400).json(err))
}

//UPDATE
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
    .then(updatedPet => res.json(updatedPet))
    .catch(err => res.status(400).json(err))
}

//DELETE
module.exports.deletePet = (req, res) => {
    Pet.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: 'Something went wrong with deletion', error: err}))
}