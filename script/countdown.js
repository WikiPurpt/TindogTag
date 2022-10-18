  //COUNTDOWN TIMER

  const countdown = () => {
    const countDate = new Date('February 2 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    const textMonth = Math.floor(gap/month);
    const textDay = Math.floor((gap % month)/ day);
    const textHour = Math.floor((gap % day) / hour);

    document.querySelector(".months").innerText = textMonth;
    document.querySelector(".days").innerText = textDay;
    document.querySelector(".hours").innerText = textHour;
  };

  countdown();