import React from 'react';

export default class History extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    return (
      <div className='card'>
        <h5 className='card-header text-primary bg-info'>Search History</h5>
        <div className='card-body'>
          <ul className='list-unstyled'>
            { history.map((histories, index) => (
              <li key={ index }>
                <p>{ histories.cityInput } - { histories.date }</p>
              </li>
              )
            )}
          </ul>
        </div>
      </div>
    );
  }
}