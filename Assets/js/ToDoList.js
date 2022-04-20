// check off specifif todos by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (e) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    }); //
  e.stopPropagation(); //stops event bubbling
});
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      '<li> <span><i class="fa-solid fa-trash-can"></i></span> ' +
        todoText +
        "</li>"
    );
  }
});
// onclick better than click because it will also work for future elements.

$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});

window.onload = function () {
  document.getElementById("btn").addEventListener("click", (e) => {
    e.preventDefault();
    const pdf = this.document.getElementById("container");
    html2pdf().from(pdf).save();
  });
};
