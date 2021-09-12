const gradient_code = document.querySelector("h4");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const gradient = document.getElementById("gradient");

const setGradient = () => {
    const background_gradient = `linear-gradient(45deg, ${color1.value}, ${color2.value})`;
    gradient.style.background = background_gradient;
    gradient_code.textContent = background_gradient + ';';
}

color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
setGradient();