import fetch from 'cross-fetch';

const API_KEY = 'd325cad0331793fd3da96c94b5161278';
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast';

export const FETCH_WEATHER_RECEIVE = 'fetch_weather_receive';

export function receiveWeather(payload) {
  return {
    type: FETCH_WEATHER_RECEIVE,
    payload,
  };
}

export function fetchWeather(city) {
  return (dispatch, getState) => {
    fetch(`${ROOT_URL}?q=${city},eg&units=metric&appid=${API_KEY}`)
      .then(response => response.json())
      .then(json => dispatch(receiveWeather(json)));
  };
}
