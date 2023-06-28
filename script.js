function calculate() {
    setInterval(() => {
        // input birthdate
        let birthdate = new Date(document.getElementById('birthdate').value);

        // getTime : returns the number of millisecounds since janury 1,1970

        let now = new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageIns = ageInMs / 1000; // to secounds
        let ageInMins = ageIns / 60; // to munites
        let ageInHrs = ageInMins / 60;
        let ageInDays = ageInHrs / 24 // dys
        let ageImMonths = ageInDays / 30.4375;
        let ageInYears = ageImMonths /12; //yers

        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#month').innerHTML = Math.floor(ageImMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHrs % 24);
        document.querySelector('#minuts').innerHTML = Math.floor(ageInMins % 60);
        document.querySelector('#seconds').innerHTML = Math.floor(ageIns % 60);
        document.querySelector('#seconds').style.borderBottom = '1px grey solid';
    }, 1000);
}

function reset() {
    window.location.reload();
}