/* SmtpJS.com - v3.0.0 */
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

document.querySelector('.kontakt form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var people = document.getElementById('people').value;
    var diet = document.getElementById('diet').value;
    var event = document.getElementById('event').value;
    var otherInfo = document.getElementById('otherInfo').value;

    var body = 'Namn: ' + name + '<br>';
    body += 'Email: ' + email + '<br>';
    body += 'Mobile: ' + phone + '<br>';
    body += 'Antal Gäster: ' + people + '<br>';
    body += 'Event: ' + event + '<br>';
    body += 'Preferenser: ' + diet + '<br>';
    body += 'Andra upplysningar: ' + otherInfo + '<br>';

    Email.send({
      SecureToken : "f5040cc6-b5f0-41ae-9f7e-8c272cb338b6",
      To: 'info@rimascatering.com',
      From: "info@rimascatering.com",
      Subject: "NY BESTÄLLNING",
      Body: body
    }).then(function (message) {
      alert(message);
      window.location.href = "./index.html";
    });
});
