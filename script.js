var mybutton = document.getElementById("scrollToTopBtn");

        // When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {
            scrollFunction();
        };

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        // When the user clicks on the button, scroll to the top of the document
        function scrollToTop() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
        }
        
        function evlute()
        {
          var a=document.getElementById("ee1").value
          var regex = /^[a-z0-9]+$/;
           
  
          if(a=="")
          {
            alert("invalid car number");
          }
          else if(regex.test(a))
          {
            alert("car number is always uppercase");
            
          }
         
          else if(a=="GJ24AF7913")
          {
             alert("CAR NAME:I20, OWNWER NAME:PATEL VINODKUMAR HARGOVINDBHAI ,PRICE:5-LAKH,MODEL:2019");
   
          
          }
        }
