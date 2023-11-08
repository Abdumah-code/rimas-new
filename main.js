async function loadHTML(url, id) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
}

const homeImage = document.querySelector('#home-img');

homeImage.addEventListener('click', function() {
    window.location.href = 'index.html';
})

loadHTML('./event.html', 'content');

document.addEventListener("DOMContentLoaded", function() {
    function toggleTextContent() {
        var width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

        if (width <= 590) {
            document.querySelector('.ptag').classList.add('hidden');
            document.querySelector('.ptag-short').classList.remove('hidden');

            document.querySelectorAll('.p-short').forEach(p => p.classList.remove('hidden'));
            document.querySelectorAll('section > p:not(.p-short)').forEach(p => p.classList.add('hidden'));
        } else {
            document.querySelector('.ptag').classList.remove('hidden');
            document.querySelector('.ptag-short').classList.add('hidden');

            document.querySelectorAll('.p-short').forEach(p => p.classList.add('hidden'));
            document.querySelectorAll('section > p:not(.p-short)').forEach(p => p.classList.remove('hidden'));
        }
    }

    toggleTextContent();
    window.addEventListener('resize', toggleTextContent);
});

document.querySelector('a[href="#event"]').addEventListener('click', function(e) {
    e.preventDefault();

    window.location.href = "./evenemang.html";
});

document.querySelector('a[href="#omoss"]').addEventListener('click', function(e) {
    e.preventDefault();

    window.location.href = "./omoss.html";
});

document.querySelector('a[href="#gallerie"]').addEventListener('click', function(e) {
    e.preventDefault();

    window.location.href = "./gallerie.html";
});

document.querySelector('a[href="#kontakt"]').addEventListener('click', function(e) {

    window.location.href = "./kontakt.html";
});

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('a[href="#hem"]').addEventListener('click', function(e) {
        e.preventDefault();
        location.reload();
    });
});
