document.addEventListener('DOMContentLoaded', function () {
  fetch('https://ranko1911.github.io/Rolling-and-Falling//header.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('header1').innerHTML = data;
    });

  fetch('https://ranko1911.github.io/Rolling-and-Falling//footer.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('footer1').innerHTML = data;
    });
});
