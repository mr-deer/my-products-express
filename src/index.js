import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import List from './models/list';
import Product from './models/product';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(config.db);
mongoose.Promise = Promise;

app.get('/', (req, res) => {
  console.log('get /');
  res.send('Hello world');
});

app.post('/lists', (req, res) => {
  List.create({ name: req.body.name }, function (err, list){
    if(err) {
      console.log(err);
    } else {
      res.send(list.name);
    }
  })
});

app.get('/lists', (req, res) => {
  List.find({}, function (err, lists){
    if(err) {
      console.log(err);
    } else {
      res.json(lists);
    }
  })
});

app.post('/list/:id/products', (req, res) => {
  List.findOne({ _id: req.params.id }, function (err, list) {

    const product = new Product({
      name: req.body.name,
      cost: req.body.cost,
      amount: req.body.amount,
    });

    list.products.push(product);

    list.save(function(err) {
      if(err) return res.send(err);

      product.save(function(err) {
        if(err) return res.send(err);

        res.json(list);
      })
    });
  })
});

app.listen(3000, () => {
  console.log('Server is up');
});