(function() {
    const display = document.querySelector("#display");
    const buttons = document.querySelectorAll(".keyboard button");
    let stack = [];
    let currentVal = "";

    Array.prototype.forEach.call(buttons, (button) => {
        button.addEventListener("click", evt => {
            display.value = calculate(evt.target.value);;
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
                } else {
                    result = stack.length > 0 ? "" + stack[stack.length-1] : "";
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
                result = "0";
                break;
            default:
                currentVal += input;
                result = currentVal;
        }
        return result;
    }
})();