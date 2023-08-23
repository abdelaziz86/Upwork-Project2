<?php
// Replace with your database connection details
require_once 'connect.php' ; 

// Retrieve all categories from the database
$query = $db->prepare("SELECT * FROM category");
$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);

// Send categories as JSON response
header('Content-Type: application/json');
echo json_encode($categories);
?>
