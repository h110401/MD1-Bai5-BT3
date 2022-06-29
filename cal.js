let isDone = true;
let isOn = false;

let powButton = document.getElementById('pow')
let isClick = false;

let x = null;
let y = null;


function on() {
    input = +document.getElementById('display').value;
    if (input == 0) {
        document.getElementById('display').value = 0;
    }
    isOn = true;
}

function off() {
    document.getElementById('display').value = null;
    isOn = false;
}

function add(c) {
    if (isOn) {
        if (isDone || document.getElementById('display').value == '0') {
            document.getElementById('display').value = c;
            isDone = false;
        } else {
            document.getElementById('display').value += c;
        }
    }
}

function answer() {
    let operation = document.getElementById('display');
    if (operation.value) {
        if (isClick) {
            y = +document.getElementById('display').value;
            document.getElementById('display').value = Math.pow(x, y)
            powButton.style.backgroundColor = '#e9ecee';
            isClick = false;
            isDone = true;
            y = null
        } else {
            let result = eval(operation.value);
            operation.value = result;
            isDone = true;
            y = null
        }

    }
}

function factorial() {
    if (isOn) {
        let input = +document.getElementById('display').value;
        let result = 1;
        if (input < 0) {
            document.getElementById('display').value = 'Error';
        } else if (input > 0) {
            for (i = 1; i < input + 1; i++) {
                result *= i;
            }
        }
        document.getElementById('display').value = result;
        isDone = true;
    }
}

function sqrt() {
    if (isOn) {
        document.getElementById('display').value = Math.sqrt(+document.getElementById('display').value);
        isDone = true;
    }
}

function pow() {
    if (isOn) {
        if (!isClick) {
            powButton.style.backgroundColor = '#91b0cb';
            x = +document.getElementById('display').value;
            isClick = true;
        } else {
            powButton.style.backgroundColor = '#e9ecee';
            answer()
            isClick = false;
            x = null;
        }
        if (isClick) {
            isDone = true;
        }
    }
console.log(isClick)

}

function reset() {
    if (isOn) {
        document.getElementById('display').value = 0;
        isDone = true;
    }
}

document.addEventListener('keydown', (event) => {

    if (event.srcElement.type === "button") {
        event.srcElement.blur();
    }
    if (event.key == '0' ||
        event.key == '1' ||
        event.key == '2' ||
        event.key == '3' ||
        event.key == '4' ||
        event.key == '5' ||
        event.key == '6' ||
        event.key == '7' ||
        event.key == '8' ||
        event.key == '9') {
        add(event.key);
    }

    if (event.keyCode == 46) {
        reset();
    } else if (event.keyCode == 111 ||
        event.keyCode == 190 ||
        event.keyCode == 107 ||
        event.keyCode == 109 ||
        event.keyCode == 106 ||
        event.key == '+' ||
        event.key == '-' ||
        event.key == '*' ||
        event.key == '/') {
        add(event.key)
    } else if (event.keyCode == 13) {
        answer()
    } else if (event.keyCode == 8) {
        document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
    }
}, false);

