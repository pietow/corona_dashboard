const api_cases = "https://api.corona-zahlen.org/germany/history/cases/60";
const api_deaths = "https://api.corona-zahlen.org/germany/history/deaths/60";
const api_vac = "https://api.corona-zahlen.org/vaccinations/history/60";

async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log('bla');
    return data.data;
}
    console.log('bla');

// Calling that async function
(async () => {
    // ############### DEATH ########
    // ###############  get Data from RKI #######
    var response = await getapi(api_deaths);
    console.log(response);


});
