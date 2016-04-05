import $ from 'jquery';
import slick from 'slick-carousel-browserify';

const sliderOptions = {
    dots: true,
};

export default $(document).ready( () => {
    slick( $( '.slick-slider' ), sliderOptions );
});