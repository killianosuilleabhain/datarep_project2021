const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Connecting to my own Mongo DB Server
const strConnection = 'mongodb+srv://admin:admin@cluster0.ivkbe.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

main().catch(err => console.log(err));

//Mongoose
async function main() {
  await mongoose.connect(strConnection);
}

const Schema = mongoose.Schema;

var carSchema = new Schema({
    make:String,
    model:String,
    year:String,
    km:String,
    price:String,
    poster:String
});

var CarModel = mongoose.model("car", carSchema);

//Returns the array from database
app.get('/api/cars',(req, res)=>{

    CarModel.find((err, data)=>{
        res.json(data);
    })

})

//Cars ID
app.get('/api/cars/:id', (req,res)=>{
    console.log(req.params.id);

    CarModel.findById(req.params.id, (err,data)=>{
        res.json(data);
    })
})

//Finds cars ID to update the car
app.put('/api/cars/:id', (req,res)=>{
    console.log("Update Car: "+req.params.id);
    console.log(req.body);

    CarModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })

})

//Deleting/Sold cars getting deleted off the system
app.delete('/api/cars/:id',(req,res)=>{
    console.log("Delete Car: "+req.params.id);

    CarModel.findByIdAndDelete(req.params.id,(err,data)=>{
        res.send(data);
    })
})

//How the cars are show below
app.post('/api/cars', (req, res)=>{
    console.log('Cars Recieved!');
    console.log(req.body.make);
    console.log(req.body.model);
    console.log(req.body.year);
    console.log(req.body.km);
    console.log(req.body.price);
    console.log(req.body.poster);

    CarModel.create({
        make:req.body.make,
        model:req.body.model,
        year:req.body.year,
        km:req.body.km,
        price:req.body.price,
        poster:req.body.poster
    })

    res.send('Item Added');
})

//Build foler all into one server
app.get('*', (req,res) =>{
res.sendFile(path.join(__dirname+'/../build/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})