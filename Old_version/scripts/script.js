// JavaScript Document
const html = document.querySelector('html');
const text = document.querySelector('h2');

html.addEventListener('scroll', () => {
    text.style.webkitAnimation = 'none';
    setTimeout(function () {
        text.style.webkitAnimation = '';
    }, 10);
});


document.getElementById("agent_Button").onclick = function () {
    location.href = "pages/agents.html";
}