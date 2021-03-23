$('#frm').on("submit", async function(event) {
    event.preventDefault();
    let data = $(this).serializeArray()
    await cargarDatos(data, ajustarAlto)

})

$('table').on('click', '.delete-row', function(e) {
    e.stopPropagation()

    $(this).parents('tr').fadeOut(function() {
        $(this).remove()
    })

})

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
    let el = $('#datatable').clone()
    el.printThis({
        beforePrint: function() {
            el.find('[name="acciones"]').remove()
            el.find('[name="definicion"]').attr('colspan', 2)
        }
    })
})

$('#chart-print').on('click', function() {
    imprimirGrafica()
})