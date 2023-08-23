<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $title = $_POST['title'];
    $description = $_POST['description'];

    // TODO: Validate and sanitize input data as needed

    // Replace with your database connection details
    $db = new PDO('mysql:host=localhost;dbname=your_db_name', 'username', 'password');

    // Prepare and execute the SQL query to insert a new category
    $query = $db->prepare("INSERT INTO category (name, title, description) VALUES (?, ?, ?)");
    if ($query->execute([$name, $title, $description])) {
        echo "Category added successfully!";
    } else {
        echo "Failed to add category.";
    }
}
?>
