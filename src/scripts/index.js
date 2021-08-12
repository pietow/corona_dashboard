// api url
const api_cases = "https://api.corona-zahlen.org/germany/history/cases/60";
const api_deaths = "https://api.corona-zahlen.org/germany/history/deaths/60";
const api_vac = "https://api.corona-zahlen.org/vaccinations/history/60";
function getVac(item) {
    return item.secondVaccination;
}
function getCases(item) {
    return item.cases;
}
function getDeaths(item) {
    return item.deaths;
}
function getDate(item) {
    date = new Date(item.date);
    return date;
}

// Defining async function
async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    var y = data.data;
    // var cases = data.data.map(getCases);
    // var deaths = data.data.map(getDeaths);
    // var date = data.data.map(getDate);
    var x = data.data;
    return [y, x];
}
// Calling that async function
(async () => {
    // ############### DEATH ########
    // ###############  get Data from RKI #######
    var response = await getapi(api_deaths);
    var date = response[1].map(getDate);
    var deaths = response[0].map(getDeaths);



    //SETUP
    var labels = date; //time axis

    var data = {
        labels: labels,
        datasets: [
            {
                label: "Corona-Deaths in Germany",
                backgroundColor: "black",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: deaths,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.2,
            },
        ],
    };

    Chart.defaults.color = "white";
    var ctx = document.getElementById("DeathsChart").getContext("2d");
    Chart.defaults.global.defaultFontColor = '#fff';
    //CONFIG
    var myChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
            scaleFontColor: "#FFFFFF",
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "white",
                    },
                },
            },
            scales: {
                xAxes: [
                    {
                        type: "time",
                        time: {
                            unit: "week",
                        },
                    },
                ],
            },
        },
    });

    console.log(myChart);
    //########## CASES #############
    // ###############  get Data from RKI #######
    var response = await getapi(api_cases);
    var date = response[1].map(getDate);
    var cases = response[0].map(getCases);
    document.getElementById('middle').innerHTML = deaths[deaths.length-1] + " deaths and " + cases[cases.length-1] + " cases";
    //SETUP
    var labels = date; //time axis

    var data = {
        labels: labels,
        datasets: [
            {
                label: "Corona-Cases in Germany",
                backgroundColor: "black",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: cases,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.2,
            },
        ],
    };

    Chart.defaults.color = "white";
    var ctx = document.getElementById("CasesChart").getContext("2d");
    //CONFIG
    var casesChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
            scaleFontColor: "#FFFFFF",
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "white",
                    },
                },
            },
            scales: {
                xAxes: [
                    {
                        type: "time",
                        time: {
                            unit: "week",
                        },
                    },
                ],
            },
        },
    });

    console.log(myChart);
    //########## Vac #############
    // ###############  get Data from RKI #######
    var response = await getapi(api_vac);
    var date = response[1].history.map(getDate);
    var vac = response[0].history.map(getVac);
    console.log(vac);
    //SETUP
    var labels = date; //time axis

    var data = {
        labels: labels,
        datasets: [
            {
                label: "second Vaccinations in Germany",
                backgroundColor: "black",
                hoverBorderColor: "rgba(255,99,132,1)",
                data: vac,
                fill: false,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.2,
            },
        ],
    };

    Chart.defaults.color = "white";
    var ctx = document.getElementById("VacChart").getContext("2d");
    Chart.defaults.global.defaultFontColor = '#fff';
    //CONFIG
    var myChart = new Chart(ctx, {
        type: "line",
        data: data,
        options: {
            scaleFontColor: "#FFFFFF",
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: "white",
                    },
                },
            },
            scales: {
                xAxes: [
                    {
                        type: "time",
                        time: {
                            unit: "week",
                        },
                    },
                ],
            },
        },
    });

})();
