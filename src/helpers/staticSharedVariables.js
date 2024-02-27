const APIURL = () => (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://book-a-car.onrender.com');

export const majorCities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
  'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose',
  'Austin', 'Jacksonville', 'San Francisco', 'Columbus', 'Fort Worth',
  'Indianapolis', 'Charlotte', 'Seattle', 'Denver', 'Washington',
  'Boston', 'El Paso', 'Nashville', 'Detroit', 'Oklahoma City',
  'Portland', 'Las Vegas', 'Memphis', 'Louisville', 'Baltimore',
  'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno', 'Mesa',
  'Sacramento', 'Atlanta', 'Kansas City', 'Colorado Springs', 'Omaha',
  'Raleigh', 'Miami', 'Long Beach', 'Virginia Beach', 'Oakland',
  'Minneapolis', 'Tulsa', 'Arlington', 'Tampa', 'New Orleans',
];

export default APIURL;
