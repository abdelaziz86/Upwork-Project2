$(document).ready(function () {
        // Add the .text-animate class to the first product's text initially
        $(".text1parag2:first, .text2parag2:first").addClass("text-animate");
 

        $(".subcategory-link").click(function (e) {
            e.preventDefault();

            var subcategory = $(this).data("subcategory");
            var subcategoryTexts = {
                outlook: "See your mail while you browse",
                onenote: "Capture your thoughts and ideas",
                microsoft365: "Enhance your productivity"
            };
            var subcategoryImage = {
                outlook: "https://www.tunisianet.com.tn/306796-home/pc-portable-asus-vivobook-16-i5-11300h-12-go-win11-silver.jpg",
                onenote: "https://www.tunisianet.com.tn/292946-home/portable-hp-probook-450-g9-i5-12e-gen-8-go.jpg",
                microsoft365: "https://www.tunisianet.com.tn/317692-home/pc-portable-asus-vivobook-16-i9-11900h-rtx-3050-4-g-16-go.jpg"
            };
            var subcategoryDescriptions = {
                outlook: "See your mail while you browse",
                onenote: "Capture your thoughts and ideas",
                microsoft365: "Enhance your productivity"
            }

            $("#image").fadeOut("slow", function () {
                $(this).attr("src", subcategoryImage[subcategory]).fadeIn("slow");
            });

            $(".text1parag2, .text2parag2").removeClass("text-animate");

            setTimeout(function () {
                $(".text1parag2").text(subcategoryTexts[subcategory]).addClass("text-animate");
                $(".text2parag2").text(subcategoryDescriptions[subcategory]).addClass("text-animate");
            }, 500);
        });




        $(".subcategory-link1").click(function (e) {
            e.preventDefault();

            var subcategory = $(this).data("subcategory");
            var subcategoryTexts = {
                electronics: "Product 1  subcategory 2",
                mobile: "Product 2  subcategory 2",
                computer: "Product 3  subcategory 2"
            };
            var subcategoryImage = {
                electronics: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone-se-2022-64-go-midnight-apple.jpg",
                mobile: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iphone_11_64_go_vert_-_apple.jpg",
                computer: "https://mk-media.mytek.tn/media/catalog/product/cache/4635b69058c0dccf0c8109f6ac6742cc/i/p/iph-11-64-black_3.jpg"
            };
            var subcategoryDescriptions = {
                electronics: "Product 1  subcategory 2 description",
                mobile: "Product 2  subcategory 2 description",
                computer: "Product 3  subcategory 2 description"
            }

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
            $(".subcategories2").hide();
            $(".subcategories1").fadeIn();
        });

        // CATEGORY 2
        $(".category-link[data-category='create']").click(function (e) {
            e.preventDefault();
            $(".subcategories1").hide();
            $(".subcategories2").fadeIn();
        });




    });