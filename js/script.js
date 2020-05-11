

$(document).ready(function () {
  $("li").click((e) => {
    $("li.active").removeClass("active");
    $(e.currentTarget).addClass("active");
  });
});
