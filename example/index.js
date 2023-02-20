function printTime(){
    console.log(new Date())
    setTimeout(function() {printTime()}, 5000);
}
printTime();