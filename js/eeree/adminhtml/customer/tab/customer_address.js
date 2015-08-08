;document.observe('dom:loaded', function () {
    var bufferedElement = {};
    $('address_list').on('click', '.address-type-line input', function (event, element) {
        if (bufferedElement.hasOwnProperty(element.name) && bufferedElement[element.name] == element) {
            element.checked = false;
            delete bufferedElement[element.name];
        } else {
            bufferedElement[element.name] = element;
        }
    })
});
