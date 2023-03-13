# MikuProj
 A Miku WebPlayer
 [Test Now](https://grabel7.github.io/MikuProj/ "GitHub Pages, Miku Proj")

MikuProj is a WebPlayer who works with Hatsune Miku's songs. All of the songs have their respective credits in the layout, and in licenses.txt.


# How it Works
![Miku Proj](https://github.com/grabel7/MikuProj/blob/main/mikuproj.png?raw=true)
We start with a Vynil disk above the elements, who rotates itself on counter-clockwise with a waving ellipse behind, all CSS features, except for the play button, who has a bit of JavaScript and allow the CSS to start. It have an "secret feature", if you click on the vynil, you'll hear a special sound. And, if you click enough times, you'll see a surprise.
Under the Vynil, we see the title. That's a simple code, who changes the inner Text with the name present on the tracks array. Right under the title, we see the artist name, Miku! Under that, you can find the real autor of the song, who worked on producing the Miku's version.

Then, we find the player. Who creates a gradient based on the music timestamp, making the width larger and filling the bar. Under that, the three buttons, skip forward, play and skip back. Then, they will skip the current song, moving you 1 in the playlist. Then we have the shuffle button, who mix your playlist, for who want a "new" playlist. At the momment, we have only 13 musics, 'cause we ain't using an API or storing the files in a host, we're storing locally.  

So, the volume. We have a input range who works with values, the value will multiply by 100 and give the percentage, right below.

Each song will have their own Name, Artist, Cover, Autor with URL and Background Color. The tab name will change itself based on the name of the song. 

Thank you for using MikuProj, your Miku WebPlayer.
