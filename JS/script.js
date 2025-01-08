// Burger menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
hamMenu.classList.toggle("active");
offScreenMenu.classList.toggle("active");
});


  // mobile portfolio click-scroll
  // Scroll to section function
  

    // Gemmer Portfolio sektionerne når siden loades
    window.addEventListener("load", gemPortfolio);
      
    function gemPortfolio(){
    console.log("Gemmer portfolio sektionerne");
    document.querySelector(".portfolio_section").classList.add("hide");
    document.querySelector(".portfolio_section2").classList.add("hide");
    document.querySelector(".portfolio_section3").classList.add("hide");
    document.querySelector(".portfolio_section4").classList.add("hide");
    document.querySelector(".portfolio_section5").classList.add("hide");
    document.querySelector(".portfolio_section6").classList.add("hide");
    }

    // Vis portfolio baseret på hvilken knap man trykker på
    document.querySelector(".intro_btn").addEventListener("click", showIntroWeek_en);

    function showIntroWeek_en(){
      console.log("Showing intro week EN");
      document.querySelector(".introweek_en").classList.remove("hide");
      document.querySelector(".firstWebsite_en").classList.add("hide");
      document.querySelector(".UX_en").classList.add("hide");
      document.querySelector(".animation_en").classList.add("hide");
      document.querySelector(".passion_en").classList.add("hide");
      document.querySelector(".final_en").classList.add("hide");
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
      document.querySelector(".introweek_en").classList.add("hide");
      document.querySelector(".UX_en").classList.add("hide");
      document.querySelector(".animation_en").classList.add("hide");
      document.querySelector(".passion_en").classList.add("hide");
      document.querySelector(".final_en").classList.add("hide");
      window.scrollTo({
        top: 2550,
        left: 0,
        behavior: "smooth",
      });
    }

    
    document.querySelector(".ux_btn").addEventListener("click", showUX_en);

    function showUX_en(){
      console.log("Showin UX Portfolio EN");
      document.querySelector(".UX_en").classList.remove("hide");
      document.querySelector(".animation_en").classList.remove("hide");
      document.querySelector(".passion_en").classList.add("hide");
      document.querySelector(".final_en").classList.add("hide");
      document.querySelector(".introweek_en").classList.add("hide");
      document.querySelector(".firstWebsite_en").classList.add("hide");
      window.scrollTo({
        top: 2400,
        left: 0,
        behavior: "smooth",
      });
    }

    document.querySelector(".animation_btn").addEventListener("click", showAnimation_en);

    function showAnimation_en(){
      document.querySelector(".animation_en").classList.remove("hide");
      document.querySelector(".passion_en").classList.add("hide");
      document.querySelector(".final_en").classList.add("hide");
      document.querySelector(".introweek_en").classList.add("hide");
      document.querySelector(".firstWebsite_en").classList.add("hide");
      document.querySelector(".UX_en").classList.add("hide");
      window.scrollTo({
        top: 2400,
        left: 0,
        behavior: "smooth",
      });
    }

    document.querySelector(".passion_btn").addEventListener("click", showPassion_en);

    function showPassion_en(){
      console.log("Showin Passion Portfolio EN");
      document.querySelector(".passion_en").classList.remove("hide");
      document.querySelector(".final_en").classList.add("hide");
      document.querySelector(".animation_en").classList.add("hide");
      document.querySelector(".introweek_en").classList.add("hide");
      document.querySelector(".firstWebsite_en").classList.add("hide");
      document.querySelector(".UX_en").classList.add("hide");
      window.scrollTo({
        top: 2400,
        left: 0,
        behavior: "smooth",
      });
    }

    document.querySelector(".final_btn").addEventListener("click", showFinal_en);

    function showFinal_en(){
      console.log("Showin Final Portfolio EN");
      document.querySelector(".final_en").classList.remove("hide");
      document.querySelector(".passion_en").classList.add("hide");
      document.querySelector(".animation_en").classList.add("hide");
      document.querySelector(".introweek_en").classList.add("hide");
      document.querySelector(".firstWebsite_en").classList.add("hide");
      document.querySelector(".UX_en").classList.add("hide");
      window.scrollTo({
        top: 2400,
        left: 0,
        behavior: "smooth",
      });
    }


    // Back to top button
    document.querySelector(".backToTop").addEventListener("click", ToTopFunction);
    function ToTopFunction(){
      console.log("elevator going up")
      console.log("Går tilbage til toppen")
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      setTimeout(gemPortfolio, 700)
    }