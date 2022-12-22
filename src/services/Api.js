const URLGeo = `https://geocoding-api.open-meteo.com/v1/search?name=`;

const urlFunction = (latitude,longitude,timezone) => {
    return `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`;
} 

export const Request1 = async (city) => {
    const url = `${URLGeo}${city}`;
    const res = await fetch(url);
    return res.json();
}

export const Request2 = async (latitude,longitude,timezone) => {
    const url = urlFunction(latitude,longitude,timezone);
    const res = await fetch(url);
    return res.json();
}


