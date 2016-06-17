angular.module('appPhone').filter('searchPhones', function() {
    return function(phones, __query, __queryselector) {
        var query = __query || "";
        var selector = parseInt(__queryselector) || 1;
        var lookup = [];
        if (phones) {
            var max = phones.length;
            for (var i = 0; i < max; i++) {
                var item = phones[i];
                switch (selector) {
                    case 1:
                        if (item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) lookup.push(item);
                        break;
                    case 2:
                        if (item.snippet.toLocaleLowerCase().includes(query.toLocaleLowerCase())) lookup.push(item);
                        break;
                }
            }
        }
        return lookup;
    };
});