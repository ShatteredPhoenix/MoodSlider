# MoodSlider

Mood Slider Project: 

This is a project I did to experiment with JavaScript and XML files in the form of web applications, the user is allowed to upload a formatted xml file containing movie information into the application. After this upload they can slide any of the 4 sliders to obtain information on recommended movies they should watch based on their sliders choices, which indicate the mood the user is currently in.  

The front end is done is basic HTMl and CSS where the user can then choose to upload a data file, or adjust the sliders as they wish to get recommendations on movies they should watch, the movies are selected from the xml file the user has provided. 

The upload facility is written in Java, it simply searches for an existing directory and if one doesn’t exist it makes a new one, it then uploads the file selected into the newly created or pre-existing directory. 

Finally, the conversion of the xml file data in relevant movie objects and data retrieval is done in JavaScript using basic functions and arrays. Every time the script is called it will retrieve relevant information from an array containing the objects created from the xml file, using the “mood” attribute of the object. 

It will always select movies with the opposite mood to what the user has chosen on their slider(s), if more than one slider is moved at the same time, it will gather all relevant movies from the xml file, convert them to objects and store them in an array. Furthermore it will then shuffle the array and will randomly select and then display them to the user. 


![MoodSlider](https://user-images.githubusercontent.com/13851941/27738881-a9fefada-5da4-11e7-8584-8529a717dd50.png)
