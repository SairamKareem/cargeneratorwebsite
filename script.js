function generateCar() {
    const name = document.getElementById("name").value.trim();
    const rideStyle = document.getElementById("rideStyle").value;
    const carType = document.getElementById("carType").value;
    const bodyType = document.getElementById("bodyType").value;
    const carImage = document.getElementById("carImage");

    let carRecommendation = "";
    let carImgSrc = "";

    // Special conditions for specific names
    const lowerName = name.toLowerCase();

    if (lowerName === "taaj") {
        carRecommendation = "Subaru WRX STI with gold alloys";
        carImgSrc = "images/subaru-wrx-sti.jpg";
    } else if (lowerName === "taajinder") {
        carRecommendation = "Ford Puma";
        carImgSrc = "images/ford-puma.jpg";
    } else if (lowerName === "taajinder sandhu") {
        carRecommendation = "Star Destroyer";
        carImgSrc = "images/star-destroyer.jpg";
    } else {
        // Normal car generation logic
        const cars = {
            normal: {
                hatchback: { comfort: "Audi A3", sporty: "VW Golf GTI", economical: "Ford Focus" },
                suv: { comfort: "Toyota RAV4", sporty: "BMW X3", economical: "Honda CR-V" },
                coupe: { comfort: "Ford Mustang", sporty: "Chevrolet Camaro", economical: "Mazda MX-5" },
                sedan: { comfort: "Honda Accord", sporty: "Nissan Maxima", economical: "Toyota Camry" }
            },
            sporty: {
                hatchback: { comfort: "Mini Cooper S", sporty: "Hyundai i30 N", economical: "Volkswagen Polo GTI" },
                suv: { comfort: "Porsche Macan", sporty: "Lamborghini Urus", economical: "Audi SQ5" },
                coupe: { comfort: "Alfa Romeo Giulia", sporty: "BMW M3", economical: "Subaru WRX" },
                sedan: { comfort: "Tesla Model S", sporty: "Lamborghini Aventador", economical: "Porsche Panamera" }
            },
            hyper: {
                hatchback: { comfort: "Mercedes-AMG A45", sporty: "Audi RS3", economical: "Volkswagen Golf R" },
                suv: { comfort: "Bentley Bentayga", sporty: "Lamborghini Urus", economical: "Tesla Model X Plaid" },
                coupe: { comfort: "Aston Martin DB11", sporty: "Ferrari 488", economical: "Porsche 911 Turbo S" },
                sedan: { comfort: "Tesla Model S Plaid", sporty: "Lamborghini Aventador", economical: "Porsche Panamera Turbo S" }
            }
        };

        if (cars[carType] && cars[carType][bodyType] && cars[carType][bodyType][rideStyle]) {
            carRecommendation = cars[carType][bodyType][rideStyle];
            carImgSrc = `images/${carRecommendation.toLowerCase().replace(/\s/g, "-")}.jpg`;
        } else {
            carRecommendation = "No matching car found.";
            carImgSrc = ""; // Hide image if no match
        }
    }

    // Display result with user’s name
    document.getElementById("car-name").textContent = 
        name ? `${name}'s car is ${carRecommendation}` : carRecommendation;

    carImage.src = carImgSrc;
    carImage.style.display = carImgSrc ? "block" : "none";
}