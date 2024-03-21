const TOKEN = process.env.EXPO_PUBLIC_WEATHER_API_TOKEN;
const BASE_URL = process.env.EXPO_PUBLIC_WEATHER_API_BASE_URL;
const GEO_BASE_URL = `${BASE_URL}/geo/1.0`;
const DATA_BASE_URL = `${BASE_URL}/data/2.5`;

export const searchZip = async (zip) => {
    const params = new URLSearchParams({
        zip,
        appid: TOKEN,
    });
    const res = await fetch(`${GEO_BASE_URL}/zip?${params}`);

    return await res.json();
};

export const searchWeather = async (term) => {
    let location = await searchZip(term);
    if (location instanceof Array) {
        location = location[0];
    }

    const params = new URLSearchParams({
        lat: location.lat,
        lon: location.lon,
        appid: TOKEN,
    });
    const response = await fetch(`${DATA_BASE_URL}/weather?${params}`);
    const json = await response.json();

    const kToF = (k) => Math.round(((k - 273.15) * (9/5) + 32) * 10) / 10.0;

    // noinspection JSUnresolvedReference
    return {
        temperature: kToF(json.main.temp),
        feelsLike: kToF(json.main.feels_like),
        minTemperature: kToF(json.main.temp_min),
        maxTemperature: kToF(json.main.temp_max),
        cityName: json.name,
        conditions: json.weather.map((condition) => ({
            description: condition.description,
            icon: `https://openweathermap.org/img/wn/${condition.icon}@2x.png`,
        })),
    };
};
