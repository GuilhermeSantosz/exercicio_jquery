$(document).ready(function () {

})

$('#form').on('submit', function (e) {
    e.preventDefault()
    const nomeTarefa = $('#task-name').val()
    const novoItem = $('<li style="display: block"></li>')
    $(`<li> ${nomeTarefa} </li>`).appendTo(novoItem)
    $(novoItem).appendTo('ul')

    $(novoItem).appendTo('ul')
    $('#task-name').val('')

    $('#btns').css('display', 'block')
})

$('ul').on('click', 'li', function () {
    $(this).css('text-decoration', 'line-through')
})

$('#btns').on('#clear', function (e) {
    e.preventDefault()
    $(nomeTarefa).val('')
})

