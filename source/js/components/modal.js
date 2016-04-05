import $ from 'jquery';

function Modal($modal) {
    this.$modal = $modal;
    this.$ear = this.$modal.find('.modal-ear');
    this.$body = this.$modal.find('.modal-body');
    this.rightOffset = this.$modal.css(['right']).right;
    this.rightPos = this.rightOffset;
    this.isOpen = false;

    this.init();
}

Modal.prototype = {
    init: function init() {
        this.$modal.on('click', '.modal-ear', this.toggleOpen.bind(this));
    },

    toggleOpen: function toggleOpen() {
        this.isOpen = !this.isOpen;

        this.update(this.isOpen);
    },

    update: function update(isOpen) {
        if (isOpen) {
            this.$modal.css({
                'transform': 'translate3d('+ this.rightOffset +', 0, 0)'
            })
        } else {
            this.$modal.css({
                'transform': 'translate3d(0, 0, 0)'
            })
        }
    }


};

export default $(document).ready( () => {

    //const $modal = $(".modal");
    //const modal = new Modal($modal);

});