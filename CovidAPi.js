const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "630ceab4a3mshcfba19e4f804eefp1ef079jsn1726396e50ca",
    "X-RapidAPI-Host": "corona-virus-world-and-india-data.p.rapidapi.com",
  },
};

fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", options)
  .then((response) => response.json())
  .then((response) => countryData(response["countries_stat"]))
  .catch((err) => console.error(err));

function countryData(country_data) {
  let body = document.querySelector("tbody");
  for (const countryText of country_data) {
    let countryRow = document.createElement("tr");
    body.appendChild(countryRow);
    for (const countryInfo in countryText) {
      let bodyElement = document.createElement("td");
      bodyElement.textContent = countryText[countryInfo];
      countryRow.appendChild(bodyElement);
    }
  }
}
