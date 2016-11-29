const db = require('../lib/db');

function getAllItems(req, res, next) {
  db.many('SELECT * FROM grojjItems')
    .then((items) => {
      res.items = items;
      next();
    })
  .catch((error) => console.log(error));
};

function addNewItem(req, res, next) {
  db.none('INSERT INTO grojjItems (name, image_url, condition, price, description, likes, currentUser, currentStorefront) VALUES ($/name/, $/image_url/, $/condition/, $/price/, $/description/, $/likes/, $/currentUser/, $/currentStorefront/);', req.body)
    .then(() => {
      next()
  })
  .catch((error) => console.log(error));
};

function getStorefrontItems(req, res, next) {
  db.many('SELECT * FROM grojjItems WHERE grojjItems.currentStorefront = $/currentStorefront/;', req.body)
    .then((storefrontItems) => {
      res.storefrontItems = storefrontItems;
      next();
    })
    .catch(error => console.log(error))
}

function editItem(req, res, next) {
  console.log(req.body)
  db.none('UPDATE grojjItems SET name = $/name/, image_url = $/image_url/, condition = $/condition/, price = $/price/, description = $/description/, likes = $/likes/, currentUser = $/currentUser/, currentStorefront = $/currentStorefront/;', req.body)
    .then(() => {
    next();
  })
  .catch(error => console.log(error))
}

module.exports = {
  getAllItems,
  addNewItem,
  getStorefrontItems,
  editItem
};
