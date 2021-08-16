const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');

const items=document.querySelectorAll('.deadline-format h4');

let tempdate=new Date();
let tempYear=tempdate.getUTCFullYear();
let tempMonth=tempdate.getUTCMonth();
let tempDay=tempdate.getDate();

console.log(items);

//let futuredate=new Date(2021,9,24,8,0,0);
let futuredate=new Date(tempYear,tempMonth,tempDay+10,8,30,0);
console.log(futuredate);
const year=futuredate.getFullYear();
const hours=futuredate.getHours();
const minutes=futuredate.getMinutes();
let month=futuredate.getMonth();
// to get value from number
month=months[month];

const date=futuredate.getDate();
const weekday=weekdays[futuredate.getDay()];



console.log(date);

giveaway.textContent=`giveaway ends on ${weekday}, ${date} ${month} ${year} ,${hours}:${minutes} am`


//future time in ms

const futureTime=futuredate.getTime();
console.log(futureTime);

function getRemainingTime(){
   const today=new Date().getTime();
   console.log(today);
   const t=futureTime-today;
   console.log(t);
   //1s== 1000ms
   //1min =60sec
   //1 hour==60 minutes
   //1 day==24 hours


   //values in milliseconds

   const oneDay=24*60*60*1000;
   const oneHour=60*60*1000;
   const oneMinute=60*1000;

   console.log(oneDay);

   //calculate all values
    let days=t/oneDay;
    days=Math.floor(days);
    //t=t%oneDay;
    let hours=(t%oneDay)/oneHour;
    hours=Math.floor(hours);
    let minutes=(t%oneHour)/oneMinute;
    minutes=Math.floor(minutes);
    let seconds=(t%oneMinute)/1000;
    seconds=Math.floor(seconds);

    const values=[days,hours,minutes,seconds];
    console.log(values);

    function format(item){
      if(item<10){
        return item=`0${item}`;
      }
      return item ;
    }
    items.forEach(function(item,index){
                item.textContent=format(values[index]);
    });
    if(t<0)
    {
      clearInterval(countdown);
      deadline.innerHTML=`<h4 class="expired">Sorry, this giveaway has expired.</h4>`
    }
}

//countdown
let countdown=setInterval(getRemainingTime,1000);

//clearing the interval

getRemainingTime()