<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $title = $_POST['title'];
    $description = $_POST['description'];

    // TODO: Validate and sanitize input data as needed
    //echo $name ; 
    // Replace with your database connection details
    require_once 'connect.php' ; 

    // Prepare and execute the SQL query to insert a new category
    $query = $db->prepare("INSERT INTO category (name, title, description) VALUES (?, ?, ?)");
    if ($query->execute([$name, $title, $description])) {
        echo "Category added successfully!";
    } else {
        echo "Failed to add category.";
    }
}
?>
