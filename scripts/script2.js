document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("Choosed_Park");
  const list = document.getElementById("Park_Selector");
  const items = list.querySelectorAll(".item");

  btn.addEventListener("click", () => {
    list.style.display = getComputedStyle(list).display === "none" ? "flex" : "none";
  });

  items.forEach(item => {
    item.addEventListener("click", () => {
      btn.textContent = item.textContent;
      items.forEach(i => i.classList.remove("choosed"));
      item.classList.add("choosed");
      list.style.display = "none";
    });
  });


  const btn_entradas = document.getElementById("btn_entradas");

  btn_entradas.addEventListener("click", () => {
    window.document.open("entradas.html");
  })
});