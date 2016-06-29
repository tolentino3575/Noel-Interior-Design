<?php
require_once __DIR__.'/App/bootstrap.php';
require_once __DIR__.'/src/functions.php';
global $container;

// styles and scripts
add_action('wp_enqueue_scripts', function (){
    wp_register_style('slick-css', get_template_directory_uri() . '/src/slick/slick/slick.css');
    wp_register_style('slick-theme-css', get_template_directory_uri() . '/src/slick/slick/slick-theme.css');
    wp_register_style('fancybox-css', get_template_directory_uri() . '/src/fancybox/source/jquery.fancybox.css');
    wp_register_style('app', get_template_directory_uri() . '/web/stylesheets/app.css', ['slick-css', 'slick-theme-css', 'fancybox-css']);

    wp_register_script('slick', get_template_directory_uri() . '/src/slick/slick/slick.js', array('jquery'));
    wp_register_script('slick-app-js', get_template_directory_uri() . '/web/scripts-min/app.min.js', array('jquery'));
    wp_register_script('fancybox', get_template_directory_uri() . '/src/fancybox/source/jquery.fancybox.pack.js', array('jquery'));

    wp_enqueue_script('slick-app-js');
    wp_enqueue_script('slick');
    wp_enqueue_script('fancybox');
    wp_enqueue_style( 'app' );
});

add_action('init', function() {
    register_post_type('portfolio', [
        'labels' => [
            'name' => 'Portfolios',
            'singular_name' => 'Portfolio',
        ],
        'public' => true,
        'menu_icon' => 'dashicons-portfolio',
        'menu_position' => 5,
        'supports' => [
            'title',
            'author',
            'thumbnail',
            'page-attributes',
        ],
        'has_archive' => true,
    ]);

    register_nav_menus([
        'primary_menu' => 'Primary Menu',
        'mobile_menu' => 'Mobile Menu',
    ]);

    if(function_exists('acf_add_options_page')) {
        acf_add_options_page([
            'page_title' => 'Theme Options',
            'capability' => 'edit_theme_options',
            'icon_url' => 'dashicons-sayenko',
        ]);
    }
});
