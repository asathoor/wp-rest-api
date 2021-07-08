// this will make all images responsible
// see: https://wordpress.stackexchange.com/questions/302130/how-to-add-css-class-to-image-attached-in-all-the-posts

add_filter('get_image_tag_class','wpse302130_add_image_class');

function wpse302130_add_image_class ($class){
    $class .= ' img-fluid';
    return $class;
    }
