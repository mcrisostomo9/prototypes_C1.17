var app = angular.module("markApp", []);

app.controller('dataController', function($http, $log){
  var self = this;
  self.artistName;
  self.urlGenerator = function (artist) {
      var searchArtist =  "https://itunes.apple.com/search?term=[" + [artist] + "]&callback=JSON_CALLBACK";
      $log.log(searchArtist);
      return searchArtist;
  }

  self.getArtist = function(search){
    var urlSearch = self.urlGenerator(search);
    $http({
      url: urlSearch,
      method: 'post',
      dataType: 'json',
      cache: false
    })
    .then(
      function(response){
        $log.log(response.data)
      },
      function(response){
        $log.error('error in call')
      }
    );
  }



});
