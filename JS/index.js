        let a = null;
        let b = null;
        let opr = null;

        const input = document.querySelector("input");
        const items = document.querySelectorAll(".item");
        const oprs = document.querySelectorAll(".opr");

        items.forEach((element) =>
            element.addEventListener("click", function(event) {
                input.value += event.target.innerText;
            })
        );
        oprs.forEach((element) =>
            element.addEventListener("click", function(event) {
                opr = event.target.innerText;
                input.value += event.target.innerText;
            })
        );
        document.querySelector(".back").addEventListener("click", function(event) {
            const currentValue = input.value;
            input.value = currentValue.substring(0, currentValue.length - 1);
        });
        document.querySelector(".clean").addEventListener("click", function(event) {
            input.value = "";
        });







        console.log(opr)

        function calc(input) {
            function calculate(a, b, devide, multpl, minus, plus) {}
        }