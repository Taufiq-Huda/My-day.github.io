<?php

//Getting the fill upped data and sections of the type txt-num
$fptr2 = fopen("../Backend/today.txt", "r");
$today_content=fread($fptr2, filesize("../Backend/today.txt"));
$sections_data = explode("###", $today_content)[1];
$Entered=explode("\r\n\r\n",$sections_data);
fclose($fptr2);

//Getting all sections which is under The Super section
$SectionOfSup_Section = [];
foreach ($Entered as $str) {
    if (substr($str, 0, 3) == $sup_section) {
        array_push($SectionOfSup_Section, substr($str, 4));
    }
};

//Getting the Html Code
foreach ($SectionOfSup_Section as $sec) {
    $arr = explode("_", $sec);
    $title = $arr[0];
    $display = str_replace("-", " ", $title);
    $txt_label = $arr[1];
    $num_label = $arr[2];
    $Head = "<div class='earn mb-3'> <label for='exampleInputEmail1' class='form-label'>{$display}</label> <div class='input-group mb-3 d-flex flex-column' id='{$title}'>";

    //Getting pre fillupped data and making sub section

    $all_subsection_html = "";
    $all_subsection=explode("/",$arr[3]);
    foreach ($all_subsection as $sub_sec) {
        $text_num=explode("@",$sub_sec);
        $txt="value='{$text_num[0]}'";
        $num="value={$text_num[1]}";
        include '_SubSection.php';
        $all_subsection_html .= $sub_section;
    }

    //Making button
    $last = "</div> <button type='button' class='btn btn-primary' onclick=add_subsection('{$title}')>More Field</button></div>";
    
    echo "{$Head}{$all_subsection_html}{$last}";
}

?>