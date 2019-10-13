const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/6bdd458cf66ebca744d51b76b29c6133/${latitude},${longitude}?units=si&lang=es`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("No se puede acceder al servicio del clima", undefined);
    } else if (response.body.error) {
      callback("No se puede encontrar la ubicacion", undefined);
    } else {
      const text = `${response.body.daily.data[0].summary} La temperatura actual es de ${response.body.currently.temperature} grados. Hay una probabilidad de ${response.body.currently.precipProbability}% de precipitaciones`;
      callback(undefined, text);
    }
  });
};

module.exports = forecast;
