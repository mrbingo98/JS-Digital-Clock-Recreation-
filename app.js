
function init() {

    let now = new Date(),
    year = document.getElementById('year'),
    month = document.getElementById('mon'),
    day = document.getElementById('day'),
    dayWeek = document.getElementById('week-day'),
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    y = now.getFullYear(),
    mon = months[now.getMonth() - 1],
    d = now.getDate()
    year.textContent = y
    month.textContent = mon
    day.textContent = d
    dayWeek.textContent = days[now.getDay()]
}
init()

function clock (){
    let hours = document.getElementById('hou'),
    minutes = document.getElementById('min'),
    seconds = document.getElementById('sec')
    // amdiv = document.getElementById('am')
    let h, m, s,time;
    time = new Date();
    h = time.getHours()
    // h = h>12?h-12:h
    h = h<10?('0'+h) : h
    m = time.getMinutes()
    m = m<10?('0'+m) : m
    s = time.getSeconds()
    s = s<10?('0'+s) : s
    // am = h>12?'pm':'am'
    hours.textContent = h===0?'00':h
    minutes.textContent = m===0?'00':m
    seconds.textContent = s===0?'00':s
    // amdiv.textContent = am
}
setInterval(clock, 1000)