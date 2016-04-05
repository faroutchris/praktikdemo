import $ from 'jquery';

function NumberInput(inputs) {

    this.inputs = inputs;
    this.plus = $('<div>').html('+');
    this.minus = $('<div>').html('-');

    this.init();
}

NumberInput.prototype = {
    init: function init() {
        this.inputs.each((i, input) => {

            $(input).append(this.plus)

        })
    }
};

export default $(document).ready( () => {

    const inputs = $(document).find('input[type="number"]');
    const numberInput = new NumberInput(inputs);

});