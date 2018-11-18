/*Коммунальные услуги
день оплаты
скидка
вывести сумму к оплате*/

var paymentDay      = 4
    ,paymentAmount  = 238
    ,fee            = 0
    ,feeAmount      = 0
    ;

if (paymentDay >= 1 && paymentDay <= 5){
	discount = 5;
	console.log("Ваша скидка за раннюю оплату: ", discount, "%!");
	paymentAmount -= paymentAmount * discount / 100;
	console.log("Сумма к оплате: ", paymentAmount, "грн.");
}
else if (paymentDay > 6 && paymentDay <= 20){
	console.log("Сумма к оплате: ", paymentAmount, "грн.");
}
else if (paymentDay > 20){
	fee = 3;
	console.log(" Вам была насчитана пеня за несвоевременную оплату в размере: ", fee, "%.");
	feeAmount = paymentAmount * fee / 100;
	paymentAmount +=feeAmount;
	console.log("Пеня: ", feeAmount, "грн.");
	console.log("Сумма к оплате с учетом пени: ", paymentAmount, "грн.");

}
else {
	console.log("Операция недоступна, возможная ошибка: некоректный формат даты.");
}
