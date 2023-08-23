<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $productId = $_POST['editProductId'];
    $name = $_POST['editName'];
    $description = $_POST['editDescription'];

    // TODO: Validate and sanitize input data as needed

    // Handle the image upload
    if (isset($_FILES['editImage']) && !empty($_FILES['editImage']['name'])) {
        // Delete the old image file
        require_once 'connect.php';
        $oldImageQuery = $db->prepare("SELECT image FROM product WHERE id = ?");
        $oldImageQuery->execute([$productId]);
        $oldImage = $oldImageQuery->fetch(PDO::FETCH_ASSOC);
        if ($oldImage) {
            $oldImagePath = 'images/' . $oldImage['image'];
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }
        }

        // Upload the new image
        $newImage = $_FILES['editImage'];
        $newImagePath = 'images/' . $newImage['name'];
        move_uploaded_file($newImage['tmp_name'], $newImagePath);

        // Update the product with the new image path
        $query = $db->prepare("UPDATE product SET name=?, description=?, image=? WHERE id=?");
        $query->execute([$name, $description, $newImage['name'], $productId]);
    } else {
        // No new image uploaded, only update text fields
        require_once 'connect.php';
        $query = $db->prepare("UPDATE product SET name=?, description=? WHERE id=?");
        $query->execute([$name, $description, $productId]);
    }

    echo "Product updated successfully!";
}
?>
