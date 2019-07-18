function showCurrentTime(){
    console.log(new Date())
}

function sleep(delay=2000){
    var startTime = Date.now()
    while(Date.now() <= (startTime + delay));
}

function showTimeAfterDelay(delay=2000){
    console.log('before sleep...');
    // console.log(delay);
    showCurrentTime()
    sleep()
    console.log('after sleep...');
    showCurrentTime();    
}

function execAfterDelay(callBackFn, delay) {
    if(typeof callBackFn !== 'function'){
        throw 'callback is not a function'
    }
    if(typeof delay !== 'number'){
        throw 'delay must be a number'
    }
    delay = Math.abs(delay)
    console.log("Going to sleep");
    
    sleep(delay)
    console.log("Nice Nap I had");
    
    callBackFn()
}

console.log("Start of script")
setTimeout(showCurrentTime, 00)
console.log("EOS");
