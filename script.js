// Linkdoni Kermanshah

document.addEventListener("DOMContentLoaded", () => {

  // انیمیشن کارت‌ها
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 200);
  });

  // جستجو
  const search = document.getElementById("search");

  if (search) {
    search.addEventListener("keyup", function () {

      const value = this.value.toLowerCase();

      cards.forEach(card => {

        if (card.innerText.toLowerCase().includes(value)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }

      });

    });
  }

}
