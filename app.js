$(document).ready(function () {
  var $form = $('form')
  var $addHome = $('addHome')
  var $tbody = $('tbody')
  var $addMore = $('#addMore')

  $form.on('submit', function (event) {
    // stop the default form submission event
    event.preventDefault()
    var form_data = $(this).serializeArray()
    addNewRow(form_data)
  })

  function addNewRow (data) {
    var $newTr = $('<tr>')
    console.log(data)

    for (i = 0; i < data.length; i++) {
      var $newTd = $('<td>')
      $newTd.text(data[i].value)
      $newTr.append($newTd)
    }

    var $newButton = $('<td><button class="btn btn-xs btn-danger removeHome">Remove</button></td>')
    $tbody.append($newTr)
    $newTr.append($newButton)
  }

  $tbody.on('click', '.removeHome', function () {
    var $removeTr = $(this).parents('tr')
    $removeTr.remove()
  })
})
