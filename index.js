// 3
// Import functions move and changeColor from animate.js
import { move, changeColor } from './utils/animate.js';

document.getElementById('btn').addEventListener('click', () => {

    // 4 
    // call move here
    move();

    //5
    // call changeColor here
    changeColor();
})
