async function getCars() {
    const resp = await fetch("http://localhost:3000/cars");
    const cars = await resp.json();
    return cars;
}

document.addEventListener("DOMContentLoaded", async () => {
    const cars = await getCars();
    const carsList = document.getElementById("#carsList");
    const htmlToAdd = cars.map(c => `<li>${c.manufacturer} ${c.model}</li>`).join('');
    carsList.innerHTML += htmlToAdd;
});