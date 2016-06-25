<?php
require_once __DIR__.'/App/bootstrap.php';
global $container;

$data = [];

if(is_front_page()) {
    $template = 'base.html.twig';
} else {
    $template = 'base.html.twig';
}

$twig = $container->get("twig.environment");
echo $twig->render($template, $data);
