<?php
$fptr = fopen("section.txt","r");
$content=fread($fptr,filesize("section.txt"));
fclose($fptr);
$arr=explode("\r\n",$content);
echo $content;
?>