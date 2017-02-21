var app = angular.module("markApp", []);

app.controller('dataController', function($http, $log){
  var self = this;
  self.artistName;

  self.urlGenerator = function (artist) {
      var searchArtist =  "https://itunes.apple.com/search?term=" + artist + "&callback=JSON_CALLBACK";
      $log.log(searchArtist);
      return searchArtist;
  }

  self.getArtist = function(artist){
    var urlSearch = self.urlGenerator(artist);
    $http({
      url: urlSearch,
      method: 'jsonp',
      cache: false,
      dataType: 'json'

    })
    .then(
      function(response){
        $log.log('successful call');
        self.artistData = response.data.results;
      },
      function(response){
        $log.error('error in call')
      }
    );
  }



});
