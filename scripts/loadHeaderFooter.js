document.addEventListener('DOMContentLoaded', function () {
  fetch('/header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header1').innerHTML = data;
    });

  fetch('/footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer1').innerHTML = data;
    });
});
