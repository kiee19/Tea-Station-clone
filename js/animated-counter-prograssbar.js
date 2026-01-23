/**
 * jQuery Animated Progressbar
 * Author: shakibdshy<shakibdshy@gmail.com>
 * Author URL: https://github.com/shakibdshy
 * Version: 1.0.0
 */

// (function ($) {
//   "use strict";

//   // Animated Prograssbar
//   $("[progress-bar]").each(function () {
//     $(this)
//       .find(".progress-fill")
//       .animate(
//         {
//           width: $(this).attr("data-percentage"),
//         },
//         2000,
//       );

//     $(this)
//       .find(".progress-number-mark")
//       .animate(
//         { left: $(this).attr("data-percentage") },
//         {
//           duration: 2000,
//           step: function (now, fx) {
//             var data = Math.round(now);
//             $(this)
//               .find(".percent")
//               .html(data + "%");
//           },
//         },
//       );
//   });
// })(jQuery);

// $(function () {
//   function animateProgress($context, duration) {
//     $context.find("[progress-bar]").each(function () {
//       var $bar = $(this);
//       var percent = $bar.attr("data-percentage");

//       $bar.find(".progress-fill").animate({ width: percent }, duration);

//       $bar.find(".progress-number-mark").animate(
//         {
//           left: percent,
//         },
//         {
//           duration,
//           step: function (now) {
//             var data = Math.round(now);

//             $(this)
//               .find(".percent")
//               .html(data + "%");
//           },
//         },
//       );
//     });
//   }

//   animateProgress($("#firstbar"), 1000);

//   $(".slider").on("afterChange", function (event, slick, currentSlide) {
//     var $current = $(slick.$slides.get(currentSlide));

//     $current.find("[progress-bar").each(function () {
//       $(this).find(".progress-fill").css({ width: 0 });
//       $(this).find(".progress-number-mark").css({ left: 0 });
//     });

//     animateProgress($current, 1000);
//   });
// });

// js/animated-counter-prograssbar.js
$(function () {
  function animateProgress($context, duration) {
    $context.find("[progress-bar]").each(function () {
      const $bar = $(this);
      const percent = $bar.attr("data-percentage"); // ví dụ "90%"

      // Thanh màu chạy
      $bar.find(".progress-fill").animate({ width: percent }, duration);

      // Số phần trăm + vị trí chấm
      $bar.find(".progress-number-mark").animate(
        { left: percent },
        {
          duration: duration,
          step: function (now) {
            const val = Math.round(now);
            $(this)
              .find(".percent")
              .html(val + "%");
          },
        },
      );
    });
  }

  // Lần đầu: animate nhóm đầu tiên
  animateProgress($("#firstbar"), 1000);

  // Mỗi khi Slick đổi slide
  $(".slider").on("afterChange", function (event, slick, currentSlide) {
    const $current = $(slick.$slides.get(currentSlide));

    // Reset tất cả progress bar trong slide hiện tại
    $current.find("[progress-bar]").each(function () {
      $(this).find(".progress-fill").css("width", 0);
      $(this).find(".progress-number-mark").css("left", 0);
      $(this).find(".percent").html("0%");
    });

    // Animate lại
    animateProgress($current, 1000);
  });
});
