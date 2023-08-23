<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $categoryId = $_POST['editCategoryId'];
    $name = $_POST['editName'];
    $title = $_POST['editTitle'];
    $description = $_POST['editDescription'];

    // TODO: Validate and sanitize input data as needed

    // Perform database update operation
    require_once 'connect.php';

    $query = $db->prepare("UPDATE category SET name=?, title=?, description=? WHERE id=?");
    $query->execute([$name, $title, $description, $categoryId]);

    echo "Category updated successfully!";
}
?>
