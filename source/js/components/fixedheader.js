import $ from 'jquery';
//import observable from './../util/observable.js';

function FixedHeader($nav, $header) {

    this.$document = $(document);
    this.scrollPos = this.$document.scrollTop();
    this.$nav = $nav;
    this.$header = $header;
    this.headerHeight = $header.height();
    this.navHeight = $nav.height();
    this.fixed = false

    this.init();
}

FixedHeader.prototype = {
    init: function initListeners() {
        $(document).on( 'scroll', this._onScroll.bind(this) );
    },

    _onScroll: function _onScroll() {
        this.scrollPos = this.$document.scrollTop();

        if (this.scrollPos > this.headerHeight) {
            const shouldFix = true;
            this._onChange(shouldFix);
        } else {
            const shouldFix = false;
            this._onChange(shouldFix);
        }
    },

    _onChange: function _onChange(shouldFix) {
        if( shouldFix !== this.fixed ) {
            this.fixed = shouldFix;

            this.fixed
                ? this._fix(this.$nav, this.$header)
                : this._unfix(this.$nav, this.$header);
        }
        return false;
    },

    _fix: function _fix($nav, $header) {
        $nav.css({
            'position': 'fixed',
            'top': 0,
            'z-index': 2
        });

        $header.css({
            'margin-bottom': this.navHeight
        });
    },

    _unfix: function _unfix($nav, $header) {
        $nav.css({
            'position': 'relative'
        });

        $header.css({
            'margin-bottom': 0
        });
    }
};

export default $(document).ready( () => {
    const $nav = $('nav');
    const $header = $('header');
    const fixedHeader = new FixedHeader($nav, $header);
});