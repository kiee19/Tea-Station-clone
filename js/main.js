import { partnerLogoBasePath, productList, partnerLogos } from "./data.js";

/**
 * Partner logos
 *
 */
$(function () {
  const container = document.getElementById("partner-logo-list");

  partnerLogos.forEach((logo) => {
    const img = document.createElement("img");

    img.src = partnerLogoBasePath + logo.fileName;
    img.alt = logo.alt;
    img.classList.add("logo-ticker-image");
    container.appendChild(img);
  });
});
