/*Электроэнергия
показания
тарифы (массив)
Для расчета стоимости электроэнергии, учтенной двухзонным счетчиком:
ночной (к=0.5) время действия с 23:00 до 7:00 до 100кв- 45 коп, после 84коп.
и обычный (к=1) время потребления с 7:00 до 23:00 до 100кв - 90 коп, после 168 коп.
Расчет для однозонных: 
До 100 кВт·ч  - 71.4 коп. 
Свыше 100 кВт·ч - 129 коп. */

var amountDue   = 0
	dayTimeUse  = 6
	nightTimeUse = 78
	totalUse = dayTimeUse + nightTimeUse
	doubleZoneCounter  = false
	rates = [0.45 , 0.84 , 0.90, 1.68, 0.714, 1.29]
	

if (doubleZoneCounter){
	if(dayTimeUse < 100 && nightTimeUse < 100){
		amountDue = (dayTimeUse * rates[2]) + (nightTimeUse * rates[0]);
		console.log("Дневной тариф до 100кв:", rates[2], "грн.");
		console.log("Ночной тариф до 100кв:", rates[0], "грн.");
		console.log("Сумма к оплате:", amountDue, "грн.");
	}
	else if(dayTimeUse < 100 && nightTimeUse >= 100){
		amountDue = (dayTimeUse * rates[2]) + 99 * rates[0] + ((nightTimeUse -99) * rates[1]);
		console.log("Дневной тариф до 100кв:", rates[2], "грн.");
		console.log("Ночной тариф до 100кв:", rates[0], "грн.", "свыше: ", rates[1], "грн");
		console.log("Сумма к оплате:", amountDue, "грн.");
	}
	else if(dayTimeUse >= 100 && nightTimeUse < 100){
		amountDue = 99 * rates[2] + ((dayTimeUse - 99) * rates[3]) + (nightTimeUse * rates[0]);
		console.log("Дневной тариф до 100кв:", rates[2], "грн.", "свыше: ", rates[3], "грн");
		console.log("Ночной тариф до 100кв:", rates[0], "грн.");
		console.log("Сумма к оплате:", amountDue, "грн.");
	}
	else if(dayTimeUse >= 100 && nightTimeUse >= 100){
		amountDue = 99 * rates[2] + ((dayTimeUse - 99) * rates[3]) + 99 * rates[0] + (nightTimeUse * rates[1]);
		console.log("Дневной свыше 100кв:", rates[3], "грн");
		console.log("Ночной тариф свыше 100кв:", rates[1], "грн.");
		console.log("Сумма к оплате:", amountDue, "грн.");
	}
}	
else {
	if(totalUse < 100){
		amountDue = totalUse * rates[4];
		console.log("Тариф до 100кв:", rates[4], "грн.");
		console.log("Сумма к оплате:", amountDue, "грн.");
	}
	else if(totalUse >= 100){
		amountDue = (99 * rates[4]) + ((totalUse - 99) * rates[5]);
		console.log("Тариф до 100кв:", rates[4], "грн.", "свыше: ", rates[5], "грн.");
		console.log("Сумма к оплате:", amountDue, "грн.");
	}
}








