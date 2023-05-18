console.log("ello");
let list = document.querySelectorAll("h3");
let dead = document.querySelector("#dates");
console.log(list)
let months=[
    "January",
    "February",
    'March',
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear()
    let currentMonth = currentDate.getMonth()
    let currentDay = currentDate.getDate()

    console.log(currentDay)

    const futureDate = new Date(currentYear , currentMonth , currentDay +10 ,12, 30)
    console.log(futureDate.getDate())

    console.log(futureDate.getDay())
    dead.innerText = `${days[futureDate.getDay()]},${futureDate.getDate()} ${months[futureDate.getMonth()]} ${futureDate.getFullYear()}`
    let  day_= 24*60*60*1000
    let  hour_=60*60*1000
    let minutes_= 60*1000
    let seconds_= 1000

function timer(){
    let today =new Date().getTime()
    let timeLeft = futureDate.getTime() - today
    console.log(timeLeft)
    let daysLeft =Math.floor(timeLeft/day_)
    let hoursLeft =Math.floor((timeLeft%day_)/hour_)
    let minutesLeft =Math.floor((timeLeft%hour_)/minutes_)
    let secondsLeft =Math.floor((timeLeft%minutes_)/seconds_)
    console.log(daysLeft ,hoursLeft,minutesLeft,secondsLeft)

    list.forEach((item)=>{
            if(item.id=="day"){
                if(daysLeft<10){
                    item.innerText=`0${daysLeft}`
                }else{
                    item.innerText=`${daysLeft}`
                }
            }
            else if(item.id=="hr"){
                 if(hoursLeft<10){
                    item.innerText=`0${hoursLeft}`
                }else{
                    item.innerText=`${hoursLeft}`
                }
            }else if(item.id=="min"){
                if(minutesLeft<10){
                    item.innerText=`0${minutesLeft}`
                }else{
                    item.innerText=`${minutesLeft}`
                }
            }else{
                  if(secondsLeft<10){
                    item.innerText=`0${secondsLeft}`
                }else{
                    item.innerText=`${secondsLeft}`
                }
            }
        })
        if(daysLeft==0){
            clearInterval(repeat)
        }
}
let repeat = setInterval(timer,1000)