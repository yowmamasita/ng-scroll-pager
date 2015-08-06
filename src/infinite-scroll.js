(function(angular, $) {
  'use strict';

  angular
    .module('ngScrollPager', [])
    .directive('ngScrollPager', ngScrollPager);

  function ngScrollPager() {

    return {
      restrict: 'EA',
      link: link,
      scope: {
        next_page: '=page'
      }
    };

    function link(scope, element, attrs) {
      $(window).scroll(function() {
        if ($(document).height() - $(window).height() <= $(window).scrollTop()) {
          scope.next_page();
        }
      });
    }
  }
})(window.angular, window.jQuery);
