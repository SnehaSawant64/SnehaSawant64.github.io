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
<div class="main__text">Simple</div>
<div class="main__text">but</div>
<div class="main__text">Not</div>
<div class="main__text">Ordinary</div>
<div class="main__break-line"></div>
<div class="main__text_small">Get ready to <b><i>turn</i></b> your <b><i>ideas</i></b> into <b><i>reality</i></b></div>
`;

document.querySelector('nav').innerHTML = html`
<i class="fa fa-bars" aria-hidden="true"></i>
`;
