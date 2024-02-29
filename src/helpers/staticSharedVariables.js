const APIURL = () => (process.env.NODE_ENV === 'development' ? 'http://localhost:3001/api/v1' : 'https://bookcar-gvqw.onrender.com/api/v1');

export const majorCities = [
  // This list is created with help of AI
  // for ref check https://en.wikipedia.org/wiki/List_of_largest_cities
  'Tokyo, Japan', 'Delhi, India', 'Shanghai, China', 'Sao Paulo, Brazil', 'Mumbai, India',
  'Beijing, China', 'Cairo, Egypt', 'Dhaka, Bangladesh', 'Mexico City, Mexico', 'Osaka, Japan',
  'Karachi, Pakistan', 'Chongqing, China', 'Istanbul, Turkey', 'Buenos Aires, Argentina', 'Kolkata, India',
  'Lagos, Nigeria', 'Rio de Janeiro, Brazil', 'Tianjin, China', 'Kinshasa, Democratic Republic of the Congo', 'Guangzhou, China',
  'Los Angeles, United States', 'Moscow, Russia', 'Shenzhen, China', 'Lahore, Pakistan', 'Bangalore, India',
  'New York, United States', 'Bangkok, Thailand', 'Chennai, India', 'Kolkata, India', 'Lima, Peru',
  'London, United Kingdom', 'Bogota, Colombia', 'Ho Chi Minh City, Vietnam', 'Hong Kong, China', 'Bangalore, India',
  'Bangkok, Thailand', 'Cairo, Egypt', 'New York, United States', 'Beijing, China', 'Hyderabad, India',
  'Lahore, Pakistan', 'Chennai, India', 'Jakarta, Indonesia', 'Dongguan, China', 'Seoul, South Korea',
  'Sao Paulo, Brazil', 'Mexico City, Mexico', 'Guangzhou, China', 'Wuhan, China', 'Hangzhou, China',
  'Chengdu, China', 'Shijiazhuang, China', 'Kuala Lumpur, Malaysia', 'Quanzhou, China', 'Kinshasa, Democratic Republic of the Congo',
  'Alexandria, Egypt', 'Nanjing, China', 'Tehran, Iran', 'Shenyang, China', 'Ahmedabad, India',
  'Bogota, Colombia', 'Hong Kong, China', 'Baghdad, Iraq', 'Jinan, China', 'Houston, United States',
  'Riyadh, Saudi Arabia', 'Singapore, Singapore', 'Santiago, Chile', 'Dallas, United States', 'Guadalajara, Mexico',
  'Johannesburg, South Africa', 'Izmir, Turkey', 'San Francisco, United States', 'Ankara, Turkey', 'Merida, Mexico',
  'Berlin, Germany', 'Sydney, Australia', 'Monterrey, Mexico', 'Minsk, Belarus', 'Madrid, Spain',
  'Rome, Italy', 'Hanoi, Vietnam', 'Pune, India', 'Riyadh, Saudi Arabia', 'Kanpur, India',
];

export default APIURL;
