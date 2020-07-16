
var app = {
    initialize: function() {
        this.bindEvents();
    },
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // Need to write code for load event to show some Icon while starting the application 
    },
    onDeviceReady: function() {

    }
};
