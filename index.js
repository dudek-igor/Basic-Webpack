import { message } from './source/tools/message';
import footer from './source/components/footer';
import text from './source/data/title.txt';
import './source/sass/index.sass';
import addImage from './source/tools/image';
import Creator from './source/tools/creator';

message(text);
addImage('h1');

const e1 = new Creator();
e1.addBgc('red');
const e2 = new Creator();
e2.addBgc('blue');
const e3 = new Creator();
e3.addBgc();

var hello = 'Hello';
