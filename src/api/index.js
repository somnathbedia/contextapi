const baseURL =
  "https://api.weatherapi.com/v1/current.json?key=fbccd77f5ebb4cefbb1152802232209";

export const getWeatherDataForCity = async (city) => {
  const response = await fetch(`${baseURL}&q=${city}&aqi=yes`);

  return response.json();
};
