function ajout(c) {
            x=document.getElementById('res').value;
	        x=x+c;
	        document.getElementById('res').value=x;
	    }

        function calcul() { 
        	document.getElementById('res').value= eval(document.getElementById('res').value) ;
        }
       	

        function oppose (){
            document.getElementById('res').value= -1*eval(document.getElementById('res').value) ;
        }

        function delet () {
            str=document.getElementById('res').value;
            str1= str.substring(0,str.length-1);
            document.getElementById('res').value=str1;
        }	