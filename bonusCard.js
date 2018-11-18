/*1. Бонусная система
карточка с бонусами
коэф. перевода из бонусов в гривны
сумма покупки
если бонусов на карте больше Х, то снимаем бонусы и частично оплачиваем покупку
вывести сумму к оплате*/

var  bonuses = 7500
	,purchaseSum = 90
	,amountToPay = 0
	,bonusAmount = bonuses * 0.01
	;

console.log("Доступные бонусы: ", bonusAmount,"грн.");

if (purchaseSum >= bonusAmount){
	amountToPay = purchaseSum - bonusAmount;
	console.log("Бонусы сняты для оплаты покупки, сумма к оплате: ", amountToPay, "грн.");
}
else if(purchaseSum < bonusAmount){
	console.log("К сожалению, вы не можете использовать бонусы для оплаты.")
}

