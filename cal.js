
function add(c) {
    document.getElementById('display').value += c;
}
function answer() {
    let operation = document.getElementById('display');
    if(operation.value){
        let result = eval(operation.value);
        operation.value = result;
    }
}

function reset() {
    document.getElementById('display').value = null;
}

document.addEventListener('keypress', function (e) {
    if(e.keyCode > 47 && e.keyCode < 58){
        add(e.key);
    }
}, false);

document.addEventListener('keydown', function (e) {
    if(e.keyCode == 46){
        reset();
    } else if (e.key == '/' || e.keyCode == 111 || e.keyCode == 190 || e.keyCode == 107 || e.key == '+' || e.keyCode == 109 || e.key == '-' || e.keyCode == 106 || e.key == '*') {
        add(e.key)
    } else if (e.keyCode == 13) {

        answer()

    }
}, false);

