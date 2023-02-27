let expression = document.querySelector("#equation");
let result = document.querySelector("#result");

const inputs = document.querySelectorAll(".input");

for (let input of inputs) {
	input.addEventListener("click", calculateResult);
}

function calculateResult(e) {
	expression.value += e.target.value;
	if (!e.target.classList.contains("operator")) {
		result.innerText = eval(expression.value);
	}
}

const equal = document.getElementById("equal");
equal.addEventListener("click", () => {
	expression.value = result.value;
	result.value = "";
});

const AC = document.getElementById("all-clear");
AC.addEventListener("click", () => {
	expression.value = "";
	result.value = "";
});

const DEL = document.getElementById("del");
DEL.addEventListener("click", () => {
	expression.value = expression.value.slice(0, -1);

	let len = expression.value.length;
	const lastChar = expression.value[len - 1];

	if (["+", "-", "*", "/"].includes(lastChar)) {
		result.innerText = eval(expression.value.slice(0, -1));
	} else {
		let ans = eval(expression.value);
		if (ans == undefined) result.innerText = "";
		else result.innerText = ans;
	}
});
