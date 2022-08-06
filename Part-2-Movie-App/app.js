// When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.

$("#submit").on("click", function (e) {
  e.preventDefault();

  // get values from inputs and put them in variables
  let movieTitle = $("#movie-title").val();
  let rating = $("#rating").val();

  // append movie title, rating, and remove button to the #movie-list div
  $("#movie-list").append(
    `<p class="listItem">Title: ${movieTitle}, Rating: ${rating} <button class="remove-button">Remove</button></p>`
  );

  // clear inputs
  $("#movie-title").val("");
  $("#rating").val("");

  // When the button to remove is clicked, remove each title and rating from the DOM.
  $(".remove-button").on("click", function () {
    $(this).closest("p").remove();
  });
});
