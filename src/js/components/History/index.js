import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
  return {
    cityInput: store.weather.cityInput,
    history: store.weather.history
  };
}

export default connect(mapStoreToProps)(History);