<?php
// Replace with your database connection details
require_once 'connect.php';

// Retrieve all products from the database
$query = $db->prepare("SELECT * FROM product");
$query->execute();
$products = $query->fetchAll(PDO::FETCH_ASSOC);

// Send products as JSON response
header('Content-Type: application/json');
echo json_encode($products);
?>
