var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?';
//0ab899f222a21e4b6dd6fb305ca0989e
//http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=0ab899f222a21e4b6dd6fb305ca0989e
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl =`${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&appid=0ab899f222a21e4b6dd6fb305ca0989e&units=metric`;

        return axios.get(requestUrl).then(function (res)
            {
                if (res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                }else {
                    return res.data.main.temp;
                }
            }
        , function (res) {
            throw new Error(res.data.message);
        });
    }
};