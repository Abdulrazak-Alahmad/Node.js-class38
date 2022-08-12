import { Router } from 'express';
import { API_KEY } from "../sources/keys.js";
import fetch from 'node-fetch';
const router = Router();

// Get method
router.get('/', (req, res) => {
  res.send('hello from backend to frontend!')
})

// Post method
router.post('/weather', async (req, res) => {
  let cityName = req.body.cityName;
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${API_KEY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const data = await response.json();
    res.send({ weatherText: `${cityName} ${data.main.temp}` })
  }
  catch (error) {
    res.status(400).json(`${cityName} is not found!`)
  }
})

export default router