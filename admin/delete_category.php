<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $categoryId = $_POST['categoryId'];

    // TODO: Validate and sanitize input data as needed

    // Perform database delete operation
    require_once 'connect.php';

    $query = $db->prepare("DELETE FROM category WHERE id=?");
    $query->execute([$categoryId]);

    echo "Category deleted successfully!";
}
?>
