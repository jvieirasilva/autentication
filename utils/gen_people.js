var mongoose = require("mongoose");
var faker = require("faker");
var PersonModel = require("../models/PersonModel");

//mongoose.connect('mongodb://localhost:27017/auth_test',    { useNewUrlParser: true });

mongoose.connect('mongodb+srv://jvieirasilva:jv031969@cluster0-sjv12.mongodb.net/test?retryWrites=true&w=majority',   { useNewUrlParser: true });

    

async function add(n) {
    try {
        for(let i=0;i<n;i++) {
            const p = new PersonModel();
            p.name = faker.name.firstName();
            p.country = faker.address.country();
            p.email = faker.internet.email();
            p.company = faker.company.companyName();
            //console.log(p.name+'-'+p.country +'-'+ p.email+'  -  '+i)
            await p.save();
        }
    }
    catch(err) {
        console.log(err);
    }
}

add(100)
    .then(()=>{
        console.log("OK");
        mongoose.disconnect();
    })