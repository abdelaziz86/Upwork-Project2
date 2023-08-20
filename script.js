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
    var currentCategory = 1 ; 

    var categoryTexts = {
        sidebar: {
            text1: "Free Microsoft 365 apps are easier to use in Edge",
            text2: "Your web apps are just a click away. Get more done with built-in Microsft 465 features on Microsoft Edge."
        },
        create: {
            text1: "Category 2",
            text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        }
    };


    function swappingProducts(subcategoryClass, image , title, desc ) {

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
        $(hide).hide();
        $(fadeIn).fadeIn();
    }


    function swappingPartOne(text1, text2) {
        var newText1 = text1;
        var newText2 = text2;

        // Add animation classes and update the content of divPart1 based on the selected category
            $(".text1Part1").addClass("animate-slide-out").one("animationend", function () {
                $(this).removeClass("animate-slide-out");
                $(this).text(newText1);
                $(this).addClass("animate-slide-in");
            });

            $(".text2Part1").addClass("animate-slide-out").one("animationend", function () {
                $(this).removeClass("animate-slide-out");
                $(this).text(newText2);
                $(this).addClass("animate-slide-in");
            });

            $(".text1Part1, .text2Part1, .tryNow1, .tryNow2").addClass("animate-slide-out").one("animationend", function () {
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
        var category = "" ; 
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
                categoryOne(".category-link[data-category='create']" , ".subcategories1" , ".subcategories2") ; 
                swappingProducts(
                    ".firstSub2",
                    "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
                    "Product 1  subcategory 2",
                    "Product 1  subcategory 2 description");

                category = "create" ; 
                currentIndex = 3 ; 


            } else {
                console.log("Scrolling down");
                // Put your code for scrolling down here

                categoryOne(".category-link[data-category='sidebar']" , ".subcategories2" , ".subcategories1") ; 
                swappingProducts(
                    ".firstSub1",
                    "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
                    "See your mail while you browse",
                    "See your mail while you browse desc");


                var category = "sidebar" ; 
                currentIndex = 0 ; 

            }


            // ======= part 1 text ====================
            swappingPartOne(categoryTexts[category].text1,categoryTexts[category].text2) ;


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
            var subcategoryTexts = {
                outlook: "See your mail while you browse",
                onenote: "Capture your thoughts and ideas",
                microsoft365: "Enhance your productivity",


                electronics: "Product 1  subcategory 2",
                mobile: "Product 2  subcategory 2",
                computer: "Product 3  subcategory 2"
            };
            var subcategoryImage = {
                outlook: "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
                onenote: "https://www.tunisianet.com.tn/292946-home/portable-hp-probook-450-g9-i5-12e-gen-8-go.jpg",
                microsoft365: "https://www.tunisianet.com.tn/317692-home/pc-portable-asus-vivobook-16-i9-11900h-rtx-3050-4-g-16-go.jpg",

                electronics: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
                mobile: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone_11_64_go_vert_-_apple.jpg",
                computer: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iph-11-64-black_3.jpg"
            };
            var subcategoryDescriptions = {
                outlook: "See your mail while you browse desc",
                onenote: "Capture your thoughts and ideas desc",
                microsoft365: "Enhance your productivity desc",

                electronics: "Product 1  subcategory 2 description",
                mobile: "Product 2  subcategory 2 description",
                computer: "Product 3  subcategory 2 description"
            }
 

            swappingProducts(this,
                subcategoryImage[subcategory] , 
                subcategoryTexts[subcategory], 
                subcategoryDescriptions[subcategory] ) ; 

              

        });

 
    // ===================== SWITCHING SUBACTEGORIES AUTOMATICALLY ==================================
        var subcategories = ["outlook", "onenote", "microsoft365", "electronics", "mobile", "computer"];
        var timeoutId;



        function changeSubcategory(subcategory) {
            var subcategoryTexts = {
                outlook: "See your mail while you browse",
                onenote: "Capture your thoughts and ideas",
                microsoft365: "Enhance your productivity",


                electronics: "Product 1  subcategory 2",
                mobile: "Product 2  subcategory 2",
                computer: "Product 3  subcategory 2"
            };
            var subcategoryImage = {
                outlook: "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
                onenote: "https://www.tunisianet.com.tn/292946-home/portable-hp-probook-450-g9-i5-12e-gen-8-go.jpg",
                microsoft365: "https://www.tunisianet.com.tn/317692-home/pc-portable-asus-vivobook-16-i9-11900h-rtx-3050-4-g-16-go.jpg",

                electronics: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
                mobile: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone_11_64_go_vert_-_apple.jpg",
                computer: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iph-11-64-black_3.jpg"
            };
            var subcategoryDescriptions = {
                outlook: "See your mail while you browse desc",
                onenote: "Capture your thoughts and ideas desc",
                microsoft365: "Enhance your productivity desc",

                electronics: "Product 1  subcategory 2 description",
                mobile: "Product 2  subcategory 2 description",
                computer: "Product 3  subcategory 2 description"
            }


            swappingProducts(
                ".subcategory-link[data-subcategory='" + subcategory + "']",
                subcategoryImage[subcategory],
                subcategoryTexts[subcategory],
                subcategoryDescriptions[subcategory]
                ) ; 
        }

        
        function autoChangeSubcategory() {
            currentIndex = (currentIndex + 1) % subcategories.length;
            console.log("loool : " + currentIndex) ; 
            if (currentIndex == 3) {
                changeSubcategory(subcategories[0]);
                currentIndex = 0 ; 
            } else if (currentIndex == 0) {
                changeSubcategory(subcategories[3]);
                currentIndex = 3 ; 

            } else {
                changeSubcategory(subcategories[currentIndex]);
            }

            // Set the timeout for the next auto change
            timeoutId = setTimeout(autoChangeSubcategory, 5000);
        } 




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

    // Define initial content for the divPart1 section
    var initialText1 = "Free Microsoft 365 apps are easier to use in Edge";
    var initialText2 = "Your web apps are just a click away. Get more done with built-in Microsft 465 features on Microsoft Edge.";

    // Initialize the content of divPart1 with the initial text
    $(".text1Part1").text(initialText1);
    $(".text2Part1").text(initialText2);

    $(".category-link").click(function (e) {
        e.preventDefault();

        var category = $(this).data("category");
        var categoryTexts = {
            sidebar: {
                text1: "Free Microsoft 365 apps are easier to use in Edge",
                text2: "Your web apps are just a click away. Get more done with built-in Microsft 465 features on Microsoft Edge."
            },
            create: {
                text1: "Category 2",
                text2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
            }
        };

        var newText1 = categoryTexts[category].text1;
        var newText2 = categoryTexts[category].text2;

        // Add animation classes and update the content of divPart1 based on the selected category
        $(".text1Part1").addClass("animate-slide-out").one("animationend", function () {
            $(this).removeClass("animate-slide-out");
            $(this).text(newText1);
            $(this).addClass("animate-slide-in");
        });

        $(".text2Part1").addClass("animate-slide-out").one("animationend", function () {
            $(this).removeClass("animate-slide-out");
            $(this).text(newText2);
            $(this).addClass("animate-slide-in");
        });

        $(".text1Part1, .text2Part1, .tryNow1, .tryNow2").addClass("animate-slide-out").one("animationend", function () {
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
        $(".category-link[data-category='sidebar']").click(function (e) {
            e.preventDefault();
            categoryOne(".category-link[data-category='sidebar']" , ".subcategories2" , ".subcategories1") ; 
                swappingProducts(
                    ".firstSub1",
                    "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
                    "See your mail while you browse",
                    "See your mail while you browse desc");


                var category = "sidebar" ; 
                currentIndex = 0 ;
            
        });



        //  ======================== CLICKING CATEGORY 2 ==============================
        $(".category-link[data-category='create']").click(function (e) {
            e.preventDefault();

            categoryOne(".category-link[data-category='create']" , ".subcategories1" , ".subcategories2") ; 
            swappingProducts(
                ".firstSub2",
                "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
                "Product 1  subcategory 2",
                "Product 1  subcategory 2 description");

            category = "create" ; 
            currentIndex = 3 ;
        });




    });


    

    // =============== loading animations =====================
 
    document.addEventListener("DOMContentLoaded", function() {
        // Trigger animation for elements with "animate-onload" class
        const animateElements = document.querySelectorAll(".animate-onload");
        animateElements.forEach(element => {
            element.classList.add("animate-visible");
        });





 

     


 



    // ===================== ARROWS =======================

    $(".subcategories2").hide();

    $(".left-arrow").click(function () {
        $(".subcategories-container").animate({
            scrollLeft: "-=100"
        }, "fast");
    });

    $(".right-arrow").click(function () {
        $(".subcategories-container").animate({
            scrollLeft: "+=100"
        }, "fast");
    });







    

     




}); 


