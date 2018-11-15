﻿/// <reference path="../Scripts/etc/angular.d.ts" />
/// <reference path="../node_modules/@types/jquery/index.d.ts" />
/// <reference path="../node_modules/@types/lodash/index.d.ts" />

declare var moment: any;

angular.module('termin', ['ngMaterial', 'ngMessages'])
  .service("AccountService", Termin.Services.AccountService)
  .service("StorageService", Termin.Services.StorageService)
  .service("ConverterService", Termin.Services.ConverterService)
  .service("TabService", Termin.Services.TabService)
  .component("formInputComponent", Termin.Components.FormInputComponent)
  .component("loginAccessComponent", Termin.Components.LoginAccessComponent)
  .component("calendarComponent", Termin.Components.CalendarComponent)
  .component("usersEditorComponent", Termin.Components.UsersEditorComponent)
  .config(
    function($mdDateLocaleProvider: any) {

      $mdDateLocaleProvider.firstDayOfWeek = 1;
      $mdDateLocaleProvider.months = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт','ноя','дек'];
      $mdDateLocaleProvider.shortMonths = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт','ноя','дек'];
      $mdDateLocaleProvider.days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
      $mdDateLocaleProvider.shortDays = ['Вс', 'Пн', 'Вт', 'Ср','Чт','Пт','Сб'];
      $mdDateLocaleProvider.formatDate = function(date: any) {
        return moment(date).format('YYYY-MM-DD');
      };
      
    }
  )
  .controller('myCtrl', Termin.Components.TerminController);