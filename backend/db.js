const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://admin:admin@cluster0.lh4w4.mongodb.net/employeeDatabase?retryWrites=true&w=majority', err => {
  if(!err)
  {
    console.log("DATABASE CONNECTION SUCCESSFUL");
  }
  else {
    console.log("Error in Connection" + err);
  }
})

module.exports = mongoose;
