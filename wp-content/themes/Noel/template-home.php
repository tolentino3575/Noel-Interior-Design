<?php

/**
* Template Name: Home
*/

require_once __DIR__.'/App/bootstrap.php';

$twig = $container->get("twig.environment");
echo $twig->render('pages/home.html.twig', []);