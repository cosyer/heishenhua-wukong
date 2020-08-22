<?php


$str = file_get_contents(__DIR__. "/imgs");

preg_match_all("/fetch\(\"http:\/\/heishenhua\.com\/img\/(.+)\",/",$str, $matches);

var_export($matches[0]);

foreach ($matches[1] as $img) {
    $url = "http://heishenhua.com/img/".$img;
    $path = "./public/img/".$img;

    $dir = substr($path, 0, strrpos($path, '/'));
    if (!file_exists($dir)) {
        mkdir($dir, 0777, true);
    }

    file_put_contents($path, file_get_contents($url));
}