 function starttime() {
       document.inputform.startwork.options[0].text
        	= document.inputform.startwork.options[0].value = now();
        document.inputform.startwork.options[0].style.display = "";
        document.inputform.startwork.options.selectedIndex =0;
    }
    function endtime() {
        document.inputform.endwork.options[0].text
        	= document.inputform.endwork.options[0].value = now();
        document.inputform.endwork.options[0].style.display = "";
        document.inputform.endwork.options.selectedIndex =0;
    }