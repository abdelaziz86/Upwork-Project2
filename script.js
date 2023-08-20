$(document).ready(function () {
    
// ================= SCROLLING BETWEEN CATEGORIES =================================
        var isScrollingEnabled = true;

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
                $(".category-link").removeClass("active"); // Remove active class from all subcategory links
                $(".category-link[data-category='create']").addClass("active"); // Add active class to the clicked subcategory link




                // changing to first product of cateogry 1
                $("#imageFirst").fadeOut("slow", function () {
                    $(this).attr("src", "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg").fadeIn("slow");
                });

                $(".text1parag2, .text2parag2").removeClass("text-animate");

                setTimeout(function () {
                    $(".text1parag2").text("Product 1  subcategory 2").addClass("text-animate");
                    $(".text2parag2").text("Product 1  subcategory 2 description").addClass("text-animate");
                }, 500);


                // === animation
                $(".subcategories1").hide();
                $(".subcategories2").fadeIn();



            } else {
                console.log("Scrolling down");
                // Put your code for scrolling down here

                $(".category-link").removeClass("active"); // Remove active class from all subcategory links
                $(".category-link[data-category='sidebar']").addClass("active"); // Add active class to the clicked subcategory link

                // changing to first product of cateogry 1
                $("#imageFirst").fadeOut("slow", function () {
                    $(this).attr("src", "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg").fadeIn("slow");
                });

                $(".text1parag2, .text2parag2").removeClass("text-animate");

                setTimeout(function () {
                    $(".text1parag2").text("See your mail while you browse").addClass("text-animate");
                    $(".text2parag2").text("See your mail while you browse desc").addClass("text-animate");
                }, 500);


                // === animation
                $(".subcategories2").hide();
                $(".subcategories1").fadeIn();
            }

            e.preventDefault();

            setTimeout(function () {
                isScrollingEnabled = true;
            }, 2000); // Enable scrolling after 2 seconds
        });


    
// ================= END SCROLLING BETWEEN CATEGORIES =================================

         




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



            $(".subcategory-link").removeClass("active"); // Remove active class from all subcategory links
            $(this).addClass("active"); // Add active class to the clicked subcategory link





            $("#image").fadeOut("slow", function () {
                $(this).attr("src", subcategoryImage[subcategory]).fadeIn("slow");
            });

            $(".text1parag2, .text2parag2").removeClass("text-animate");

            setTimeout(function () {
                $(".text1parag2").text(subcategoryTexts[subcategory]).addClass("text-animate");
                $(".text2parag2").text(subcategoryDescriptions[subcategory]).addClass("text-animate");
            }, 500);
        });

 










         // CATEGORY 1 
        $(".category-link[data-category='sidebar']").click(function (e) {
            e.preventDefault();

            $(".category-link").removeClass("active"); // Remove active class from all subcategory links
            $(this).addClass("active"); // Add active class to the clicked subcategory link

            // changing to first product of cateogry 1
            $("#image").fadeOut("slow", function () {
                $(this).attr("src", "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg").fadeIn("slow");
            });

            $(".text1parag2, .text2parag2").removeClass("text-animate");

            setTimeout(function () {
                $(".text1parag2").text("See your mail while you browse").addClass("text-animate");
                $(".text2parag2").text("See your mail while you browse desc").addClass("text-animate");
            }, 500);


            // === animation
            $(".subcategories2").hide();
            $(".subcategories1").fadeIn();
        });

        // CATEGORY 2
        $(".category-link[data-category='create']").click(function (e) {
            e.preventDefault();

            $(".category-link").removeClass("active"); // Remove active class from all subcategory links
            $(this).addClass("active"); // Add active class to the clicked subcategory link




            // changing to first product of cateogry 1
            $("#image").fadeOut("slow", function () {
                $(this).attr("src", "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg").fadeIn("slow");
            });

            $(".text1parag2, .text2parag2").removeClass("text-animate");

            setTimeout(function () {
                $(".text1parag2").text("Product 1  subcategory 2").addClass("text-animate");
                $(".text2parag2").text("Product 1  subcategory 2 description").addClass("text-animate");
            }, 500);


            // === animation
            $(".subcategories1").hide();
            $(".subcategories2").fadeIn();
        });




    });


    

    // =============== loading animations =====================
 
    document.addEventListener("DOMContentLoaded", function() {
        // Trigger animation for elements with "animate-onload" class
        const animateElements = document.querySelectorAll(".animate-onload");
        animateElements.forEach(element => {
            element.classList.add("animate-visible");
        });


     



    // =============== text part 1 switching ===========================

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







    $(document).ready(function () {
        if ($(window).width() <= 768) {
            $(".footer-right .categories").html(`
                <select id="category-select">
                    <option value="sidebar">First Category</option>
                    <option value="create">Second Category</option>
                </select>
            `);
        }
    });




}); 


 