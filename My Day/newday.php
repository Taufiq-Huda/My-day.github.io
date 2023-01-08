<?php
date_default_timezone_set('Asia/Dhaka');
$d=date("d M Y");
$fptr1 = fopen("../Backend/today.txt", "r+");
$file_date = fread($fptr1, 11);
if($d!=$file_date){
  $old=fread($fptr1, filesize("../Backend/today.txt"));
  $old=substr($old, 4, strlen($old));
  $history_file = fopen("../past/{$file_date}.txt", "w");
  fwrite($history_file,$old);
  fclose($history_file);
  $new="{$d}

###

eco_Earning_Source_Amount_@

eco_Spending_Field_Amount_@

rel_Good-Work_Details_score_@

rel_Bad-Work_Details_score_@

rel_No-Work_Details_score_@

###

0-0-0-0-0

###

Under daevelopment

###

Under daevelopment

###

Under daevelopment";
  file_put_contents("../Backend/today.txt",$new);
}
fclose($fptr1);
?>
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap demo</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
</head>

<body onload="set_up()">
  <div id="txtHint">
  </div>

  <?php include '__navbar.php'; ?>
  
  <div class="d-flex justify-content-center">
    <div class="d-flex flex-column">
      <div class="top mb-3">
        <div class="date">Date : <?php echo $d ?></div>
        <div class="week">Week : <?php echo date("W") ?></div>
        <div class="day">Day : <?php echo date("D") ?></div>
      </div>
      <form action="welcome_get.php" method="get">
        <div class="mb-3 d-flex flex-column">
          Economy
          <hr>
          <div class="d-flex flex-column" id='eco'>
            <?php
            $sup_section = "eco";
            include '../Backend/_section.php';
            ?>
          </div>
          <div class="mb-3 d-flex flex-column">
            Relegious
            <hr>
            <dev id="Prayer">
              Prayer<br>
              <?php
              include '../Backend/_prayer.php';
              ?>
            </dev>
            <div class="d-flex flex-column" id="rel">
              <?php
              $sup_section = "rel";
              include '../Backend/_section.php';
              ?>
            </div>
          </div>
        </div>
        <div class="input-group">
          <span class="input-group-text">Dairy</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
      </form>
    </div>
  </div>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
  <script src="script.js?v=<?php echo date("jgi")?>"></script>
</body>

</html>