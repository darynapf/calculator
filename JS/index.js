let a = null;
let b = null;
let opr = null;

const input = document.querySelector("input");
const items = document.querySelectorAll(".item");
const oprs = document.querySelectorAll(".opr");

items.forEach((element) =>
    element.addEventListener("click", function(event) {
        if (a == null && opr == null && b == null) {
            a = event.target.innerText;
        } else if (a != null && opr == null && b == null) {
            a = a + event.target.innerText;
        } else if (a != null && opr != null && b == null) {
            b = event.target.innerText;
        } else if (a != null && opr != null && b != null) {
            b = b + event.target.innerText;
        }
        input.value += event.target.innerText;
    })
);
oprs.forEach((element) =>
    element.addEventListener("click", function(event) {
        if (a != null && opr != null && b != null) {
            input.value = evaluate();
        } else if (opr != null && b == null) {
            const currentValue = input.value;
            input.value = currentValue.substring(0, currentValue.length - 1);
        }
        opr = event.target.innerText;
        input.value += event.target.innerText;
    })
);
document.querySelector(".back").addEventListener("click", function(event) {
    const currentValue = input.value;
    input.value = currentValue.substring(0, currentValue.length - 1);
    if (b != null) {
        b = backNumberValue(b);
    } else if (opr != null) {
        ops = null;
    } else if (a != null) {
        a = backNumberValue(a);
    }
});
document.querySelector(".clean").addEventListener("click", function(event) {
    input.value = "";
    a = null;
    b = null;
    opr = null;
});

document.querySelector(".equal").addEventListener("click", function(event) {
    input.value = evaluate();
});

function backNumberValue(number) {
    let value = number + "";
    value = value.substring(0, value.length - 1);
    if (!value) {
        return null;
    }
    return parseFloat(value);
}

function evaluate() {
    const val1 = parseFloat(a);
    const val2 = parseFloat(b);
    let result = 0;
    switch (opr) {
        case "+":
            result = val1 + val2;
            break;
        case "-":
            result = val1 - val2;
            break;
        case "/":
            if (!val2) {
                alert("Division by zero is a big no-no in mathematics :(");
            } else {
                result = val1 / val2;
            }
            break;
        case "*":
            result = val1 * val2;
            break;
    }
    a = result + "";
    b = null;
    opr = null;
    return a;
}