(function () {
    'use strict';

    var module = ons.bootstrap('app', ['onsen']);
    module.controller('AppController', function ($scope) {
        $scope.currentMonth = new Date();

        //�ǋL
        $scope.daysScope = {
            configureItemScope: function (index, itemScope) {
                //var currentDay = $scope.currentMonth.getDay();
                //var dayTbl = new Array('��', '��', '��', '��', '��', '��', '�y');
                //var indexDay = dayTbl[currentDay];

                itemScope.item = {
                    date: (index + 1)
                    //day : indexDay
                };
            },
            //�v�f�̍���
            calculateItemHeight: function (index) {
                return 45;
            },
            //�v�f��
            countItems: function () {
                return new Date($scope.currentMonth.getFullYear(), $scope.currentMonth.getMonth(), 0).getDate();
            },
            //��ʊO�̗v�f���폜:�K�v���܂��������ĂȂ�
            destroyItemScope: function (index, scope) {
               console.log('Destroyed item #' + index);
            }
        };
    });
    //�����܂�

    ons.ready(function () {
        // Init code here
    });
})();
