var app = angular.module('sgtApp', []);

app.provider('sgtData', function() {
    //Create a variable to hold this
    var self = this;

    //Create a variable to hold your api key but set it to an empty string
    var api_key = '';

    //Create a variable to hold the API url but set it to an empty string
    var api_url = '';

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log) {
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
            call_api: function() {
                var data = "api_key=" + api_key;
                var defer = $q.defer();
                $http({
                        url: api_url,
                        method: 'post',
                        data: data,
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    })
                    .then(
                        function(resp) {
                            defer.resolve(resp);
                            $log.log('call works', resp)
                        },
                        function() {
                            defer.reject('error in call');
                            $log.error('error in call')
                        }
                    );

                    return defer.promise
            }
        }
    };

});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
  api_key = 'Vk3PWKYwuR';
  api_url = 'http://s-apis.learningfuze.com/sgt/get'
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function() {
    //Create a variable to hold this, DO NOT use the same name you used in your provider

    //Add an empty data object to your controller, make sure to call it 'data'


    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help

});
