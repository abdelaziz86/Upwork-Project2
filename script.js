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




         // Show the subcategories with fadeIn() and hide with fadeOut() when clicking on the First Category
        $(".category-link[data-category='sidebar']").click(function (e) {
            e.preventDefault();
            $(".subcategories2").hide();
            $(".subcategories1").fadeIn();
        });

        // Show the SUB CATEGORIES 2 with fadeIn() and hide with fadeOut() when clicking on the Second Category
        $(".category-link[data-category='create']").click(function (e) {
            e.preventDefault();
            $(".subcategories1").hide();
            $(".subcategories2").fadeIn();
        });

    });