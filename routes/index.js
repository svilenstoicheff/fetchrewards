var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

/* GET home page. */
router.get('/', function(req, res, next) {
  let filteredData;

  fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json')
    .then(res => res.json())
    .then(json => { 
      filteredData = json.filter(item => item.name !== '' && item.name !== null);
      
      const list1 = filteredData.filter(item => item.listId === 1).sort((a,b) => a.id - b.id);
      const list2 = filteredData.filter(item => item.listId === 2).sort((a,b) => a.id - b.id);
      const list3 = filteredData.filter(item => item.listId === 3).sort((a,b) => a.id - b.id);
      const list4 = filteredData.filter(item => item.listId === 4).sort((a,b) => a.id - b.id);
      
      res.render('index', { title: 'Product List', list1: list1, list2: list2, list3: list3, list4: list4 });
    });
});

module.exports = router;
