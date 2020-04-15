// Wait for load
$(function () {
	// When new burger is submitted
	$("#newBurger").on("submit", (event) => {
		event.preventDefault();
		const newBurger = {
			burger: $("#burgerName").val().trim(),
		};
		// Send the POST request
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
		}).then(() => {
			console.log("created new burger");
			// Reload page
			location.reload();
		});
	});

	// When burger is devoured
	$(".devourButton").on("click", function (event) {
		const id = $(this).data("id");
		const devouredBurger = {
			devoured: true,
		};
		// Send the PUT request
		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devouredBurger,
		}).then(() => {
			console.log("devoured a burger");
			// Reload the page
			location.reload();
		});
	});
});
