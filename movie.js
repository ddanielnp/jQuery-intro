$(document).ready(function () {
  // run ajax now
  // 2 methods = GET and POST

  var discover_movie_url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c4da5184ea0c643c9b62058cfe9428ad'
  var image_url = 'https://image.tmdb.org/t/p/w300/'
  var $list = $('.movie-list')

  $.get(discover_movie_url)
  .done(function (data) {
    var movie_json = data.results
    // console.log(movie_json[0].poster_path)
    createImage(movie_json)
  })

  function createImage (obj) {
    for (var i = 0; i < obj.length; i++) {
      var link = obj[i].poster_path
      var $newLi = $('<li>')
      var $newImg = $('<img>')
      $newImg.attr('src', image_url + link)
      var $appendList = $list.append($newLi)
      $appendList.append($newImg)
    }
  }

// search movies
  var search_movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=c4da5184ea0c643c9b62058cfe9428ad&query='
  var $form = $('form')
  var $search = $('search')

  $form.on('submit', function (event) {
    event.preventDefault()
    var form_data = $(this).serializeArray()[0].value

    $.get(addMovies(form_data))
    .done(function (data) {
      var search_json = data.results
      console.log(search_json)
      $list.empty()
      createImage(search_json)
    })
  })

  function addMovies (data) {
    return search_movie_url + data
  }
}) // closing for ready.function
