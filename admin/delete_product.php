<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Collect form data
    $productId = $_POST['productId'];

    // TODO: Validate and sanitize input data as needed

    // Perform database delete operation
    require_once 'connect.php';

    // Retrieve the image filename before deletion
    $query = $db->prepare("SELECT image FROM product WHERE id = ?");
    $query->execute([$productId]);
    $product = $query->fetch(PDO::FETCH_ASSOC);

    // Delete the product from the database
    $query = $db->prepare("DELETE FROM product WHERE id = ?");
    $query->execute([$productId]);

    if ($query->rowCount() > 0) {
        // Remove the associated image from the "images" folder
        $imagePath = 'images/' . $product['image'];
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }

        echo "Product deleted successfully!";
    } else {
        echo "Failed to delete product.";
    }
}
?>
