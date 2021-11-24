import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GameProvider from './context/game';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*

https://www.prohavit.com/products/kb487l-tkl-mechanical-keyboard?currency=CAD
https://www.duckychannel.com.tw/en/One-2-Tuxedo
https://www.keychron.com/products/keychron-k6-wireless-mechanical-keyboard

User Stories
------------------------
X User can click a 'Start Practice' button to start the practice session.
X User can see the prompt word displayed in a text box.
X User can begin typing the word in a text input box.
X User can see the time interval words must be typed in displayed in the app window.
X User can see the number of successful attempts incremented in the score box if the word was correctly typed.
X User can see the number of successful attempts and the number of total attempts in a score box.
X User can see the number of total attempts incremented in the score box.




User can see the a message adjacent to the text input box indicating the user should try again if an incorrect letter is entered.
User can see a congratulations message if the word is correctly typed.
User can see the letters that have been typed flash if an incorrect letter is entered and the text input box will be cleared.


User can see the time interval words must be typed decremented by a small amount if the word is correctly typed.
User can click a 'Stop Practice' button to stop the practice session.


Bonus features
------------------------
User can hear a unique audible tone signalling when a new word is displayed, a word is correctly entered, or an incorrect letter is typed in the word.
User can login to the app
User can see cumulative performance statistics across all of his/her practice sessions.

*/