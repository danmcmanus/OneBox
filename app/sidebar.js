(function() {
    angular.module('app').controller('sidebarController', sidebarController);

    function sidebarController() {
        this.isOpen = false;
        this.isVisible = false;

        function collapse() {
            var elem = document.getElementById('#sidebar');
            elem.toggleClass('hide-sidebar');
            this.isVisible = !this.isVisible;
        }
    }
}());