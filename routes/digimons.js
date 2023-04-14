var express = require('express');
var router = express.Router();
const fs = require('fs');
const { type } = require('os');

const DIGI_FILE = './data/digimon.json';

/* GET home page. */
router.get('/', function (req, res, next) {
  fs.readFile(DIGI_FILE, 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('There was a problem reading the file.')
      return;
    }
    res.json(JSON.parse(data));
  })
});

//get a monster by its ID
router.get('/:id', (req, res) => {
  fs.readFile(DIGI_FILE, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('There was a problem reading the file.')
      return;
    }
    const monsters = JSON.parse(data)
    const monster = monsters.find(monster => monster.id === req.params.id)
    console.log(monster);
    console.log(req.params);
    if(!monster) {
      res.status(404).send('Monster not found')
      return;
    }
res.json(monster)
  })
})

  //POST a new basket
  router.post('/', (req, res) => {
    res.send('DIGIMON..digital monsters..your digimon has been uploaded')
    fs.readFile(DIGI_FILE, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('There was a problem reading the file.')
        return;
      }
      const monsters = JSON.parse(data);
      //create a new basket with the data from the request

      const newMonster = {
        id: (monsters.length + 1).toString(),
        name: req.body.name,
        type: req.body.type,
        level: req.body.level,
        attribute: req.body.attribute,
        image: req.body.image
      };

      monsters.push(newMonster);
      //replace the contents of baskets json file with the new array
      fs.writeFile(DIGI_FILE, JSON.stringify(monsters), err => {
        if (err) {
          console.error(err);
          res.status(500).send('There was a problem writing to the file.')
          return;
        }
        res.json(newMonster)
      })
    })
  })

    module.exports = router;
