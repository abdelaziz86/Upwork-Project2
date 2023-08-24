$(document).ready(function () { 
if ($(window).width() <= 768) {
    $(".footer-right .categories").html(`
        <div class="dropdown categories">
            <span>Sub Categories <i class="fa fa-caret-down" aria-hidden="true"></i></span>
            <div class="dropdown-content">
                <a class="category-link" href="" data-category="sidebar">First Category</a>
                <br>
                <a class="category-link" href="" data-category="create">Second Category</a>
                <br> 
            </div>
        </div>
    `);
  }
});






$(document).ready(function () {
  var currentIndex = 0;
  var currentCategory = 1;

  var categoryTexts = {};
  var allProducts = {};
  var allCategories = {}; 

  function fetchCategories() {
    return $.ajax({
      url: "admin/get_categories.php",
      type: "GET",
      dataType: "json",
    });
  }

  fetchCategories()
    .done(function (categories) {
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        categoryTexts[category.name] = {
          text1: category.title,
          text2: category.description,
        };
      }

      allCategories = categoryTexts; 

    })
    .fail(function (error) {
      console.error("Error fetching products:", error);
    });

  
  
  
  
  
  
  
  
  
  
  
  function swappingProducts(subcategoryClass, image, title, desc) {
    $(".subcategory-link").removeClass("active"); // Remove active class from all subcategory links
    $(subcategoryClass).addClass("active"); // Add active class to the clicked subcategory link

    // changing to first product of cateogry 1
    $("#imageFirst").fadeOut("slow", function () {
      $(this).attr("src", image).fadeIn("slow");
    });

    $(".text1parag2, .text2parag2").removeClass("text-animate");

    setTimeout(function () {
      $(".text1parag2").text(title).addClass("text-animate");
      $(".text2parag2").text(desc).addClass("text-animate");
    }, 500);
  }

  function categoryOne(dataCategory, hide, fadeIn) {
    $(".category-link").removeClass("active"); // Remove active class from all subcategory links
    $(dataCategory).addClass("active"); // Add active class to the clicked subcategory link

    // === animation
    for (var i = 1; i <= 10; i++) {
      $(".subcategories" + i).hide();
      console.log("hiding " + ".subcategories" + i);
    }
    //$(hide).hide();
    $(fadeIn).fadeIn();
  }

  function swappingPartOne(text1, text2) {
    var newText1 = text1;
    var newText2 = text2;

    // Add animation classes and update the content of divPart1 based on the selected category
    $(".text1Part1")
      .addClass("animate-slide-out")
      .one("animationend", function () {
        $(this).removeClass("animate-slide-out");
        $(this).text(newText1);
        $(this).addClass("animate-slide-in");
      });

    $(".text2Part1")
      .addClass("animate-slide-out")
      .one("animationend", function () {
        $(this).removeClass("animate-slide-out");
        $(this).text(newText2);
        $(this).addClass("animate-slide-in");
      });

    $(".text1Part1, .text2Part1, .tryNow1, .tryNow2")
      .addClass("animate-slide-out")
      .one("animationend", function () {
        $(this).removeClass("animate-slide-out");
        $(this).addClass("animate-slide-in");
      });

    $(".text1Part1").text(newText1);
    $(".text2Part1").text(newText2);
    $(".tryNow1").text("Try Now");
    $(".tryNow2").text("Next");
  }

  // ================= SCROLLING BETWEEN CATEGORIES =================================
  var isScrollingEnabled = true;
  var category = "";

  function fetchProducts() {
    return $.ajax({
      url: "admin/get_products.php",
      type: "GET",
      dataType: "json",
    });
  }

  var subcategoryTexts = {};
  var subcategoryImage = {};
  var subcategoryDescriptions = {};

  //======== used for moving automatically between subcategories
  var subcategories = [];

  fetchProducts()
    .done(function (products) {
      for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var name = product.name;
        subcategoryTexts[name] = product.name;
        subcategoryImage[name] = "admin/images/" + product.image;
        subcategoryDescriptions[name] = product.description;

        subcategories[i] = product.name;
        //console.log(subcategories[i]);
      }
    })
    .fail(function (error) {
      console.error("Error fetching products:", error);
    });

  
  
  
  
  

  

  
  
  
  
  
  
  
  
  
  // Loop through the products array and populate the objects

  $(window).on("mousewheel DOMMouseScroll", function (e) {
    if (!isScrollingEnabled) {
      return;
    }

    var delta = e.originalEvent.wheelDelta || -e.originalEvent.detail;

    // Check for horizontal scrolling
    if (Math.abs(e.originalEvent.deltaX) > Math.abs(e.originalEvent.deltaY)) {
      return;
    }
    isScrollingEnabled = false;

    if (delta > 0) {
      console.log("Scrolling up");
      // Put your code for scrolling up here
      categoryOne(
        ".category-link[data-category='create']",
        ".subcategories1",
        ".subcategories2"
      );
      swappingProducts(
        ".firstSub2",
        "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
        "Product 1  subcategory 2",
        "Product 1  subcategory 2 description"
      );

      category = "create";
      currentIndex = 3;





       
    } else {
      console.log("Scrolling down");
      // Put your code for scrolling down here

      categoryOne(
        ".category-link[data-category='sidebar']",
        ".subcategories2",
        ".subcategories1"
      );
      swappingProducts(
        ".firstSub1",
        "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
        "See your mail while you browse",
        "See your mail while you browse desc"
      );

      var category = "sidebar";
      currentIndex = 0;
    }

    // ======= part 1 text ====================
    swappingPartOne(
      categoryTexts[category].text1,
      categoryTexts[category].text2
    );

    e.preventDefault();

    setTimeout(function () {
      isScrollingEnabled = true;
    }, 2000); // Enable scrolling after 2 seconds
  });

  // ================= END SCROLLING BETWEEN CATEGORIES =================================

  //=============== CLICKING SUBCATEGORY ======================

  // Add the .text-animate class to the first product's text initially
  $(".text1parag2:first, .text2parag2:first").addClass("text-animate");

  $(".subcategory-link").click(function (e) {
    e.preventDefault();

    var subcategory = $(this).data("subcategory");
    // subcategories were defined here

    swappingProducts(
      this,
      subcategoryImage[subcategory],
      subcategoryTexts[subcategory],
      subcategoryDescriptions[subcategory]
    );
  });

  // ===================== SWITCHING SUBACTEGORIES AUTOMATICALLY ==================================
  // var subcategories = [
  //   "outlook",
  //   "onenote",
  //   "microsoft365",
  //   "electronics",
  //   "mobile",
  //   "computer",
  // ];

  var timeoutId;

  function changeSubcategory(subcategory) {
    // subcategories was defined here

    swappingProducts(
      ".subcategory-link[data-subcategory='" + subcategory + "']",
      subcategoryImage[subcategory],
      subcategoryTexts[subcategory],
      subcategoryDescriptions[subcategory]
    );
  }

  function autoChangeSubcategory() {
    currentIndex = (currentIndex + 1) % subcategories.length;
    // console.log("loool : " + currentIndex);
    if (currentIndex == 3) {
      changeSubcategory(subcategories[0]);
      currentIndex = 0;
    } else if (currentIndex == 0) {
      changeSubcategory(subcategories[3]);
      currentIndex = 3;
    } else {
      changeSubcategory(subcategories[currentIndex]);
    }
    // Set the timeout for the next auto change
    timeoutId = setTimeout(autoChangeSubcategory, 5000);
  }















  // ================ CLICKING CATEGORIES =========================
  fetchCategories()
    .done(function (categories) {
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        console.log("hi ?");

        console.log(
          "LOOOOOOOOOOL " +
            ".category-link[data-category='" +
            category["name"] +
            "']"
        );
        $(".category-link[data-category='" + category["name"] + "']").click(
          function (e) {
            e.preventDefault();
            categoryOne(
              ".category-link[data-category='" + category["name"] + "']",
              ".subcategories1",
              ".subcategories"+(i+1)
            );

            var firstProd = {};

            fetchProducts()
              .done(function (products) {
                for (var i = 0; i < products.length; i++) {
                  if (products[i]["category_name"] == category["name"]) {
                    firstProd = products[i];
                    break;
                  }
                }
              })
              .fail(function (error) {
                console.error("Error fetching products:", error);
              });

            swappingProducts(
              ".firstSub" + (i + 1),
              firstProd["image"],
              firstProd["name"],
              firstProd["description"]
            );

            var category = category["name"];
            currentIndex = 0;
            currentCategory;
          }
        );
      }
    })
    .fail(function (error) {
      console.error("Error fetching products:", error);
    });

  // ================== END CLICKING CATEGORIES =========================











  // Initial subcategory change
  changeSubcategory(subcategories[currentIndex]);

  // Start the initial timeout
  timeoutId = setTimeout(autoChangeSubcategory, 5000);

  // Event listener for any clicks on the screen
  $(document).on("click mousewheel DOMMouseScroll", function () {
    clearTimeout(timeoutId); // Reset the timeout
    timeoutId = setTimeout(autoChangeSubcategory, 3000);
  });

  $(".text1parag2:first, .text2parag2:first").addClass("text-animate");

  var categoryTexts = {};
  // Define initial content for the divPart1 section
  var initialText1 = "";
  var initialText2 = "";

  fetchCategories()
    .done(function (categories) {
      for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        categoryTexts[category.name] = {
          text1: category.title,
          text2: category.description,
        };

        // Define initial content for the divPart1 section
        initialText1 = categoryTexts[category].text1;
        initialText2 = categoryTexts[category].text2;
        // Initialize the content of divPart1 with the initial text
        $(".text1Part1").text(initialText1);
        $(".text2Part1").text(initialText2);
      }
    })
    .fail(function (error) {
      console.error("Error fetching products:", error);
    });

  

  $(".category-link").click(function (e) {
    e.preventDefault();

    var category = $(this).data("category");

    var newText1 = categoryTexts[category].text1;
    var newText2 = categoryTexts[category].text2;

    // Add animation classes and update the content of divPart1 based on the selected category
    $(".text1Part1")
      .addClass("animate-slide-out")
      .one("animationend", function () {
        $(this).removeClass("animate-slide-out");
        $(this).text(newText1);
        $(this).addClass("animate-slide-in");
      });

    $(".text2Part1")
      .addClass("animate-slide-out")
      .one("animationend", function () {
        $(this).removeClass("animate-slide-out");
        $(this).text(newText2);
        $(this).addClass("animate-slide-in");
      });

    $(".text1Part1, .text2Part1, .tryNow1, .tryNow2")
      .addClass("animate-slide-out")
      .one("animationend", function () {
        $(this).removeClass("animate-slide-out");
        $(this).addClass("animate-slide-in");
      });

    $(".text1Part1").text(newText1);
    $(".text2Part1").text(newText2);
    $(".tryNow1").text("Try Now");
    $(".tryNow2").text("Next");

    // ... rest of your code ...
  });











  // ============================ CLICKING CATEGORY 1 ==================
  // $(".category-link[data-category='sidebar']").click(function (e) {
  //   e.preventDefault();
  //   categoryOne(
  //     ".category-link[data-category='sidebar']",
  //     ".subcategories2",
  //     ".subcategories1"
  //   );
  //   swappingProducts(
  //     ".firstSub1",
  //     "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
  //     "See your mail while you browse",
  //     "See your mail while you browse desc"
  //   );

  //   var category = "sidebar";
  //   currentIndex = 0;
  // });

  //  ======================== CLICKING CATEGORY 2 ==============================
  // $(".category-link[data-category='create']").click(function (e) {
  //   e.preventDefault();

  //   categoryOne(
  //     ".category-link[data-category='create']",
  //     ".subcategories1",
  //     ".subcategories2"
  //   );
  //   swappingProducts(
  //     ".firstSub2",
  //     "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
  //     "Product 1  subcategory 2",
  //     "Product 1  subcategory 2 description"
  //   );

  //   category = "create";
  //   currentIndex = 3;
  // });
});

// =============== loading animations =====================

document.addEventListener("DOMContentLoaded", function () {
  // Trigger animation for elements with "animate-onload" class
  const animateElements = document.querySelectorAll(".animate-onload");
  animateElements.forEach((element) => {
    element.classList.add("animate-visible");
  });

  // ===================== ARROWS =======================

  $(".subcategories2").hide();

  $(".left-arrow").click(function () {
    $(".subcategories-container").animate(
      {
        scrollLeft: "-=100",
      },
      "fast"
    );
  });

  $(".right-arrow").click(function () {
    $(".subcategories-container").animate(
      {
        scrollLeft: "+=100",
      },
      "fast"
    );
  });
});
