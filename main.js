//Search filter
const search = document.getElementById("search");
const name = document.querySelectorAll(".flower h2");

//A better way to filter through the flowers
search.addEventListener("keyup", filterFlowers);


function filterFlowers(e) {
    const text = e.target.value.toLowerCase();
    //console.log(name[0]);
    name.forEach(function(flower) {
        const items = flower.firstChild.textContent;
        if (items.toLowerCase().indexOf(text) != -1) {
            flower.parentElement.parentElement.style.display = "block";
        } else {
            flower.parentElement.parentElement.style.display = "none";
        }
    })
}
