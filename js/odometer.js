var counters = document.getElementsByClassName('number-ticker');

var defaultDigitNode = document.createElement('div');
defaultDigitNode.classList.add('digit');

for (var i = 0; i < 10; i++) {
    defaultDigitNode.innerHTML += i + '<br>';
}

[].forEach.call(counters, function (counter) {
    var currentValue = parseInt(counter.getAttribute('data-value')) || 0;
    var digits = [];

    generateDigits(currentValue.toString().length);
    setValue(currentValue);

    setInterval(function () {
        setValue(Math.floor(Math.random() * 1000000));
    }, 2000);

    function setValue (number) {
        var s = number.toString().split('').reverse().join('');
        var l = s.length;

        if (l > digits.length) {
            generateDigits(l - digits.length);
        }

        for (var i = 0; i < digits.length; i++) {
            setDigit(i, s[i] || 0);
        }
    }

    function setDigit (digitIndex, number) {
        digits[digitIndex].style.marginTop = '-' + number + 'em';
    }

    function generateDigits (amount) {
        for (var i = 0; i < amount; i++) {
            var d = defaultDigitNode.cloneNode(true);
            counter.appendChild(d);
            digits.unshift(d);
        }
    }
});
