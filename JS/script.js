
// Burger menu
// document.querySelector(".burger-menu").addEventListener("click", function () {
//     // document.querySelector(".nav-list").classList.toggle("show");
//     document.querySelector(".overlay").style.display = "block";
//   });
  
//   document.querySelector(".overlay").addEventListener("click", function () {
//     // document.querySelector(".nav-list").classList.remove("show");
//     document.querySelector(".overlay").style.display = "none";
//   });


  // mobile portfolio click-scroll
  // Scroll to section function
  

    // Gemmer Portfolio sektionerne når siden loades
    window.addEventListener("load", gemPortfolio);
      
    function gemPortfolio(){
    console.log("Gemmer portfolio sektionerne");
    document.querySelector(".portfolio_section").classList.add("hide");
    document.querySelector(".portfolio_section2").classList.add("hide");
    }

    // Vis portfolio baseret på hvilken knap man trykker på
    document.querySelector(".intro_btn").addEventListener("click", showIntroWeek_en);

    function showIntroWeek_en(){
      console.log("Showing intro week EN");
      document.querySelector(".introweek_en").classList.remove("hide");
      window.scrollTo({
        top: 2550,
        left: 0,
        behavior: "smooth",
      });
    }

    document.querySelector(".firstWebsite_btn").addEventListener("click", showFirstWebsite_en);

    function showFirstWebsite_en(){
      console.log("Showing first website EN");
      document.querySelector(".firstWebsite_en").classList.remove("hide");
      window.scrollTo({
        top: 2550,
        left: 0,
        behavior: "smooth",
      });
    }


    // Back to top button
    document.querySelector(".backToTop").addEventListener("click", ToTopFunction);
    function ToTopFunction(){
      console.log("Går tilbage til toppen")
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(gemPortfolio, 700)
    }