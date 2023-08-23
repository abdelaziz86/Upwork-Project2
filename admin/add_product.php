<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];
    $category_name = $_POST['category_name'];

    // Handle the image upload
    $image = $_FILES['image'];
    $imagePath = 'images/' . $image['name'];
    move_uploaded_file($image['tmp_name'], $imagePath);

    // TODO: Validate and sanitize input data as needed

    // Replace with your database connection details
    require_once 'connect.php';

    // Prepare and execute the SQL query to insert a new product
    $query = $db->prepare("INSERT INTO product (name, description, image, category_name) VALUES (?, ?, ?, ?)");
    if ($query->execute([$name, $description, $image['name'], $category_name])) {
        echo "Product added successfully!";
    } else {
        echo "Failed to add product.";
    }
}

?>
