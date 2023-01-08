<?php
$p = $_REQUEST["p"];
$bool = $p[0];
$prayer = $p[1];

//loading today file

$fptr1 = fopen("today.txt", "r+");
$content = fread($fptr1, filesize("today.txt"));
$content_arr = explode("\r\n\r\n###\r\n\r\n",$content);
$prayer_data = $content_arr[2];

//sending data to prayer_display
if($prayer == "6"){
    echo $prayer_data;
}

//getting the previously stored prayer data

$prayer_time = explode("-",$prayer_data);

//Assigning new data
$prayer_time[$prayer] = $bool;

// Recreating content array
$content_arr[2] = implode("-",$prayer_time);
$content = implode("\r\n\r\n###\r\n\r\n", $content_arr);

// Writing in today file
file_put_contents("today.txt",$content);
fclose($fptr1);

?>
