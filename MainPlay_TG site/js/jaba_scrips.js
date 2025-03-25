function toggleContent() {
    const preVideoSection = document.getElementById("pre-video");
    const videoSection = document.getElementById("video");

    if (videoSection.style.display === "none") {
        videoSection.style.display = "block";
        preVideoSection.style.display = "none";
    } else {
        videoSection.style.display = "none";
        preVideoSection.style.display = "block";
    }
}