$(document).ready(function () {
  console.log("hii");
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
        loadCategories();

        $("#addCategoryModal").modal("hide"); // Close the modal
      },
    });
  }); 



  function populateEditForm(category) {
    $("#editName").val(category.name);
    $("#editTitle").val(category.title);
    $("#editDescription").val(category.description);
    // Store the category ID for updating
    $("#editCategoryId").val(category.id);
  }



  

  // Function to fetch and populate categories
  function loadCategories() {
    $.ajax({
      url: "get_categories.php",
      method: "GET",
      success: function (categories) {
        $("#categoryTableBody").empty();

        categories.forEach(function (category) {
          var row =
            "<tr>" +
            "<td>" +
            category.name +
            "</td>" +
            "<td>" +
            category.title +
            "</td>" +
            "<td>" +
            category.description +
            "</td>" +
            "<td>" +
            '<button class="btn btn-info edit-button" data-id="' +
            category.id +
            '">Edit</button>' +
            '<button class="btn btn-danger delete-button" data-id="' +
            category.id +
            '">Delete</button>' +
            "</td>" +
            "</tr>";
          $("#categoryTableBody").append(row);
        });

        $(".edit-button").click(function () {
          var categoryId = $(this).data("id");
          var selectedCategory = categories.find(function (category) {
            return category.id === categoryId;
          });
          if (selectedCategory) {
            populateEditForm(selectedCategory);
            $("#editCategoryModal").modal("show");
          }
        });
      },
    });
  }

    // ... Existing code ...

    // Call the loadCategories function when the page loads
    loadCategories();
});
