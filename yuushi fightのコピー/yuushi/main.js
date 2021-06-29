const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('secs');


const OpeningDay = '15 august 2021';
function countdown() {
    
    const openingDate = new Date(OpeningDay);
    const currentDate = new Date();
    
    const totalseconds = (openingDate-currentDate)/1000;
    const days = Math.floor(totalseconds/3600/24);
    const hours = Math.floor(totalseconds/3600)%24;
    const mins = Math.floor(totalseconds/60)%60;
    
    const secs = Math.floor(totalseconds)%60;
    
    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secondsEl.innerHTML = secs;
    
}
countdown();

setInterval(countdown,1000);

var app = new Vue({
   el: '#app',
   data() {
       return {
           white: false,
           unko: false,
       };
  },
  methods: {
    sikko_1() {
      this.unko = !this.unko
    },
    sikko_2() {
      this.white = !this.white
        
    }
  }
});