async function loadHTML(url, id) {
    const response = await fetch(url);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
}

loadHTML('./event.html', 'content');

document.querySelector('a[href="#event"]').addEventListener('click', function(e) {
    e.preventDefault();

    // const targetElement = document.getElementById('evenemang');

    // targetElement.scrollIntoView({ behavior: 'auto' });

    window.location.href = "./evenemang.html";
});

document.querySelector('a[href="#omoss"]').addEventListener('click', function(e) {
    e.preventDefault();

    // const targetElement = document.getElementById('evenemang');

    // targetElement.scrollIntoView({ behavior: 'auto' });

    window.location.href = "./omoss.html";
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

document.addEventListener("DOMContentLoaded", function() {
    function toggleTextContent() {
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        // Assuming 576px is the breakpoint for "small screens"
        if (width <= 576) {
            // Toggle for main content
            document.querySelector('.ptag').classList.add('hidden');
            document.querySelector('.ptag-short').classList.remove('hidden');

            // Toggle for section content
            document.querySelectorAll('.p-short').forEach(p => p.classList.remove('hidden'));
            document.querySelectorAll('section > p:not(.p-short)').forEach(p => p.classList.add('hidden'));
        } else {
            // Toggle for main content
            document.querySelector('.ptag').classList.remove('hidden');
            document.querySelector('.ptag-short').classList.add('hidden');

            // Toggle for section content
            document.querySelectorAll('.p-short').forEach(p => p.classList.add('hidden'));
            document.querySelectorAll('section > p:not(.p-short)').forEach(p => p.classList.remove('hidden'));
        }
    }

    // Initial check
    toggleTextContent();

    // Update on window resize
    window.addEventListener('resize', toggleTextContent);
});
