// Simulating response from server
function showTopBar() {
  let country = "Czech Republic";
  let vat = 21;
  setTimeout(() => {
    document.querySelector(
      "section.country-bar"
    ).innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;
    document.querySelector("section.country-bar");
  }, 1000);
}

showTopBar();
