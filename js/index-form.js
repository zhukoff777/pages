$(document).ready(function () {
  $("#index-form").submit(function () {
    $.ajax({
      type: "POST",
      url: "index-form.php",
      data: $(this).serialize(),
    }).done(function () {
      window.location = "/page-1.html";
    });
    return false;
  });
});