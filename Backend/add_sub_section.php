<?php
$fptr1 = fopen("today.txt", "r+");
$content = fread($fptr1, filesize("today.txt"));
fclose($fptr1);
$all_section = explode("###", $content)[1];
$arr= explode("\r\n\r\n",$all_section);
$arr=array_slice($arr,1);

foreach ($arr as $str) {
    if(explode("_", $str)[1]==$section){
        $txt_num=explode("_", $str);
        $txt_label=$txt_num[2];
        $num_label=$txt_num[3];
        break;
    }
};
$display = str_replace("-", " ", $section);
echo $sub_section;
?>