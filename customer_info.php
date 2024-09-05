<?php
include("config.php");

$qry = $con->query("SELECT * from collection where cus_id='".$_POST['cus_id']."'");
while($row = $qry->fetch_assoc()){
    $data[] = $row;
}
echo json_encode($data);
?>