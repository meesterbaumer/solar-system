const planets = [{
  name: 'Mercury',
  imageUrl: 'src/javascripts/helpers/data/img/mercury.png',
  description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earths Moon.',
  isGasPlanet: 'false',
  numberOfMoons: '0',
  nameOfLargestMoon: 'n/a',
},
{
  name: 'Venus',
  imageUrl: 'src/javascripts/helpers/data/img/mercury.png',
  description: 'Second planet from the Sun and our closest planetary neighbor, Venus is similar in structure and size to Earth',
  isGasPlanet: 'false',
  numberOfMoons: '0',
  nameOfLargestMoon: 'n/a',
},
{
  name: 'Earth',
  imageUrl: 'src/javascripts/helpers/data/img/earth.png',
  description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.',
  isGasPlanet: 'false',
  numberOfMoons: '1',
  nameOfLargestMoon: 'The Moon',
},
{
  name: 'Mars',
  imageUrl: 'src/javascripts/helpers/data/img/mars.png',
  description: 'The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.',
  isGasPlanet: 'false',
  numberOfMoons: '2',
  nameOfLargestMoon: 'Phobos',
},
{
  name: 'Jupiter',
  imageUrl: 'src/javascripts/helpers/data/img/jupiter.png',
  description: 'Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.',
  isGasPlanet: 'true',
  numberOfMoons: '79',
  nameOfLargestMoon: 'Ganymede',
},
{
  name: 'Saturn',
  imageUrl: 'src/javascripts/helpers/data/img/saturn.png',
  description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets.',
  isGasPlanet: 'true',
  numberOfMoons: '53',
  nameOfLargestMoon: 'Titan',
},
{
  name: 'Uranus',
  imageUrl: 'src/javascripts/helpers/data/img/uranus.png',
  description: 'The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy.',
  isGasPlanet: 'true',
  numberOfMoons: '27',
  nameOfLargestMoon: 'Titania',
},
{
  name: 'Neptune',
  imageUrl: 'src/javascripts/helpers/data/img/neptune.png',
  description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth,',
  isGasPlanet: 'true',
  numberOfMoons: '13',
  nameOfLargestMoon: 'Triton',
},
{
  name: 'Pluto',
  imageUrl: 'src/javascripts/helpers/data/img/pluto.png',
  description: 'Pluto is a complex and mysterious world with mountains, valleys, plains, craters, and maybe glaciers. Discovered in 1930, Pluto was long considered our solar systems ninth planet.',
  isGasPlanet: 'false',
  numberOfMoons: '5',
  nameOfLargestMoon: 'Charon',
},

];

const getPlanets = () => planets;

export default { getPlanets };
