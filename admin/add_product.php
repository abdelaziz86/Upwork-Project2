<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];

    // Handle the image upload
    $image = $_FILES['image'];
    $imagePath = 'images/' . $image['name'];
    move_uploaded_file($image['tmp_name'], $imagePath);

    //echo($name + $description+$image['name']) ; 

    // TODO: Validate and sanitize input data as needed

    // Replace with your database connection details
    require_once 'connect.php';

    // Prepare and execute the SQL query to insert a new product
    $query = $db->prepare("INSERT INTO product (name, description, image) VALUES (?, ?, ?)");
    if ($query->execute([$name, $description, $image['name']])) {
        echo "Product added successfully!";
    } else {
        echo "Failed to add product.";
    }
}
?>
