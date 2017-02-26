
function startClock (){
	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');
	const time = moment();

	//Second Hand
	const secondDegree = ((time.seconds() / 60) * 360) + 90; // convert the second into a degree
	secondHand.style.transform = `rotate(${secondDegree}deg)`; //rotate the second hand to the converted degree
	console.log(time.seconds() + ": Seconds");

	//Minute Hand
	const minuteDegree = ((time.minutes()/ 60) * 360) + 90;
	minuteHand.style.transform = `rotate(${minuteDegree}deg)`; 
	console.log(time.minutes() + ": Minutes");

	//Hour Hand
	const hourDegree = ((time.hours() / 12) * 360) + 90;
	hourHand.style.transform = `rotate(${hourDegree}deg)`;
	console.log(time.hours() + ": Hours");
}

setInterval(startClock, 1000);