module.exports.getDate = function () {
    const today = new Date();
    const options = {
        year: 'numeric',
        weekday: 'long',
        day: 'numeric',
        month: 'long',

    }
    return today.toLocaleDateString("en-US", options);
};
//short of module.exports is exports
exports.getDay = function () {
    const today = new Date();
    const options = {
        weekday: 'long',
    }
    return today.toLocaleDateString("en-US", options);
};
