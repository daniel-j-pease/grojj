const apiRouter = require('express').Router();
const { getAllItems,
        addNewItem,
        editItem,
        getStorefrontItems
      } = require('../models/items.js');
const { getAllStorefronts,
        addNewStorefront,
        getOneStorefront,
        editOneStorefront,
        removeOneStorefront
      } = require('../models/storefronts.js');

apiRouter.route('/items')
  .get(getAllItems, (req, res) => res.json(res.items))
  .post(getStorefrontItems, (req, res) => res.json(res.storefrontItems))
  .put(editItem, (req,res) => res.json({message: 'item successfully edited'}))

apiRouter.route('/item')
  .post(addNewItem, (req, res) => res.json({message: 'item successfully added'}));

apiRouter.route('/storefronts')
  .get(getAllStorefronts, (req, res) => res.json(res.storefronts))
  .post(removeOneStorefront, (req, res) => res.json({message: 'storefront successfully removed'}))
  .put(editOneStorefront, (req, res) => res.json({message: 'storefront successfully edited'}));

apiRouter.route('/storefront')
  .post(addNewStorefront, (req, res) => res.json({message: 'storefront successfully added'}))

apiRouter.route('/myStorefront')
  .post(getOneStorefront, (req, res) => res.json(res.storefront));

module.exports = apiRouter;
