import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

'use strict';
var chalk = require('chalk');
// Node
var currentNodeVersion = process.versions.node; 
var semver = currentNodeVersion.split('.');
var major = semver[0];// 
// 4.x
if (major < 4) {
  console.error(
    chalk.red(
      'You are running Node ' +
        currentNodeVersion +
        '.\n' +
        'Create React App requires Node 4 or higher. \n' +
        'Please update your version of Node.'
    )
  );
  process.exit(1);
}
//n4
require('./createReactApp');


/ If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
