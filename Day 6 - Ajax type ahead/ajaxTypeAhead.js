const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

fetch(endpoint)
  .then((bulk) => bulk.json())
  .then((data) => (cities = data));

const input = document.querySelector("input");

input.addEventListener("change", inputChange);

input.addEventListener("keyup", inputChange);

function findMatches(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

const ul = document.querySelector(".ul-li");

function inputChange() {
  const matchArray = findMatches(this.value, cities);

  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="h1">${this.value}</span>`
      );
      return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numbersWithCommas(
                  place.population
                )}</span>
            </li>
        `;
    })
    .join("");

  ul.innerHTML = html;
}

function numbersWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
