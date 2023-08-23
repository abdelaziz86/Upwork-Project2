$(document).ready(function () {
  console.log("hii");

  // Show the modal when the "Add Product" button is clicked
  $("#addProductModal").on("show.bs.modal", function () {
    // Clear any existing form data
    $("#productForm")[0].reset();
  });

  // Handle the form submission to add a new product
  $("#productForm").submit(function (e) {
    e.preventDefault();

    // Collect form data
    var formData = new FormData(this);

    // Make an AJAX POST request to add the new product
    $.ajax({
      url: "add_product.php", // Replace with the path to your PHP script
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        // Handle the response (e.g., refresh product list)
        console.log(response);
        loadProducts();

        $("#addProductModal").modal("hide"); // Close the modal
      },
    });
  });

  function populateEditForm(product) {
    $("#editProductName").val(product.name);
    $("#editProductDescription").val(product.description);
    // Store the product ID for updating
    $("#editProductId").val(product.id);
  }

  // Function to fetch and populate products
  function loadProducts() {
    $.ajax({
      url: "get_products.php",
      method: "GET",
      success: function (products) {
        $("#productTableBody").empty();

        products.forEach(function (product) {
          var row =
            "<tr>" +
            "<td>" +
            product.id +
            "</td>" +
            "<td>" +
            product.name +
            "</td>" +
            "<td>" +
            product.description +
            "</td>" +
            "<td>" +
            '<img src="images/' +
            product.image +
            '" width="50">' +
            "</td>" +
            "<td>" +
            '<button class="btn btn-info edit-button" data-toggle="modal" data-target="#editProductModal" data-id="' +
            product.id +
            '"> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Edit</button > ' +
            '<button class="btn btn-danger delete-button" data-id="' +
            product.id +
            '"> <i class="fa fa-trash" aria-hidden="true"></i> Delete</button>' +
            "</td>" +
            "</tr>";
          $("#productTableBody").append(row);
        });

        $(".edit-button").click(function () {
          var productId = $(this).data("id");
          var selectedProduct = products.find(function (product) {
            return product.id == productId;
          });

          if (selectedProduct) {
            populateEditForm(selectedProduct);
            $("#editProductModal").modal("show");
          }
        });

        $(".delete-button").click(function () {
          var productId = $(this).data("id");

          // Confirm deletion
          if (confirm("Are you sure you want to delete this product?")) {
            // Make an AJAX POST request to delete the product
            $.ajax({
              url: "delete_product.php", // Replace with the path to your PHP script
              method: "POST",
              data: { productId: productId }, // Pass the productId to the script
              success: function (response) {
                // Handle the response (e.g., refresh product list)
                console.log(response);
                loadProducts();
              },
            });
          }
        });
      },
    });
  }

  $("#editProductForm").submit(function (e) {
    e.preventDefault();

    // Collect form data
    var formData = new FormData(this);

    // Make an AJAX POST request to update the product
    $.ajax({
      url: "update_product.php", // Replace with the path to your PHP script
      method: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function (response) {
        // Handle the response (e.g., refresh product list)
        console.log(response);
        loadProducts();

        $("#editProductModal").modal("hide"); // Close the modal
      },
    });
  });

  // Call the loadProducts function when the page loads
  loadProducts();
});
