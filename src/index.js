import {greetings} from './greetings.js';
import bookings from './object.js';

const name = 'John Doe';
const message = greetings(name);
console.log(message);
console.log(bookings.get("ticketing"));