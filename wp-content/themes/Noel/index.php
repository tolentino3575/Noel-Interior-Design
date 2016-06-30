<?php
require_once __DIR__.'/App/bootstrap.php';
global $container;

$data = [];
if(is_post_type_archive('portfolio')) {
    $template = 'pages/portfolio.html.twig';
    $data['teasers'] = [];
    
    $loop = new WP_Query([
        'post_type' => 'portfolio', 
        'posts_per_page' => -1,
    ]);

    while ($loop->have_posts()){
        $loop->the_post();
        $data['teasers'][] = $twig->render('teasers/portfolio.html.twig');
    }
    wp_reset_query();
}
elseif(is_front_page()) {
    $template = 'base.html.twig';
} else {
    $template = 'base.html.twig';
}

$twig = $container->get("twig.environment");
echo $twig->render($template, $data);
