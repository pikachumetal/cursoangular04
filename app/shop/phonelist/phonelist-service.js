angular.module('appPhone').service("PhoneService", function ($http, $q) {
    "use strict";

    // var reduceArray = function reduceArray(data) {
    //     return data.reduce(function (result, currentObject) {
    //         for (var key in currentObject) {
    //             if (currentObject.hasOwnProperty(key)) {
    //                 result[key] = currentObject[key];
    //             }
    //         }
    //         return result;
    //     }, {});

    // }

    var getLanguages = function getLanguages() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/languages.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve({});
            });
        return deferred.promise;
    };

    var getQuerySelector = function getQuerySelector() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/querySelector.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve({});
            });
        return deferred.promise;
    };

    var getSeeImage = function getSeeImage() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/seeImage.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve({});
            });
        return deferred.promise;
    };

    var getPhones = function getPhones() {
        var deferred = $q.defer();
        $http.get('app/shop/phonelist/data/phones.json')
            .then(function (response) {
                deferred.resolve(response.data);
            }, function (error) {
                deferred.resolve([]);
            });
        return deferred.promise;
    };

    return {
        getPhones: getPhones,
        getQuerySelector: getQuerySelector,
        getSeeImage: getSeeImage
    }
});

angular.module('appPhone').service("PhoneLocalStorage", function () {
    "use strict";

    var STORE_NAME = "tasks";

    var setPhones = function setPhones(phones) {
        localStorage.setItem(STORE_NAME, JSON.stringify(phones));
    }

    var getPhones = function getPhones() {
        var storedTasks = localStorage.getItem(STORE_NAME);
        if (storedTasks) {
            return JSON.parse(storedTasks);
        }
        return [];
    }

    var getPhone = function getPhone(id) {
        var storedTasks = localStorage.getItem(STORE_NAME);
        if (storedTasks) {
            var phones = JSON.parse(storedTasks) || [];
            var phone = phones.find(function (el) {
                return el.id === id;
            });
            return phone || {};
        }
        return {};
    }

    var setPhone = function setPhone(id, phone) {
        var storedTasks = localStorage.getItem(STORE_NAME);
        if (storedTasks) {
            var phones = JSON.parse(storedTasks) || [];

            phone.id = id > 0 ? id : phones.length + 1;
            phone.image = "http://fpoimg.com/500x250";
            phone.imagealt = phone.name;

            if (id > 0) {
                phones = phones.map(function (item) { return item.id === id ? phone : item; });
            } else {
                phones.push(phone);
            }
            localStorage.setItem(STORE_NAME, JSON.stringify(phones));
        }
    }

    return {
        getPhones: getPhones,
        setPhones: setPhones,
        getPhone: getPhone,
        setPhone: setPhone
    }
});