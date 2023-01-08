<?php

$prayer=["Fajar","Johor","Asar","Magreb","Esha"];
for($i=0 ; $i<5 ; $i++){
    $box="<div class='form-check form-check-inline'>
    <input class='form-check-input' type='checkbox' id='{$prayer[$i]}' value='F' onclick='prayer({$i})'>
    <label class='form-check-label' for='inlineCheckbox{$i}'>{$prayer[$i]}</label>
    </div>";
    echo $box;
}

?>