import $ from 'jquery';

function Modal($modal) {
    this.$modal = $modal;
    this.$ear = this.$modal.find('.modal-ear');
    this.$body = this.$modal.find('.modal-body');
    this.rightOffset = this.$modal.css(['right']).right;
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
            this.open();
        } else {
            this.close();
        }
    },

    open: function open() {
        this.$modal.css({
            'transform': 'translate3d('+ this.rightOffset +', 0, 0)'
        })
    },

    close: function close() {
        this.$modal.css({
            'transform': 'translate3d(0, 0, 0)'
        })
    }


};

export default $(document).ready( () => {

    const $modal = $(".modal");
    if ($modal.length) { //Check if the modal exists on the page
        const modal = new Modal($modal);
    }

});