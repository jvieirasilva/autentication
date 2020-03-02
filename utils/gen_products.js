var mongoose = require("mongoose");
var faker = require("faker");
var ProductModel = require("../models/ProductModel");

//mongoose.connect('mongodb://localhost:27017/auth_test',   { useNewUrlParser: true });

mongoose.connect('mongodb+srv://jvieirasilva:jv031969@cluster0-sjv12.mongodb.net/test?retryWrites=true&w=majority',   { useNewUrlParser: true });




async function add(n) {
    try {
        var date = new Date(2020, 02, 05, 10, 33, 30, 0);
        for(let i=0;i<n;i++) {
            const p = new ProductModel();
            p.name = faker.commerce.productName(),
            p.department = faker.commerce.department(),
            p.price = faker.commerce.price()
            p.dateAdd = date

            console.log( p.name )
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


