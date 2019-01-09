<?php

$video = $_POST['video_url'];

print("$video");

if ($video) {
	
	exec("TERM=xterm /usr/bin/youtube-dl -o '/shared/Videos/%(title)s.%(ext)s' $video 2>&1", $results );
    $lines = count($results);
    print("<html><body><pre>");
    for ($line = 0; $line < $lines; $line +=1) {
	print("$results[$line] <br>");
    }
    print("</pre></body></html>");

}
?>
