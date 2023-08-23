$(document).ready(function () {
  // Show the modal when the "Add Category" button is clicked
  $("#addCategoryModal").on("show.bs.modal", function () {
    // Clear any existing form data
    $("#categoryForm")[0].reset();
  });

  // Handle the form submission to add a new category
  $("#categoryForm").submit(function (e) {
    e.preventDefault();

    // Collect form data
    var formData = $(this).serialize();

    // Make an AJAX POST request to add the new category
    $.ajax({
      url: "add_category.php", // Replace with the path to your PHP script
      method: "POST",
      data: formData,
      success: function (response) {
        // Handle the response (e.g., refresh category list)
        console.log(response);
        $("#addCategoryModal").modal("hide"); // Close the modal
      },
    });
  });
    
    
    
    
    
    
    
    
    
    
    
});
