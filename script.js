let result = document.getElementById("result")
function clearScreen() {
    result.value = "";
    }
    
    function display(value) {
    result.value += value;
    }
    function calculate() {
    var p = result.value;
    var q = eval(p);
    result.value = q;
    }
