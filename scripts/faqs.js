const faqs = document.querySelectorAll(".faq-item");
    
faqs.forEach(faq => {
    const question = faq.querySelector(".faq-question");
    const answer = faq.querySelector(".faq-answer");
    const icon = faq.querySelector(".icon");

    question.addEventListener("click", () => {
        const isOpen = answer.style.display === "block";

        // Cerrar todos
        document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
        document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("open"));
        document.querySelectorAll(".icon").forEach(i => i.textContent = "+");

        // Abrir el clicado si no estaba abierto
        if (!isOpen) {
            answer.style.display = "block";
            question.classList.add("open");
            icon.textContent = "−";
        }
    });
});