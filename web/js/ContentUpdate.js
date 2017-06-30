/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Define Globals*/
var CompArr = [];
var Slider1;
var Slider2;
var Slider3;
var Slider4;

function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
    var url = "UPLOAD_DIRECTORY/ProgramsDataFile.xml";
    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            //   ContentRetrieval(this);
            init();
            DynamicContentRetrieval(this);
            CompArr = [];
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function init() {
    Slider1 = document.getElementById("Emotion1").value;
    Slider2 = document.getElementById("Emotion2").value;
    Slider3 = document.getElementById("Emotion3").value;
    Slider4 = document.getElementById("Emotion4").value;
}

/*Dynamic initalisation function for content on table upon page load*/
function Initialise() {
    init();
    var tablearea = document.getElementById('area'); // Get Tablearea
    var table = document.createElement('table'); // Create new Table
    table.setAttribute('id', 'demo'); // Set Table ID

    var tr = document.createElement('tr'); // <tr>

    for (var i = 0; i < 5; i++) { // Generate 5 boxes for content update as requested

        var tdi = document.createElement('td'); // equivlent to 5 <td> which is basically first row for image of content in table
        tdi.setAttribute('id', i); // Assign id to each cell created 

        var texti = document.createTextNode('No Content'); // Create default 'no content' text

        tdi.appendChild(texti); // append text to td i.e. the cell

        tr.appendChild(tdi); // append td to tr
        table.appendChild(tr);// equivlent to </td>
    }

    var tr = document.createElement('tr'); // open another <td> for the second row

    for (var x = 0; x < 5; x++) { // generate next 5 cells on row 2 i.e. 

        var tdx = document.createElement('td'); // equivlent to 5 <td> which is basically second row for name of content in table
        tdx.setAttribute('id', x); // assign unique id again 
        tdx.setAttribute('class', 'CellSize3'); // assign class for CSS purporses

        var textx = document.createTextNode('No Content'); // create default text once more

        tdx.appendChild(textx); // finish appending like last time

        tr.appendChild(tdx);// finish appending like last time
        table.appendChild(tr);// finish appending like last time
    }
    tablearea.appendChild(table);// append to correct area
}

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

/**Concept Movies Function*/
function Movies2Obj(xml) {
    var Movies = [];

    for (i = 0; i < xml.length; i++)
    {
        Movies.unshift({title: xml[i].getElementsByTagName("name")[0].childNodes[0].nodeValue, img: xml[i].getElementsByTagName("image")[0].childNodes[0].nodeValue, mood: xml[i].getElementsByTagName("mood")[0].childNodes[0].nodeValue});
    }
    console.log(Movies);
    return Movies;
}

function Content2Retrieve(Movies, mood) {
    //var CompArr = [];
    var Movies = Movies;
    var c = 0;
    var z = 0;

    for (i = 0; i < Movies.length; i++) {// search through entire 

        if (Movies[i].mood === mood) { // Mood Depends on Sliders

            CompArr.unshift({title: Movies[i].title, img: Movies[i].img}); //Add to Global Array for Dynamic Profiling
            console.log(CompArr); //debugging

            if (CompArr.length > 5) {//if comp array length > 6
                shuffle(CompArr); //shufflle array
                console.log(CompArr);

                if (z <= 5) { //choose first 5 elements then break
                    console.log(z);
                    document.getElementById("demo").rows[0].cells.item(z).innerHTML = "<img src = '" + CompArr[z].img + "' height = '150' width = '150'  </img>"; // specify image link from array 
                    document.getElementById("demo").rows[1].cells.item(z).innerHTML = CompArr[z].title; // specify text from array                    
                    z++;
                }
                else {
                    break;
                }
            }
            else {
                if (c <= 5) {
                    document.getElementById("demo").rows[0].cells.item(c).innerHTML = "<img src = '" + Movies[i].img + "' height = '150' width = '150'  </img>"; //ispecify image link from array 
                    document.getElementById("demo").rows[1].cells.item(c).innerHTML = Movies[i].title; // specify text from array                    
                    c++;
                }
                else {
                    break;
                }
            }
        }
    }
    z = 0; //reset counter
    c = 0;  //reset outside counters
}

/*Improved Content Retrieval Function*/
function DynamicContentRetrieval(xml) {
    var xmlDoc = xml.responseXML;
    var x = xmlDoc.getElementsByTagName("programme");
    var Movies = Movies2Obj(x);
console.log(Movies);
    if (Slider1 > 50) {
        mood = 'Calm';
        Content2Retrieve(Movies, mood);
    }
    if (Slider1 < 50) {
        mood = 'Excite';
        Content2Retrieve(Movies, mood);
    }
    if (Slider2 > 50) {
        mood = 'Happy';
        Content2Retrieve(Movies, mood);
    }
    if (Slider2 < 50) {
        mood = 'Sad';
        Content2Retrieve(Movies, mood);
    }
    if (Slider3 > 50) {
        mood = 'Relaxed';
        Content2Retrieve(Movies, mood);
    }
    if (Slider3 < 50) {
        mood = 'Complex';
        Content2Retrieve(Movies, mood);
    }
    if (Slider4 > 50) {
        mood = 'Anime';
        Content2Retrieve(Movies, mood);
    }
    if (Slider4 < 50) {
        mood = 'Horror';
        Content2Retrieve(Movies, mood);
    }
}

