// utils/getLatLon.js
import getCurrentLocation from './getCurrentLocation';
import getStationInfo from './GetStationInfo';

const getLatLon = async () => {
  try {
    const location = await getCurrentLocation();
    if (!location) {
      console.error('Location information is unavailable.');
      return null;
    }

    const { latitude, longitude } = location;
    const stationInfo = await getStationInfo(latitude, longitude);

    return stationInfo;
  } catch (error) {
    console.error('Error in getLatLon:', error);
    return null;
  }
};

export default getLatLon;
