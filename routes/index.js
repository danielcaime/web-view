/**
 * Copyright 2017-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

// ===== MODULES ===============================================================
import express from 'express';

const router = express.Router();

// GET home page for the application
router.get('/', (_, res) => {
  var proxysrv = require('./atgservice/atgserviceproxy');

  var list = '';
  proxysrv.then(data => {
      var temp = JSON.parse(data);
      list = temp.result.productos;

      res.render('./search', {
          producList:list
          });
  });   

  //res.render('./index', {demo: process.env.DEMO, title: 'Seleccione un producto'});
});


export default router;
