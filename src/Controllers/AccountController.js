const express = require("express");
const account = express.Router();
const cors = require("cors");

const AccountData = require("../Data/Account");

var corsOptions = {
  origin: 'http://localhost:3000'
  // function (origin, callback) {
  //   if (whitelist.indexOf(origin) !== -1) {
  //     callback(null, true)
  //   } else {
  //     callback(new Error('Not allowed by CORS'))
  //   }
  // }
};

//create a new movie
account.post("/createNewAccount", cors(corsOptions), async (req, res) => {
  

  const exists = await AccountData.CheckIfUserExits(req.body)

  //new account will return exists = false
  // if it exists, error will be thrown 
  console.log(exists);

    if (exists) {
      console.log("Error");
      let msg = {Msg: "Error: Duplicate Account"}
      res.status(200).send(msg);
    } else {
      console.log("new account");
      AccountData.CreateNewAccount(req.body);
      let msg = {Msg: "Success"}
      res.status(200).send(msg); 
    }
});

account.get("/authUser/:name/:password", cors(corsOptions), async (req, res) => {
 
  const { name } = req.params;
  const { password } = req.params;

  console.log(name);
  console.log(password);

  const isAuthorized = await AccountData.AuthorizeUser(name, password);

  console.log(isAuthorized);

  if (isAuthorized) {
    res.status(200).send({Msg: "Authorized"})
  } else {
    res.status(200).send({Msg: "Denied"})
  }

  

})
//get all movies

// account.get("/findAll", cors(corsOptions), async (req, res) => {
//     Suggestion.find().then(data => {
//     res.send(data);
//   })
//   .catch(err => {
//     res.status(400).send({
//       message: err.message || "Error Occured"
//     });
//   });
// });

// //find a movie by its name
// account.get('/findOne/:id', cors(corsOptions), (req, res) => {
//   Suggestion.findById(req.params.id, (err, data) => {
//     if (err) {
//       res.status(400).json({ error: error.message});
//     } else {
//       res.send(data);
//     }
//   });
// });

// //deletes a movie by its name
// account.delete("/delete/:id", cors(corsOptions), (req, res) => {;
//   Suggestion.remove(req.params.id, (err, data) => {
//     if (err) {
//       res.status(400).json({ error: error.message});
//     } else {
//       res.send(data);
//     }
//   });
// });

// //deletes all suggestions
// account.delete("/deleteAll", cors(corsOptions), (req, res) => {
//     console.log("Delete All Called")
//     Suggestion.deleteMany({}, (err, data) => {
//       if (err) {
//         res.status(400).json({ error: error.message});
//       } else {
//         res.send(data);
//       }
//     });
//   });

// //updates the movie votes, increments it by 1
// //needs to return one suggestion
// account.put("/updateVotes/:id", cors(corsOptions), async (req, res) => {
//     Suggestion.findById(req.params.id, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         data.votes = data.votes + 1

//         data.save((err) => {
//             if (err) {
//               res.status(400).json({ error: error.message});
//             } else {
//               res.send(data);
//             }
//         });
//     }
//   });
// });
  

// //updates the movie votes, increments it by 1
// account.put("/updateVetos/:id", cors(corsOptions), async (req, res) => {
//     Suggestion.findById(req.params.id, (err, data) => {
//     if (err) {
//         console.log(err)
//     } else {
//         data.vetos = data.vetos + 1

//         data.save((err) => {
//             if (err) {
//               res.status(400).json({ error: error.message});
//             } else {
//               res.send(data);
//             }
//         });
//     }
//   });
// });



module.exports = account;