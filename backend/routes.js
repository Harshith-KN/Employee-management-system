const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const Employee = require('./employee.js');

//GET SINGLE EMPLOYEE
router.get('/:id', (req,res) => {
  const id = req.params.id;
  if(ObjectId.isValid(id))
  {
    Employee.findById(req.params.id, (err,doc) => {
      if(err){
        console.log('Error in GET Employee by ID '+err);
      }else{
        res.send(doc);
      }
    })
  }
  else{
    return res.status(400).send(`No record found with ID ${req.params.id}`)
  }
})

//GET API
router.get('/', (req,res) => {
  Employee.find((err, doc) => {
    if(err)
    {
      console.log('Error in GET data'+err);
    }
    else{
      res.send(doc);
    }
  })
})

//POST API
router.post('/', (req,res) => {
  let emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    dept: req.body.dept
  });

  emp.save((err, doc) => {
    if(err){
      console.log('Error in POST data'+err);
    }
    else{
      res.send(doc);
    }
  })
})

//PUT API
router.put('/:id', (req,res) => {
  const id = req.params.id;
  if(ObjectId.isValid(id))
  {
    let emp ={
      name: req.body.name,
      position : req.body.position,
      dept : req.body.dept
    }

    Employee.findByIdAndUpdate(req.params.id, {$set:emp}, {new:true}, (err,doc) => {
      if(err){
        console.log('Error in UPDATE Employee by ID '+err);
      }else{
        res.send(doc);
      }
    })
  }
  else{
    return res.status(400).send(`No record found with ID ${req.params.id}`)
  }
})

//DELETE SINGLE EMPLOYEE
router.delete('/:id', (req,res) => {
  const id = req.params.id;
  if(ObjectId.isValid(id))
  {
    Employee.findByIdAndRemove(req.params.id, (err,doc) => {
      if(err){
        console.log('Error in DELETE Employee by ID '+err);
      }else{
        res.send(doc);
      }
    })
  }
  else{
    return res.status(400).send(`No record found with ID ${req.params.id}`)
  }
})

module.exports = router;
