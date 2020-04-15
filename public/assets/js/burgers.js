// Wait for load
$(function () {
	// When form is submitted
	$("#newBurger").on("submit", (event) => {
		event.preventDefault();
		const newBurger = {
			burger: $("#burgerName").val().trim(),
		};
		console.log("newBurger" + JSON.stringify(newBurger));
		// Send the POST request.
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger,
		}).then(() => {
			console.log("created new burger");
			// Reload page
			location.reload();
		});
	});
});
