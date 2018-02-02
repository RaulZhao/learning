(function() {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll(".keyboard button");
    let stack = [];
    let currentVal = "";

    Array.prototype.forEach.call(buttons, (button) => {
        button.addEventListener("click", evt => {
            let res = calculate(evt.target.value);

            display.value = res;
        });
    });

    function calculate(input) {
        let result = "";
        switch (input) {
            case "+":
                if (currentVal !== "") {
                    stack.push(parseFloat(currentVal));
                    result = currentVal;
                    currentVal = "";
                }
                break;
            case "=":
                let sum = currentVal === "" ? 0 : parseFloat(currentVal);

                sum = stack.reduce((total, val) => {
                    return total + val;
                }, sum);
                stack = [sum];
                currentVal = "";
                result = "" + sum;
                break;
            case "C":
                stack = [];
                currentVal = "";
                result = currentVal;
                break;
            default:
                currentVal += input;
                result = currentVal;
        }
        return result;
    }
})();