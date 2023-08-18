// main.js
async function loadHTML(url, id) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
}

loadHTML('./event.html', 'content');

document.querySelector('a[href="#event"]').addEventListener('click', function(e) {
    e.preventDefault();

    const targetElement = document.getElementById('evenemang');

    targetElement.scrollIntoView({ behavior: 'auto' });
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#hem"]').addEventListener('click', function(e) {
        e.preventDefault();
        location.reload();
    });
});

document.querySelector('a[href="#kontakt"]').addEventListener('click', function(e) {

    window.location.href = "./kontakt.html";
});
