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
            '<button class="btn btn-info edit-button" data-toggle="modal" data-target="#editCategoryModal" data-id="' +
            category.id +
            '"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button > ' +
            '<button class="btn btn-danger delete-button" data-id="' +
            category.id +
            '"> <i class="fa fa-trash" aria-hidden="true"></i> Delete</button>' +
            "</td>" +
            "</tr>";  
          $("#categoryTableBody").append(row);
        });

        $(".edit-button").click(function () {
          var categoryId = $(this).data("id");
          console.log("ID : " + categoryId); 
          var selectedCategory = categories.find(function (category) {
            console.log("NOW : " + category); 
            return category.id == categoryId;
          });

          console.log("selected : "+selectedCategory);
          if (selectedCategory) {
            populateEditForm(selectedCategory);
            $("#editCategoryModal").modal("show");
          }
        });



        $(".delete-button").click(function () {
          var categoryId = $(this).data("id");

          // Confirm deletion
          if (confirm("Are you sure you want to delete this category?")) {
            // Make an AJAX POST request to delete the category
            $.ajax({
              url: "delete_category.php", // Replace with the path to your PHP script
              method: "POST",
              data: { categoryId: categoryId }, // Pass the categoryId to the script
              success: function (response) {
                // Handle the response (e.g., refresh category list)
                console.log(response);
                loadCategories();
              },
            });
          }
        });







      },
    });
  }


  $("#editCategoryForm").submit(function (e) {
    e.preventDefault();

    // Collect form data
    var formData = $(this).serialize();

    // Make an AJAX POST request to update the category
    $.ajax({
      url: "update_category.php", // Replace with the path to your PHP script
      method: "POST",
      data: formData,
      success: function (response) {
        // Handle the response (e.g., refresh category list)
        console.log(response);
        loadCategories();

        $("#editCategoryModal").modal("hide"); // Close the modal
      },
    });
  });



    // ... Existing code ...

    // Call the loadCategories function when the page loads
    loadCategories();
});



 
