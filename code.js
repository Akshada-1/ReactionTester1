



        var start = new Date().getTime();
         function getRandomColor() {
              var letters = '0123456789ABCDEF';
              var color = '#';
              for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
              }
              return color;
            }

        
            
        function makeShapeAppear()
            {
                var top = Math.random() * 400;
                var left = Math.random() * 400;
                var right = Math.random() * 400;
                var width = Math.random() * 400;
                if(Math.random() > 0.5){
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                }
                else{
                    
                    document.getElementById("shape").style.borderRadius= "0%";
                }
                document.getElementById("shape").style.backgroundColor= getRandomColor();
                document.getElementById("shape").style.height = width + "px";
                document.getElementById("shape").style.width= width + "px";
                document.getElementById("shape").style.top =  top + "px";
                document.getElementById("shape").style.left= left + "px";
                document.getElementById("shape").style.right= right + "px";
                document.getElementById("shape").style.display = "block";
                start = new Date().getTime();
            }
            
            function appearAfterDelay() {
                
                setTimeout(makeShapeAppear,Math.random() * 1500);
            }
        
         appearAfterDelay();   
         var end;
        document.getElementById("shape").onclick = function() {
            
            end = new Date().getTime();
            var time = (end - start)/1000;
            document.getElementById("shape").style.display = "none";
            
            document.getElementById("exec-time").value = time +"sec";
            appearAfterDelay();
            
        }
        
            
           
            
        
        
      