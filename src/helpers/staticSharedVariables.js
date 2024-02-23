const APIURL = () => (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://book-a-car.onrender.com');

export default APIURL;
