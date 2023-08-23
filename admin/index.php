<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $name = $_POST['name'];
    $title = $_POST['title'];
    $description = $_POST['description'];

    // TODO: Validate and sanitize input data as needed

    // Perform database operations to add the new category
    // Replace with your database connection and query
    $db = new PDO('mysql:host=localhost;dbname=vipin', 'root', '');
    $query = $db->prepare("INSERT INTO category (name, title, description) VALUES (?, ?, ?)");
    $query->execute([$name, $title, $description]);

    echo "Category added successfully!";
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Category CRUD</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
  <h2>Category Management</h2>
  <button class="btn btn-primary" data-toggle="modal" data-target="#addCategoryModal">Add Category</button>
  <table class="table mt-3">
    <thead>
      <tr>
        <th>Name</th>
        <th>Title</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody id="categoryTableBody">
      <!-- Categories will be listed here -->
    </tbody>
  </table>
</div>

<!-- Modal for adding a new category -->
<div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="addCategoryModalLabel">Add New Category</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div class="modal-body">
        <form id="categoryForm">
            <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" name="name" placeholder="Category Name" required>
            </div>
            <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" name="title" placeholder="Category Title" required>
            </div>
            <div class="form-group">
            <label for="description">Description</label>
            <textarea class="form-control" id="description" name="description" placeholder="Category Description" rows="3" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" name="addCategory">Add Category</button>
        </form>
    </div>




    </div>
  </div>
</div>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
<script src="scripts.js"></script> <!-- Include your JavaScript file -->
</body>
</html>
