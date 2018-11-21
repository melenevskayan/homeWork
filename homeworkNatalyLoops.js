var num = [3, -5, 8, 15, -6, 0, -1, 10, 7, 0, 5, -6, 0]
,result =""
;

	for (var i = 0; i < num.length; i ++){
		if(num[i]%2 && num[i]>= -1 && num[i]<=10){
			result += num[i] + " ";
		}
	}
console.log("Hечётные числа в диапазоне от -1 до 10: ",result, " ");


zeroNum = 0
,result = "";
	for (i = 0; i < num.length; i ++){
		if(num[i] == 0){
			zeroNum ++;
		}
	}
console.log("Количество нулей в массиве: ", zeroNum, "шт.");

min = num[0];
	for (i = 0; i < num.length; i ++){
		if(num[i] < min){
			min = num[i];
		}
	}
console.log("Mинимальное значение в массиве: ", min);

rusult = "";
	for(i = 0; i < num.length; i += 2){
		if(num[i] > 0){
			result += num[i] + " ";
		}
	}
console.log("Положительные значения на чётных позициях массива:", result)


	for(i = 0; i < num.length; i++){
		if(i%2){
			num[i - 1] = num[i];
			num[i] = temp;
		}
		else{
			temp = num[i];
		} 
	}
console.log(num);


	for(i = 0; i < num.length; i++){
		if(!(i%2)){
			temp = num[i];
		}
		else{
			num[i - 1] = num[i];
			num[i] = temp;
		}
	}
console.log(num);


var message = ""
,paymentDay = 15
,paymentAmount  = 238
,disount = 6
,fee = 3
;

switch(true){
	case paymentDay >= 1 && paymentDay <= 5:
	message = "Ваша скидка за раннюю оплату:" + discount + "%!";
	break;
	case paymentDay > 5 && paymentDay <= 20:
	message = "Сумма к оплате: " + paymentAmount + "грн.";
	break;
	case paymentDay > 20:
	message = " Вам была насчитана пеня за несвоевременную оплату в размере: " + fee + "%."
	break;
	default: 
	message = "Операция недоступна, возможная ошибка: некоректный формат даты."
}
console.log(message);


