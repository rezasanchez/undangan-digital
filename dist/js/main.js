const texts = ["Mudah", "Murah", "Cepat"];
let index = 0;
let textElement = document.getElementById("text");

function changeText() {
    index = (index + 1) % texts.length;

    gsap.to(textElement, {
        y: -20, // Naik sedikit ke atas
        opacity: 0,
        duration: 0.3,
        onComplete: function () {
            textElement.textContent = texts[index]; // Ganti teks
            gsap.fromTo(
                textElement,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5 }
            );
        },
    });
}

setInterval(changeText, 1000);
