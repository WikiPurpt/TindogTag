

   //Shrink Navigation Bar

   window.onscroll = function() {scrollFunction()};

   function scrollFunction() {

      if ($(window).width() > 800) {
        if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
          document.getElementById("navLinks").style.padding = "1% 1.5%";
          document.getElementById("navLinks").style.height= "10vh";
          document.getElementById("logo").style.display = "none";
          document.getElementById("textLogo").style.display = "block"
          } else {
          document.getElementById("navLinks").style.padding = "1% 4%";
          document.getElementById("navLinks").style.height= "12vh";
          document.getElementById("logo").style.display = "block";
          document.getElementById("logo").style.width = "60px";
          document.getElementById("textLogo").style.display = "none";
          }
    }else{
      document.getElementById("navLinks").style.padding = "1% 4%";
      document.getElementById("navLinks").style.height= "12vh";
      document.getElementById("logo").style.display = "block";
      document.getElementById("logo").style.width = "60px";
      document.getElementById("textLogo").style.display = "none";
    }
   }


   //Modal

        var modal = document.getElementById("donateModal");

        var btn = document.getElementById("donate-btn");
    
        var span = document.getElementsByClassName("close")[0];
    
        btn.onclick = function(){
        modal.style.display = "block";
        }
    
        span.onclick = function(){
        modal.style.display = "none";
        }
    
        window.onclick = function(event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        }

   function donation() {
    document.getElementById("donationType").classList.toggle("show");
    ///document.getElementById("dropdownicon").className("fa fa-caret-down");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

      //Sidebar for mobile screen

      var navLinks = document.getElementById("navLinks");

      function openMenu(){
  
          navLinks.style.right = "0";   
      }
  
      function hideMenu(){
  
      navLinks.style.right = "-200px";   
      }