const express = require("express");

const account = express.Router();

const Suggestion = require("../models/movieSuggestions");

const cors = require("cors");

var whitelist = ['http://localhost:3000']

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
account.post("/createNewAccount", cors(corsOptions), (req, res) => {
  console.log("hit");
  console.log(req.body)
  res.status(200).send({id: 12345});

    // Suggestion.create(req.body, (error, createdMovieSuggestion) => {
    //   if (error) {
    //     res.status(400).json({ error: error.message });
    //   }
    //   res.status(200).send(createdMovieSuggestion);
    //   console.log(createdMovieSuggestion);//  .json() will send proper headers in response so client knows it's json coming back
    // });
});

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