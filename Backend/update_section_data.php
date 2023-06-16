<?php
$q = $_REQUEST["q"];

//extraking all information
$req=explode("_", $q);
$data=$req[0];
$id=$req[1];
$serial=$req[3];
echo($q);
//loading today file

$fptr1 = fopen("today.txt", "r+");
$content = fread($fptr1, filesize("today.txt"));
$content_arr = explode("\r\n\r\n###\r\n\r\n",$content);
$section_data = $content_arr[1];

//getting the right section

$all_section=explode("\r\n\r\n",$section_data);

foreach($all_section as $index=>$section){
    if(explode("_",$section)[1]==$id){
        $section_index=$index;
        break;
    }
}

//getting the previously stored subsection

$sub_section_arr = explode("_",$all_section[$section_index]);
$sub_section = $sub_section_arr[4];

//getting the previously stored data in the subsection

$old_data_arr = explode("/",$sub_section);
$old_data = $old_data_arr[$serial];

//setting new data

if($type=='a'){
    $arr = explode("@",$old_data);
    $arr[0] = $data;
    $new_data= implode("@",$arr);

}
else{
    $arr = explode("@",$old_data);
    $arr[1] = $data;
    $new_data= implode("@",$arr);
    
}

// Recreating sub_section
$old_data_arr[$serial] = $new_data;
$sub_section=implode("/",$old_data_arr);

//Recreating all_section
$sub_section_arr[4] = $sub_section;
$all_section[$section_index] = implode("_",$sub_section_arr);

// Recreating section data
$section_data=implode("\r\n\r\n", $all_section);

// Recreating section data
$content_arr[1]=$section_data;

// Recreating content
$content = implode("\r\n\r\n###\r\n\r\n",$content_arr);

// Writing in today file
file_put_contents("today.txt",$content);
fclose($fptr1);
?>