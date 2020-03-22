import html from 'html-template-tag';

document.querySelector('body').innerHTML = html`
<nav></nav>
<main class="main"></main>
<!-- <div id="clock"></div> -->
<footer>
    <copyright-x><span slot="name">hybridY</span></copyright-x>
</footer>
`;

document.querySelector('main').innerHTML = html`
<div class="main__text">hybridY</div>
<div class="main__break-line"></div>
<div class="main__text">& Code</div>
`;

document.querySelector('nav').innerHTML = html`
<div>Menu</div>
<i class="fa fa-bars" aria-hidden="true"></i>
`;
