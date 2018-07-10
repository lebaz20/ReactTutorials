import React from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import Map from '../components/map';

const WeatherList = ({ weather }) => {
  const renderWeather = (cityData) => {
    if (!cityData.city) {
      return null;
    }
    const name = cityData.city.name;
    const { lon, lat } = cityData.city.coord;
    const getChartData = dataType => cityData.list.map(weather => weather.main[dataType]);
    return (
      <tr key={name}>
        <td>
          <Map lon={lon} lat={lat} name={name} />
        </td>
        <td>
          <Chart data={getChartData('temp')} color="orange" units="C" />
        </td>
        <td>
          <Chart data={getChartData('pressure')} color="green" units="hPa" />
        </td>
        <td>
          <Chart data={getChartData('humidity')} color="black" units="%" />
        </td>
      </tr>
    );
  };

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>
City
          </th>
          <th>
Temperature (C)
          </th>
          <th>
Pressure (hPa)
          </th>
          <th>
Humidity (%)
          </th>
        </tr>
      </thead>
      <tbody>
        {weather.map(renderWeather)}
      </tbody>
    </table>
  );
};
function mapStateToProps({ weather }) {
  return { weather };
}
export default connect(mapStateToProps)(WeatherList);
