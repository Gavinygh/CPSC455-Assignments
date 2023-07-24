const {storedReceipes} = require('./model');
const { v4: uuid } = require('uuid');

function generateData() {
    const receipe1 = new storedReceipes({
        _id: uuid(),
        name: "poutine",
        ingredients: "fries, cheese, gravy",
        instructions: "Mix cheese and gravy",
        completion_time: "20mins"
    });
    const receipe2 = new storedReceipes({
        _id: uuid(),
        name: "bbb",
        ingredients: "fries, source",
        instructions: "bla bla",
        completion_time: "10mins"
    });
    const receipe3 = new storedReceipes({
        _id: uuid(),
        name: "aaa",
        ingredients: "fries, source",
        instructions: "bla bla",
        completion_time: "5mins"
    });
    
    // Save a sandwich to db
    receipe1.save();
    receipe2.save();
    receipe3.save();
}

module.exports = generateData;