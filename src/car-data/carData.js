import car2 from "../images/2.png"
import car4 from "../images/4.avif"

import car5 from "../images/Car (1).png"
import car6 from "../images/Car (2).png"
import car7 from "../images/Car (3).png"
import car8 from "../images/Car.png"

const cars = [
  {
    id: 2,
    name: "BMW",
    model: 'BMW',
    image: car2,
    color: '#482d9f'
  },
  {
    id: 4,
    name: "BMW",
    model: 'BMW',
    image: car4,
    color: '#142d52'
  },
]

const cardCars = [
  {
    car: "Koenigsegg Jesko",
    carType: "Sport",
    carImage: car5,
    carGasoline: "100",
    carManuals: "Manual",
    carPeople: "2",
    carPrice: "99.00",
  },
  {
    car: "Nissan GT-R Nismo",
    carType: "Sport",
    carImage: car7,
    carGasoline: "80",
    carManuals: "Automatic",
    carPeople: "2",
    carPrice: "80.00",
  },
  {
    car: "Rolls-Royce Phantom",
    carType: "Sedan",
    carImage: car6,
    carGasoline: "70",
    carManuals: "Automatic",
    carPeople: "4",
    carPrice: "96.00",
  },
  {
    car: "Lamborghini Aventador",
    carType: "Sport",
    carImage: car8,
    carGasoline: "90",
    carManuals: "Manual",
    carPeople: "2",
    carPrice: "120.00",
  },
  {
    car: "BMW M3",
    carType: "Coupe",
    carImage: car7,
    carGasoline: "75",
    carManuals: "Manual",
    carPeople: "4",
    carPrice: "85.00",
  },
  {
    car: "Mercedes-Benz S-Class",
    carType: "Sedan",
    carImage: car5,
    carGasoline: "65",
    carManuals: "Automatic",
    carPeople: "5",
    carPrice: "110.00",
  },
  {
    car: "Ferrari LaFerrari",
    carType: "Sport",
    carImage: car8,
    carGasoline: "95",
    carManuals: "Manual",
    carPeople: "2",
    carPrice: "130.00",
  },
  {
    car: "Audi R8",
    carType: "Sport",
    carImage: car6,
    carGasoline: "85",
    carManuals: "Automatic",
    carPeople: "2",
    carPrice: "90.00",
  },
  {
    car: "Tesla Model S",
    carType: "Sedan",
    carImage: car8,
    carGasoline: "Electric",
    carManuals: "Automatic",
    carPeople: "5",
    carPrice: "95.00",
  },
  {
    car: "Porsche 911 Turbo",
    carType: "Sport",
    carImage: car7,
    carGasoline: "88",
    carManuals: "Manual",
    carPeople: "2",
    carPrice: "115.00",
  },
];

export {cars, cardCars}