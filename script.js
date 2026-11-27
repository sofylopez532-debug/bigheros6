const teamGalleryToggle = document.querySelector(".team-gallery-toggle");
const teamGallery = document.querySelector("#team-gallery");

teamGalleryToggle.addEventListener("click", () => {
    const isExpanded = teamGalleryToggle.getAttribute("aria-expanded") === "true";

    teamGalleryToggle.setAttribute("aria-expanded", String(!isExpanded));
    teamGallery.hidden = isExpanded;
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !teamGallery.hidden) {
        teamGallery.hidden = true;
        teamGalleryToggle.setAttribute("aria-expanded", "false");
        teamGalleryToggle.focus();
    }
});