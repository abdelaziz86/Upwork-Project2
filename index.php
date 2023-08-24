<?php 
require_once 'admin/connect.php';

// Retrieve all products from the database
$query = $db->prepare("SELECT * FROM product");
$query->execute();
$products = $query->fetchAll(PDO::FETCH_ASSOC);

$query = $db->prepare("SELECT * FROM category ORDER BY name");
$query->execute();
$categories = $query->fetchAll(PDO::FETCH_ASSOC);


?>


<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Vipin</title>
	
	
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script> 

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm" crossorigin="anonymous"></script>

	<link rel="stylesheet" href="stylesheet.css"> 
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Karla:ital,wght@1,200&family=Lobster&family=Roboto:wght@300&display=swap" rel="stylesheet">


    <style> 
    
    </style> 

</head>
<body style="margin: 0px; padding : 0px ; ">

 





<div class="row">

  <!-- =============== PART ON THE LEFT ================ --> 
  <div class="col-md-5">
      <div class="divPart1">

        <div class="text1Part1 animate-onload">
            <?php echo $categories[0]['title'] ;  ?>
        </div>

        <div class="text2Part1 animate-onload">
            <?php echo $categories[0]['description'] ;  ?>    
        </div>

        <button type="button" class="btn btn-primary tryNow1 animate-onload">Try Now</button>
        <br>
        <button type="button" class="btn btn-outline-primary tryNow2 animate-onload">Next</button>
    </div>
  </div>


<!-- ================= PART ON THE RIGHT ================== -->
  <div class="col-md-7"> 
    <center>
    <div class="divPart2"> 


         

                <!-- ===== SUB CATEGORIES 1 ==== -->
                <?php 
                    $total = 1 ; 
                    foreach ($categories as $category) { ?>
                    <div class="subcategories-container">
                        <div class="subcategories <?php echo 'subcategories'.$total ;  ?>" style="margin-top: 30px">
                            <?php
                                $count = 0 ; 
                                foreach ($products as $product) {
                                    if ($product['category_name'] == $category['name']) {
                                        
                                        if ($count == 0) {
                                            echo '<a class="subcategory-link firstSub'.$total.'" href="" data-subcategory="'.$product['name'].'">'.$product['name'].'</a>';

                                        } else {
                                            echo '<a class="subcategory-link" href="" data-subcategory="'.$product['name'].'">'.$product['name'].'</a>';
                                        }
                                        $count++ ;
                                    }
                                }
                            ?>

 
                            <br>
                        </div>
                    </div>
                <?php 
                        $total++  ;
                    } 
                    
                ?>
                
 

        <!-- ======== PRODUCT ========== -->
        <div class="text1parag2">
            <?php 
                foreach ($products as $product) {
                    if ($product['category_name'] == $categories[0]['name']) {
                        echo $product['name'] ;
                        break ; 
                    }
                    
                }
            ?>
        </div>
        <div class="text2parag2">
            <?php 
                foreach ($products as $product) {
                    if ($product['category_name'] == $categories[0]['name']) {
                        echo $product['description'] ;
                        break ; 
                    }
                    
                }
            ?>
        </div>

        <button type="button" class="btn btn-outline-primary tryNow3 animate-onload"  >Try Now</button>

        <br>

        <img id="imageFirst" class="image1 animate-onload" src="
                <?php 
                foreach ($products as $product) {
                    if ($product['category_name'] == $categories[0]['name']) {
                        echo "admin/images/".$product['image'] ;
                        break ; 
                    }
                    
                }
            ?>
        
        ">    
        <br>

        
    </div>
    </center>
  </div>  
</div>



<div class="footer">
    <div class="footer-left col-md-5">
        <div class="textFooter">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Microsoft_Edge_logo_%282019%29.png/800px-Microsoft_Edge_logo_%282019%29.png" style="width: 30px; margin-right: 10px;" >
            <b>Welcome to Microsoft Edge</b>
        </div>
    </div>
    <div class="footer-right col-md-7">
        <div class="categories">
            <?php
                $count = 0 ; 
                foreach ($categories as $category) { 
                    if ($count == 0) {
                        echo '<a class="category-link active" href="" data-category="'.$category['name'].'">'.$category['name'].'</a>';
                    } else {
                        echo '<a class="category-link" href="" data-category="'.$category['name'].'">'.$category['name'].'</a>';
                    }
                    $count ++ ; 
                }?>
                    
               
 

            <!-- <a class="category-link" href="" data-category="sidebar">First Category</a>
            <a class="category-link" href="" data-category="create">Second Category</a> -->
        </div>
    </div>


    <!-- <div class="dropdown">
        <span>Open Dropdown <i class="fas fa-caret-down"></i></span>
        <div class="dropdown-content">
            <a class="category-link" href="" data-category="sidebar">First Category</a>
            <br>
            <a class="category-link" href="" data-category="create">Second Category</a>
            <br> 
        </div>
    </div> -->
</div>



<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
 
<script type="text/javascript" src="script.js"></script>

</body>
</html>