document.getElementById('time').innerHTML = new Date().toLocaleString();
function pink() {
  document.body.style.backgroundColor = 'pink';
}

function green() {
  document.body.style.backgroundColor = 'Green';
}

function black() {
  document.body.style.backgroundColor = 'Black';
}
function Red() {
  document.body.style.backgroundColor = 'Red';
}
function Yellow() {
  document.body.style.backgroundColor = 'Yellow';
}

function linen() {
  document.body.style.backgroundColor = 'linen';
}

function showhtml() {
  document.getElementById('fig').src = 'image/HTML5.png';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 HTML 문서의 스타일을 지정하기 위한 언어이다.';
}
function showcss() {
  document.getElementById('fig').src = 'image/CSS.png';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 CSS 문서의 스타일을 지정하기 위한 언어이다.';
}
function showjs() {
  document.getElementById('fig').src = 'image/JS.png';
  document.getElementById('desc').innerHTML =
    '<b>HTML</b>은 JS 문서의 스타일을 지정하기 위한 언어이다.';
}
function hide() {
  document.getElementById('fig').src = '';
  document.getElementById('desc').innerHTML = '';
}
