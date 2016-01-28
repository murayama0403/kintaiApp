(function () {
    'use strict';

    var module = ons.bootstrap('app', ['onsen']);
    module.controller('AppController', function ($scope) {
        $scope.currentMonth = new Date();

        //追記
        $scope.daysScope = {
            configureItemScope: function (index, itemScope) {
                //var currentDay = $scope.currentMonth.getDay();
                //var dayTbl = new Array('日', '月', '火', '水', '木', '金', '土');
                //var indexDay = dayTbl[currentDay];

                itemScope.item = {
                    date: (index + 1)
                    //day : indexDay
                };
            },
            //要素の高さ
            calculateItemHeight: function (index) {
                return 45;
            },
            //要素数
            countItems: function () {
                return new Date($scope.currentMonth.getFullYear(), $scope.currentMonth.getMonth(), 0).getDate();
            },
            //画面外の要素を削除:必要性まだ分かってない
            destroyItemScope: function (index, scope) {
               console.log('Destroyed item #' + index);
            }
        };
    });
    //ここまで

    ons.ready(function () {
        // Init code here
    });
})();
