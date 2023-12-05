let cars = [
    {
    car: "Mitsubishi Colt",
    }
];

function initialize(){
    const CAR_FORM = document.getElementById("car-form");
    CAR_FORM.addEventListener("submit", addCar);

    showCars();
}

function addCar(event){
    event.preventDefault();

    const CAR = event.target.car.value;

    cars.push({
    car: CAR,
    })

    showCars();
}

function showCars(){
    const CAR_LIST = document.getElementById("car-list"); 

    CAR_LIST.innerHTML = "";

    for(let i = 0; i < cars.length; i++){
    CAR_LIST.innerHTML += `<li>${cars[i].car}</li>`;
    }
    
}

initialize();