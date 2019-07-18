// var special = document.getElementById('special');
// var nav = document.getElementById('Nav');

 function expandNav() {
  var nav = document.getElementById('Nav');
  if (nav.className === 'navigation') {
    nav.className += ' responsive';
  } else {
    nav.className = 'navigation';
  }
}

