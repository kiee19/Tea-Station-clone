import { partnerLogoBasePath, productList, partnerLogos } from "./data.js";

/**
 * Nav
 *
 */
$(function () {
  // Hide show nav
  $(".navbar").hidescroll();

  // Mobile dropdown menu
  const toggleBtn = $("#toggle_btn");
  const dropdownMenu = $(".dropdown-menu");

  toggleBtn.click(() => {
    dropdownMenu.toggleClass("open");
  });
});

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

/**
 * Products
 *
 */
// Thêm activeTab vào li đầu tiền
$("li:first").addClass("activeTab");

$("li").on("click", function () {
  $("li").removeClass("activeTab");
  $('div[id="product-tabs"] ul .r-tabs-state-active').addClass("activeTab");
});

$(function () {
  $("#product-tabs").responsiveTabs({
    animation: "slide",
  });
});
