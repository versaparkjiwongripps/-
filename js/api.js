const getWeatherApi = () => {
  let url = new URL(`api.openweathermap.org/data/2.5/forecast/daily?lat=36.3&lon=81.58&cnt=5&appid=6ec9da1dc53e83616f427f87318b88c2`);
  let header = new Headers({ "x-api-key": `6ec9da1dc53e83616f427f87318b88c2` });

  console.log(url);
};

getWeatherApi();
