<?php
$name = $_POST["name"];
?>

<html>
<head>
<title>Simple PHP Form Example</title>
</head>

<body>

<?php
if (!isset($_POST['submit']))
{
  // display the form
  ?>
  <p>
  <form method="post" action="<?php echo $PHP_SELF;?>">
  First Name: <input type="text" name="name">
  <br/><input type="submit" value="submit" name="submit">
  </form>
  </p>

<?
}
else
{
  echo "<p>";
  echo "First Name: $name<br />";
  echo "</p>";
}
?>

</body>
</html>
