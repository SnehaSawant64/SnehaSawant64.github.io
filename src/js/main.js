import html from 'html-template-tag';

document.querySelector('body').innerHTML = html`
<nav class="navbar">
</nav>
<div>
  <clock-analog>
  </clock-analog>
</div>
<main class="main">
</main>
<footer>
</footer>
`;

document.querySelector('main').innerHTML = html`
`;

//document.querySelector('nav').innerHTML = html`
//<i class="fa fa-bars" aria-hidden="true"></i>
//`;
