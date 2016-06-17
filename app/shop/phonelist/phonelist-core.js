angular.module('appPhone').controller('PhoneListController', function PhoneListController(PhoneService, PhoneLocalStorage) {
    "use strict";
    var model = this;

    var reloadJSON = function reloadJSON() {
        PhoneService.getPhones().then(function (data) {
            model.phones = data;
            PhoneLocalStorage.setPhones(data);
        });
    };

    var loadLanguages = function loadLanguages() {
        PhoneService.getLanguages().then(function (data) {
            model.loadLanguages = data;
        });
    };

    var loadQuerySelector = function loadQuerySelector() {
        PhoneService.getQuerySelector().then(function (data) {
            model.queryselectorLabels = data;
        });
    };

    var loadSeeImage = function loadSeeImage() {
        PhoneService.getSeeImage().then(function (data) {
            model.seeimageLabels = data;
        });
    };

    var onUpdateQuery = function onUpdateQuery(query) {
        model.query = query;
    };

    var loadPhones = function loadPhones() {
        return PhoneLocalStorage.getPhones();
    };

    var deletePhone = function deletePhone(id) {
        id = parseInt(id || 0);
        model.phones = model.phones.filter(function (item) { return item.id !== id; });
        PhoneLocalStorage.setPhones(model.phones);
    };

    var changeLanguage = function changeLanguage(){
$translate.use(model.language);
    };

    var initController = function initController() {
        model.phones = loadPhones();
        model.query = "";
        model.queryselector = "1";
        loadQuerySelector();
        loadLanguages();
        model.language ="en";
        //model.queryselectorLabels = { "1": "Name", "2": "Description" };
        model.direccion = true;
        loadSeeImage();
        //this.seeimageLabels = { "app/shop/phonelist/templates/phonelist.list.image.template.html": "Images", "app/shop/phonelist/templates/phonelist.list.noimage.template.html": "No Images" };
        model.seeimage = "app/shop/phonelist/templates/phonelist.list.image.template.html";
        model.reloadjson = reloadJSON;
        model.deletePhone = deletePhone;
        model.onUpdateQuery = onUpdateQuery;
    };

    initController();
});

// angular.module('appPhone',["ngMessages"]).controller('PhoneEditController', function PhoneListController(this, PhoneLocalStorage, $routeParams,$location) {
angular.module('appPhone').controller('PhoneEditController', function PhoneListController(PhoneLocalStorage, $routeParams, $location) {
    "use strict";
    var model = this;

    var saveForm = function saveForm() {
        PhoneLocalStorage.setPhone(parseInt($routeParams.id), model.phone);
        $location.path("/phones/list");
    };

    var resetForm = function resetForm() {
        model.phone = angular.copy(model.master);
    };

    var initController = function initController() {
        var phone = PhoneLocalStorage.getPhone(parseInt($routeParams.id));
        model.phone = phone;
        model.master = angular.copy(phone);
        model.resetForm = resetForm;
        model.saveForm = saveForm;
    };

    initController();
});

angular.module('appPhone').controller('PhoneItemController', function PhoneListController(PhoneLocalStorage, $routeParams) {
    "use strict";
    var model = this;

    var initController = function initController() {
        var phone = PhoneLocalStorage.getPhone(parseInt($routeParams.id));
        model.phone = phone;
    };

    initController();
});