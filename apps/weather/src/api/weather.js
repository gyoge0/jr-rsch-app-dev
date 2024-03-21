const TOKEN = process.env.EXPO_PUBLIC_WEATHER_API_TOKEN;
const BASE_URL = process.env.EXPO_PUBLIC_WEATHER_API_BASE_URL;
const GEO_BASE_URL = `${BASE_URL}/geo/1.0`;
const DATA_BASE_URL = `${BASE_URL}/data/2.5`;

export const searchLocation = async (name, limit = 5) => {
    const params = new URLSearchParams({
        q: name,
        limit: 5,
        appid: TOKEN,
    });
    const response = await fetch(`${GEO_BASE_URL}/direct?${params}`);

    if (!response.ok) {
        throw new Error(JSON.stringify(await response.json()))
    }

    return await response.json();
};

export const getWeatherAt = async (location) => {
    const params = new URLSearchParams({
        lat: location.lat,
        lon: location.lon,
        appid: TOKEN,
    });
    const response = await fetch(`${DATA_BASE_URL}/weather?${params}`);

    if (!response.ok) {
        throw new Error(JSON.stringify(await response.json()))
    }

    const json = await response.json();

    const kToF = (k) => Math.round(((k - 273.15) * (9 / 5) + 32) * 10) / 10.0;

    // noinspection JSUnresolvedReference
    return {
        temperature: kToF(json.main.temp),
        feelsLike: kToF(json.main.feels_like),
        minTemperature: kToF(json.main.temp_min),
        maxTemperature: kToF(json.main.temp_max),
        conditions: json.weather.map((condition) => ({
            description: condition.description,
            icon: `https://openweathermap.org/img/wn/${condition.icon}@2x.png`,
            isDay: condition.icon.endsWith("d"),
        })),
        id: json.id,
    };
}

export const searchWeather = async (term) => {
    let locations = await searchLocation(term);

    return await Promise.all(locations.map(getWeatherAt));
};
