async function getCoordFromZip(zipCode) {
    const url = `https://nominatim.openstreetmap.org/search?postalcode=${zipCode}&format=json&countrycodes=us`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.length > 0) {
        const { lat, lon } = data[0];
        return { lat, lon };
      } else {
        console.error('No results found.');
        return null;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  }
  
  export default getCoordFromZip;
  