/*

** Modified for forfeiture.gov **

This script was created by Ian Lloyd (http://lloydi.com/). I'd appreciate it 
if you could keep this comment in the script if you choose to use it (albeit 
in an amended form.

The original blog entry relating to this can be found here: http://tinyurl.com/p9tqb.

The addEvent function comes courtesy of Scott Andrew: http://tinyurl.com/qcmrd

*/

function togglePrintDisplay(e)
{
    var whatSection = e.split("_");
    whatSection = whatSection[1];
    var el = document.getElementsByTagName("div");
    for (i=0;i<el.length;i++)
	    {
	    if (el[i].className.indexOf("section")!=-1)
		    {
		    if (el[i].id==whatSection)
			    {
			    //use only this section for printing
			    document.getElementById("sectiontoprint").innerHTML = document.getElementById("sectiontoprint").innerHTML + el[i].innerHTML;
			    setForPrintSection();
			    }
		    }
	    }

    if (window.event) 
	    {
	    window.event.returnValue = false;
	    window.event.cancelBubble = true;
	    } 

    window.print();
    var t = setTimeout("setForPrintAll()",1000); // delay the setting; needed for Firefox otherwise the full page prints
}

function setForPrintAll()
{
    document.getElementById("sectiontoprint").innerHTML = "";
    document.getElementById("sectiontoprint").setAttribute("className","print_section noprint");
    document.getElementById("sectiontoprint").setAttribute("class","print_section noprint");
    document.getElementById("contenttoscreen").setAttribute("className","toscreen");
    document.getElementById("contenttoscreen").setAttribute("class","toscreen");
}

function setForPrintSection()
{
    document.getElementById("sectiontoprint").setAttribute("className","print_section print");
    document.getElementById("sectiontoprint").setAttribute("class","print_section print");
    document.getElementById("contenttoscreen").setAttribute("className","print_section noprint");
    document.getElementById("contenttoscreen").setAttribute("class","print_section noprint");
}



