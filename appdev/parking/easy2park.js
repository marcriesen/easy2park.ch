var park = function () {
    return {
        isFunction:isFunction};
        function isFunction(functionToCheck) {
            var getType = {};
            return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
    }
}();