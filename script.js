isStarted = false;
let intervalId1, intervalId2, intervalId3;
let mills = 0;
let seconds = 0;
let mins = 0;

const bookmarksList = [];

function run() {
  if (!isStarted) {

    intervalId1 = setInterval (() => {
      if (mills >= 99) {
        mills = 0;
      }
      mills += 1;
      document.querySelector('.mills').innerHTML = mills;
    },10);

    intervalId2 = setInterval (() => {
      if (seconds >= 59) {
        seconds = 0;
      }
      seconds += 1;
      document.querySelector('.seconds').innerHTML = seconds;
    },1000);

    intervalId3 = setInterval (() => {
      mins += 1;
      document.querySelector('.mins').innerHTML = mins;
    },60000);

    document.querySelector('.btn').innerHTML = 'STOP';
    isStarted = true;
    
  } else {
    clearInterval (intervalId1);
    clearInterval (intervalId2);
    clearInterval (intervalId3);
    document.querySelector('.btn').innerHTML = 'START';
    isStarted = false;
  }
}

function reset() {
  document.querySelector('.mills').innerHTML = '00';
  document.querySelector('.seconds').innerHTML = '00';
  document.querySelector('.mins').innerHTML = '00';
  mills = 0;
  seconds = 0;
  mins = 0;

  for (let i = 0; i < bookmarksList.length; i++) {
    bookmarksList.splice([i]);
  }
  document.querySelector('.right').innerHTML = 'Bookmarks will be shown here...';
}

function bookmark () {

  let htmlList = '';
  bookmarksList.push ({mins, seconds, mills});

  for (let i = 0; i < bookmarksList.length; i++) {
    const bookmsrkObject = bookmarksList [i];
    const {mins, seconds, mills} = bookmsrkObject;

    const html = `<div>${mins}  : ${seconds}  : ${mills}</div>`;

    htmlList += html;
    document.querySelector('.right').innerHTML = htmlList;

    document.querySelector('.right').scrollTo(0, document.querySelector('.right').scrollHeight);
  }
}

document.body.addEventListener('keydown', (event) => {
  if (event.key ===' ') {
    run ();
  } else if (event.key === 'R' || event.key === 'r') {
    reset ();
  } else if (event.key === 'B' || event.key === 'b') {
    bookmark ();
  }
})