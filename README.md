# MikuProj
 A Miku WebPlayer
 [Test Now](https://grabel7.github.io/MikuProj/ "GitHub Pages, Miku Proj")

MikuProj is a WebPlayer who works with Hatsune Miku's songs. All of the songs have their respective credits in the layout, and in licenses.txt. MikuProj uses JavaScript (ECMAScript 6), HTML5 and CSS3.


# How it Works
![Miku Proj](https://github.com/grabel7/MikuProj/blob/main/mikuproj.png?raw=true)
We start with a Vynil disk above the elements, who rotates itself on counter-clockwise with a waving ellipse behind, all CSS features, except for the play button, who has a bit of JavaScript and allow the CSS to start. It have an "secret feature", if you click on the vynil, you'll hear a special sound. And, if you click enough times, you'll see a surprise.
Under the Vynil, we see the title. That's a simple code, who changes the inner Text with the name present on the tracks array. Right under the title, we see the artist name, Miku! Under that, you can find the real autor of the song, who worked on producing the Miku's version.

Then, we find the player. Who creates a gradient based on the music timestamp, making the width larger and filling the bar. Under that, the three buttons, skip forward, play and skip back. Then, they will skip the current song, moving you 1 in the playlist. Then we have the shuffle button, who mix your playlist, for who want a "new" playlist. At the momment, we have only 13 musics, 'cause we ain't using an API or storing the files in a host, we're storing locally.  

So, the volume. We have a input range who works with values, the value will multiply by 100 and give the percentage, right below.

Each song will have their own Name, Artist, Cover, Autor with URL and Background Color. The tab name will change itself based on the name of the song. 

# v1.1
The 1.1 version was the first update of this repository. Now the code counts with a new visual identity, with a new favicon, new functions, updated code and a [ChangeLog Page](https://grabel7.github.io/MikuProj/changelog.html "GitHub Pages, Miku Proj ChangeLog").

# v1.2
After the 1.2 version. I've added the "history" button, he will tell you all the musics that you've listened. And new 12 songs. I've removed some files, who were planned to participate in a new function, but with my current knowledge, I am not able to make it functional yet.
1.2b was only for fix a minor bug envolving "Amiga da Minha Mulher" and add an simple audio. I'm planning to 1.3 erase the blank space between some songs and some new functions, but for now, I'll let MikuProj have some air. 


# Mobile
![Miku Proj Mobile](https://github.com/grabel7/MikuProj/blob/main/mobile.png?raw=true)
After the 1.2 update, I've changed some functions in mobile. So now, you can use MikuProj on your cellphone! The mobile layout removes: version number, volume input, percentage and change some CSS configurations. The reason to remove these things was to improve space and funcionality in modern phones. 

# The Code
 The code counts with an array of musics, each one will have 7 objects: Name, Artist, Cover, Source, Autor, Url and Color. Each one will update the page with their settings. For example, the color provided will merge into the gradient of the page and the provided. And the other settings will provide information on the page, like the name of the music, the "singer", the creator of the mix and a url creditting his work. 
 On load the page, the current version will be updated, and the function who changes the background and autor will run. The audio will be receiving the source in the array, and the buttons will move forward and backward, based on the Array Index. 
 Each tick of the music playing, will update a function, who will change the duration of the music and the time passed. Then, if the music reach the end of the duration, the code will skip forward. 
 The shuffle button is a function who will mix the array order, for who doesn't wanna a linear order.
You can see the comments on the code, will be very helpful for you.

Thank you for using MikuProj, your Miku WebPlayer.