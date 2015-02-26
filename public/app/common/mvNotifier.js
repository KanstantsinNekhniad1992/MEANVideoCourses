angular.module('app').factory('mvNotifier', function(toaster){
   return {
       notify: function(msg, type) {
           toaster.pop(type, type, msg);
           console.log(msg);
       }
   }
});