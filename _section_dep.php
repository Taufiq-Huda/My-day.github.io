<?php
//Getting all section under given sup_section from  section.txt file
$i=0;
$all_section=[];
$fptr1 = fopen("../Backend/section.txt", "r");
while(! feof($fptr1))
{
    $fstr=fgets($fptr1);
    if(substr($fstr,0,3)==$sup_section){
        array_push($all_section, substr($fstr, 4));
    }
}
fclose($fptr1);

//Getting the fill upped data
$fptr2 = fopen("../Backend/today.txt", "r");
$today_content=fread($fptr2, filesize("../Backend/today.txt"));
$sections_data = explode("###", $today_content)[1];
$Entered=explode("\r\n\r\n",$sections_data);
$prayer_data = explode("###", $today_content)[2];
fclose($fptr2);
$ret = implode("_",$Entered);
/*
$today = explode("%Part#2%",$today_content);
$part2=$today[1];
$today=$today[0];
$date=$today_sections[0];
$section_arr=array_slice($today_sections,1);
$today_section= [];
foreach ($section_arr as $str) {
    if (substr($str, 0, 3) == $sup_section) {
        array_push($today_section, substr($str, 4));
    }
};
foreach ($arr as $str) {
    if (substr($str, 0, 3) == $sup_section) {
        array_push($section, substr($str, 4));
    }
};
foreach ($section as $index=>$sec) {
    $arr = explode("_", $sec);
    $title = $arr[0];
    $display = str_replace("-", " ", $title);
    $txt_label = $arr[1];
    $num_label = $arr[2];
    $first = "<div class='earn mb-3'> <label for='exampleInputEmail1' class='form-label'>{$display}</label> <div class='input-group mb-3 d-flex flex-column' id='{$title}'>";
    $all_subsection_html = "";
    
    //Getting pre fillupped data

    $all_subsection=explode("_",$today_section[$index])[1];
    if(strcmp($all_subsection,"")){
        $all_subsection=explode("/",$all_subsection);
        foreach ($all_subsection as $sub_sec) {
            $text_num=explode("@",$sub_sec);
            $txt="value={$text_num[0]}";
            $num="value={$text_num[1]}";
            include '_SubSection.php';
            $all_subsection_html .= $sub_section;
        }
    }
    else{
        $txt="";
        $num="";
        include '_SubSection.php';
        $all_subsection_html .= $sub_section;
    }
    $last = "</div> <button type='button' class='btn btn-primary' onclick=add_subsection('{$title}')>More Field</button></div>";
    $ret = "{$first}{$all_subsection_html}{$last}";
*/
    echo $ret;
?>
