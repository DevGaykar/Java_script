let Mydate = new Date()
// console.log(Mydate)
// console.log(Mydate.getTime())
// console.log(Mydate.getFullYear());
// console.log(Mydate.getDate());
// console.log(Mydate.getMonth()+1);


let newDate = new Date()
// console.log(newDate.toString());
// console.log(newDate.toLocaleString());
// console.log(newDate.toLocaleDateString());
// console.log(newDate.toTimeString());
// console.log(newDate.toDateString());
// console.log(typeof newDate);

let createDate = new Date(2004,11,30)
// console.log(createDate.toLocaleString());)

let Timestamp =  Date.now()
// console.log(Timestamp);
// console.log(createDate.getTime())//time in sec 
// console.log(createDate.getTime()/1000)//time in min from 1970
// console.log(`Time Differece in seconds between ${createDate.toLocaleString()} and current time ${Timestamp} is ${Timestamp - createDate.getTime()}sec `);

console.log(newDate.toLocaleString('default',{
    weekday:"short",
    day:"numeric",
    month:"2-digit",
    year:"numeric",
    timeZoneName:"short",
    hour:"2-digit",
    minute:"numeric",
    second:"2-digit"
}))