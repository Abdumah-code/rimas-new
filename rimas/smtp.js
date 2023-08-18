document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var people = document.getElementById('people').value;
    var diet = document.getElementById('diet').value;
    var event = document.getElementById('event').value;

    var body = 'Namn: ' + name + '<br>';
    body += 'Email: ' + email + '<br>';
    body += 'Mobile Number: ' + phone + '<br>';
    body += 'Antal Gäster: ' + people + '<br>';
    body += 'Preferenser: ' + diet + '<br>';
    body += 'Event: ' + event + '<br>';

    email.send({
        SecureToken: "f5040cc6-b5f0-41ae-9f7e-8c272cb338b6",
        To: 'info@rimascatering.com',
        From: "info@rimascatering.com",
        Subject: "NY BESTÄLLNING",
        Body: body
    }).then(function (message) {
        window.location.href = "./index.html"
    });
});
