var app = angular.module("markApp", []);

app.controller('dataController', function($http, $log){
  var self = this;
  self.artistName;

  self.urlGenerator = function (artist) {
      var searchArtist =  "https://itunes.apple.com/search?term=" + artist + "&callback=JSON_CALLBACK";
      $log.log(searchArtist);
      return searchArtist;
  }

  self.getArtist = function(search){
    var urlSearch = self.urlGenerator(search);
    $http({
      url: urlSearch,
      method: 'jsonp',
      cache: false,
      dataType: 'json'

    })
    .then(
      function(response){
        $log.log('successful call', response);
        self.artistData = response.data;
        $log.log(self.artistData.artistName);
      },
      function(response){
        $log.error('error in call')
      }
    );
  }



});
