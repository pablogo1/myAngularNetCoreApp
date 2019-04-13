require('./lib');
//$ = require('jquery');
import ES6Lib from './es6codelib';

let es6ClassInstance = new ES6Lib();
document.getElementById("fillthis").innerHTML = getText();
$("#fillWithJquery").html('Filled with JQuery!');
$('#fillWithEs6Lib').html(es6ClassInstance.getData());