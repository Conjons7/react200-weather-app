import React from 'react';
import Search from './components/Search';
import City from './components/City';
import History from './components/History';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>

        <div className='jumbotron bg-dark text-black'>
          <h1>Weather Application</h1>
          <h4>Always know if you'll need an umbrella!</h4>
        </div>
        
        <div>
          <Search />
        </div>
        
        <div className='row' id='spacing'>
          <div className='col-md-6'>
            <City />
          </div>
          
          <div className='col-md-6' id='spacing'>
            <History />
          </div>
        </div>

      </div>
    );
  }
}