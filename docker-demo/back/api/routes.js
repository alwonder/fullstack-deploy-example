const express = require('express');
const pool = require('./db');
const router = express.Router();

router.get('/time', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ time: result.rows[0].now })
  } catch (err) {
    console.error(err);
    res.status(500).send('Error');
  }
})

module.exports = router;
