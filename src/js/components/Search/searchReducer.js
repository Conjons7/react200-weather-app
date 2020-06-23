const defaultState = {
    cityInput: '',
    lat: null,
    lon: null,
    temp: '',
    pressure: 0,
    humidity: 0,
    temp_min: '',
    temp_max: '',
    windSpeed: '',
    history: []
  };
  
  export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case 'GET_WEATHER_FULFILLED': {
        let d = new Date();
        return {
          ...state,
          cityData: payload.data,
          cityInput: payload.data.name,
          lat: payload.data.coord.lat,
          lon: payload.data.coord.lon,
          temp: payload.data.main.temp,
          pressure: payload.data.main.pressure,
          humidity: payload.data.main.humidity,
          temp_min: payload.data.main.temp_min,
          temp_max: payload.data.main.temp_max,
          windSpeed: payload.data.wind.speed,
          history: [...state.history, {
            cityInput: payload.data.name,
            date: d.toLocaleString()
          }]
        };
      }
  
      case 'UPDATE_CITY': {
        return {
          ...state,
          city: payload.city,
        };
      }
  
      default: return state;
    }
  }