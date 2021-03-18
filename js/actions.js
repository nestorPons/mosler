$('#my-helper').on('click', function(e) {
    self = $(this)
    $('.toglehide').slideToggle(function() {
        text = self.find('span').text()
        if (text == "Mostrar la ayuda") {
            self.find('span').text('Ocultar la ayuda')
        } else {
            self.find('span').text('Mostrar la ayuda')
        }
    })
})

$('#table-print').on('click', function() {
    $('#datatable').printThis()
})

$('#chart-print').on('click', function() {
    imprimirGrafica()
})