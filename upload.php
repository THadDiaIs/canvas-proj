<?php

	copy($_FILES['archivo']['tmp_name'],"imagenes/inicial.jpg");
	echo '<meta http-equiv="REFRESH" content="0;url=index2.html">';
?>
