<?php
// $q = $_REQUEST["q"];
//title_txt_label_num_label_supsection
$arr=explode("_",$q);
$a="";
$title=$arr[0];
$display=str_replace("-"," ",$title);
$value="";
$txt_label=$arr[1];
$num_label=$arr[2];
$amount_subsection=(int)$arr[4];
if($a!=''){
  $value="value=$a";
}
$first="<div class='earn mb-3'> <label for='exampleInputEmail1' class='form-label'>{$display}</label> <div class='input-group mb-3 d-flex flex-column' id='{$title}'>";
$all_subsection="";
$info=$amount_subsection;
while($amount_subsection>0){
  include '_SubSection.php';
  $all_subsection.=$sub_section;
  $amount_subsection--;
}
$last="</div> <button type='button' class='btn btn-primary' onclick=add_subsection('{$title}')>More Field</button></div>__{$arr[3]}__{$info}";
$ret="{$first}{$all_subsection}{$last}";
echo $ret;
?>