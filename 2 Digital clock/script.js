function digitalClock(){
    let date = new Date();
    let hours = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let timeFormate = 'AM'


    if(hours === 0){
        hours = 12;
    }
    if(hours > 12){
        hours = hours - 12;
        timeFormate = 'PM'
    }
    // if (hours < 10){
    //     hours = '0' + hours;
    // }

    // if (minute < 10){
    //     minute = '0' + minute;
    // }


    // if (seconds < 10){
    //     seconds = '0' + seconds;
    // }
    // উপরের কাজ টা নিছে তারনারি অপারেটর ব্যাবহার করে করা হয়েছে।
    // শুরু

    hours = hours < 10 ? '0' + hours : hours;
    minute = minute < 10 ? '0' + minute : minute;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    //শেষ

    let finalTime = `${hours}:${minute}:${seconds}`;
    document.getElementById('time').innerText = finalTime;
    document.querySelector('small').innerHTML = timeFormate;

    setInterval(() => {
        digitalClock()
    }, 1000);
}
  


digitalClock()







