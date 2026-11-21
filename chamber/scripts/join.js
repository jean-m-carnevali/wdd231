const membershipModal = document.querySelectorAll(".membership-modal");

membershipModal.forEach((button) => {
    button.addEventListener("click", (event) => {
        const modal = document.querySelector(button.getAttribute("href"));
        modal.showModal();
    });
});

const modals = document.querySelectorAll("dialog");

modals.forEach((modal) => {
    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.close();
    });
});

const timestamp = document.querySelector("#timestamp");
timestamp.value = new Date().toLocaleString();