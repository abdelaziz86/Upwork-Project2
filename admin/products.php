<?php
session_start();
if (!$_SESSION['user']) {
    header('Location: login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Products Management</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script>
</head>
<body>

<div  style="margin-bottom: 20px !important; margin-top: 10px; margin-left: 10px">
    Welcome back <?php echo $_SESSION['user']['username']; ?> ,
    <a href="logout.php">Logout. <i class="fa fa-sign-out" aria-hidden="true"></i></a>
</div>

<div class="container mt-5" style="margin-top: 60px !important;">
  <h2>Products Management</h2>
  <button class="btn btn-primary" data-toggle="modal" data-target="#addProductModal">
    <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Product</button>

    <a href="index.php" class="btn btn-info">
        <i class="fa fa-list" aria-hidden="true"></i>  
        Categories Management
    </a>

  <table class="table mt-3">
    <thead>
      <tr> 
        <th>Image</th>
        <th>Name</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody id="productTableBody">
    <!-- Products will be listed here dynamically -->
    </tbody>

  </table>
</div>

<!-- Modal for adding a new product -->
<div class="modal fade" id="addProductModal" tabindex="-1" aria-labelledby="addProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addProductModalLabel">Add New Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div class="modal-body">
        <form id="productForm"  enctype="multipart/form-data">
            <div class="form-group">
            <label for="productName">Name</label>
            <input type="text" class="form-control" id="productName" name="name" placeholder="Product Name" required>
            </div>
            <div class="form-group">
            <label for="productDescription">Description</label>
            <textarea class="form-control" id="productDescription" name="description" placeholder="Product Description" rows="3" required></textarea>
            </div>
            <div class="form-group">
            <label for="productImage">Image</label>
            <input type="file" id="image" name="image" accept="image/*" required>
            </div>
            <button type="submit" class="btn btn-primary" name="addProduct">Add Product</button>
        </form>
    </div>
 
    </div>
  </div>
</div>









<!-- Modal for editing a product -->
<div class="modal fade" id="editProductModal" tabindex="-1" aria-labelledby="editProductModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="editProductModalLabel">Edit Product</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form id="editProductForm" enctype="multipart/form-data">
          <input type="hidden" id="editProductId" name="editProductId">
          <div class="form-group">
            <label for="editName">Name</label>
            <input type="text" class="form-control" id="editProductName" name="editName" required>
          </div>
          <div class="form-group">
            <label for="editDescription">Description</label>
            <textarea class="form-control" id="editProductDescription" name="editDescription" rows="3" required></textarea>
          </div>
          <div class="form-group">
            <label for="editImage">Image</label>
            <input type="file" id="editImage" name="editImage" accept="image/*">
          </div>
          <button type="submit" class="btn btn-primary" name="updateProduct">Update Product</button>
        </form>
      </div>
    </div>
  </div>
</div>


<!-- Similar to your edit and delete modals, create edit and delete modals for products here -->

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script> 
<script src="products.js"></script>

</body>
</html>
