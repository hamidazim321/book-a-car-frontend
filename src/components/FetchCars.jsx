import { Link } from 'react-router-dom';
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebookF,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useEffect, useState } from 'react';
import axios from 'axios';
import splitSentence from '../helpers/splitSentence';

const FetchCars = () => {
    const [cars, setCars] = useState([]);
    const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
    const groupSize = 3;
    const totalGroups = Math.ceil(cars.length / groupSize);
}  