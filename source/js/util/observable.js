export default function observable(val) {

    const _listeners = [];

    function notify(newVal) {
        _listeners.forEach( (listener) => {
            listener(newVal);
        });
    }

    function accessor(newVal) {
        if(arguments.length && newVal !== val) {
            val = newVal;
            notify(newVal);
        }
        return val;
    }

    accessor.subscribe = function(listener) {
        _listeners.push(listener);
        console.log(_listeners);
    };

    return accessor;

}