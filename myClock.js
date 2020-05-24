let months = document.getElementById('month');
let dates = document.getElementById('date');
let hours = document.getElementById('hour');
let minutes = document.getElementById('minute');
let seconds = document.getElementById('second');

initMonths = () => {
  for (let i = 0; i <= 11; i++) {
    if (i < 9) {
      months.innerHTML += `<span>0${i + 1}月<span>`;
    } else {
      months.innerHTML += `<span>${i + 1}月<span>`;
    }
    months.children[i].style.transform=`rotate(${30 * i}deg) translateX(50px)` ;
  }
}

initDates = () => {
  for (let i = 0; i <= 30; i++) {
    if (i < 9) {
      dates.innerHTML += `<span>0${i + 1}日<span>`;
    } else {
      dates.innerHTML += `<span>${i + 1}日<span>`;
    }
    dates.children[i].style.transform=`rotate(${360 / 31 * i}deg) translateX(100px)` ;
  }
}

initHours = () => {
  for (let i = 0; i <= 23; i++) {
    if (i <= 9) {
      hours.innerHTML += `<span>0${i}时<span>`;
    } else {
      hours.innerHTML += `<span>${i}时<span>`;
    }
    hours.children[i].style.transform = `rotate(${15 * i}deg) translateX(150px)`;
  }
}

initMinutes = () => {
  for (let i = 0; i <= 59; i++) {
    if (i <= 9) {
      minutes.innerHTML += `<span>0${i}分<span>`;
    } else {
      minutes.innerHTML += `<span>${i}分<span>`;
    }
    minutes.children[i].style.transform=`rotate(${6*i}deg) translateX(200px)`;
  }
}

initSeconds = () => {
  for (let i = 0; i <= 59; i++) {
    if (i <= 9) {
      seconds.innerHTML += `<span>0${i}秒<span>`;
    } else {
      seconds.innerHTML += `<span>${i}秒<span>`;
    }
    seconds.children[i].style.transform=`rotate(${6*i}deg) translateX(250px)` ;
  }
}

rotateTime = (box, deg) => {
  box.style.transform = `rotate(${deg}deg)`;
};

getStyle = (currentMonth, currentDate, currentHour, currentMinute, currentSecond) => {
  months.children[currentMonth].style.color = 'white';
  dates.children[currentDate].style.color = 'white';
  hours.children[currentHour].style.color = 'white';
  minutes.children[currentMinute].style.color = 'white';
  seconds.children[currentSecond].style.color = 'white';
}

removeStyle = (currentMonth, currentDate, currentHour, currentMinute, currentSecond) => {
  try {
    months.children[currentMonth - 1].style.color = '#8a8a8a';
    dates.children[currentDate - 1].style.color = '#8a8a8a';
    hours.children[currentHour - 1].style.color = '#8a8a8a';
    minutes.children[currentMinute - 1].style.color = '#8a8a8a';
    seconds.children[currentSecond - 1].style.color = '#8a8a8a';
  } catch(error) {
    months.lastElementChild.style.color = '#8a8a8a';
    dates.lastElementChild.style.color = '#8a8a8a';
    hours.lastElementChild.style.color = '#8a8a8a';
    minutes.lastElementChild.style.color = '#8a8a8a';
    seconds.lastElementChild.style.color = '#8a8a8a';
  }
}

showTime = () => {
  initMonths();
  initDates();
  initHours();
  initMinutes();
  initSeconds();
  setInterval(() => {
    let time = new Date();
    let currentMonth = time.getMonth();
    let currentDate = time.getDate();
    let currentHour = time.getHours();
    let currentMinute = time.getMinutes();
    let currentSecond = time.getSeconds();
    getStyle(currentMonth, currentDate, currentHour, currentMinute, currentSecond);
    rotateTime(month, -30 * currentMonth);
    rotateTime(date, -360 / 31 * currentDate);
    rotateTime(hour, -15 * currentHour);
    rotateTime(minute, -6 * currentMinute);
    rotateTime(second, -6 * currentSecond);
    removeStyle(currentMonth, currentDate, currentHour, currentMinute, currentSecond);
  },1000)
}

showTime();