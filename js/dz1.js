// console.log("Hello world")
// let user1 = 0;
// let user2 = user1++;
// console.log(user2);

// Цикл последовательности
// let num = 0;
// while (num < 8) {
// 	num = ++num;
// 	console.log(`Число: ${num}`);
// }
// console.log(typeof `Число: ${num}`);

// Вложенный цикл с прерыванием
// cicle1: for (let num = 0; num < 2; num++) {
// 		for (let size = 0; size < 3; size++) {
// 		console.log(size);
// 		if (size == 2)  break cicle1;
// 		}
// }

// Функции колбеки
// function calcSum(numOne, numTwo, more, less) {
// 	let numSum = numOne + numTwo;

// 	if (numSum > 3) {
// 		more();
// 	} else {
// 		less();
// 	}
// }
// function showMoreMessage() {
// 	console.log("Больше, чем 3");
// }
// function showLessMessage() {
// 	console.log("Меньше, чем 3");
// }
// calcSum(1, 5, showMoreMessage, showLessMessage);

// Возврат результата функции
// function calcSumm(numOne, numTwo) {
// 	let numSumm = numOne + numTwo;

// 	return numSumm;
// }
// let funcResult = calcSumm(1, 2);
// console.log(`Сумма: ${funcResult}`);