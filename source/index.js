import {message} from './tools/message';
import footer from './components/footer';
import text from './data/title.txt';
import './sass/index.sass';
import addImage from './tools/image';
import Creator from './tools/creator';

message(text);
addImage('h1');

const e1 = new Creator();
e1.addBgc('red');
const e2 = new Creator();
e2.addBgc('blue');
const e3 = new Creator();
e3.addBgc();

var set = new Set([1, 2, 3]);