import $ from 'jquery';

function NumberInput($input) {

    this.$input = $input;
    this.min = this.$input.attr('min') || null;
    this.max = this.$input.attr('max') || null;
    this.current = this.$input.val() || this.$input.val(this.min);
    this.plus = $('<div>').addClass('input-number-plus').html('+');
    this.minus = $('<div>').addClass('input-number-minus').html('-');

    this.init();
}

NumberInput.prototype = {
    init: function init() {
        this.plus.insertAfter( this.$input );
        this.minus.insertAfter( this.$input );

        this.plus.on('click', () => {
            if (this.max === null) { //No max set
                this.updateValue('add');
            } else if (this.current < this.max) {
                this.updateValue('add');
            } else {
                //Maybe animate some property? Flash the border red?
                return false;
            }
        });

        this.minus.on('click', () => {
            if (this.min === null) { //No min set
                this.updateValue('subtract');
            } else if (this.current > this.min) {
                this.updateValue('subtract');
            } else {
                return false;
            }

        });
    },

    updateValue: function updateValue(action) {
        switch (action) {
            case 'add': {
                this.current = this.$input.val();
                const next = Number(this.current) + 1;
                this.$input.val( next );
                this.current = next;
                break;
            }
            case 'subtract': {
                this.current = this.$input.val();
                const next = Number(this.current) - 1;
                this.$input.val( next );
                this.current = next;
                this.current = next;
                break;
            }
            default:
                return false;
        }
    }

};

export default $(document).ready( () => {

    const inputs = $(document).find('input[type="number"]');
    inputs.each((i, input) => {
        const $input = $(input)
        const numberInput = new NumberInput($input);
    });


});