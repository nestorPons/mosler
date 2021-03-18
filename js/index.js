var data = {}
jQuery(function() {
    $('select').formSelect();
    $('ul.tabs').tabs({
        swipeable: true,
        responsiveThreshold: 1920
    });

    $('#frm').on("submit", async function(event) {
        event.preventDefault();
        data = $(this).serializeArray()
        try {
            await calculaCaracterDeRiesgo()
            await calculaProbabilidad()
            await calculaCuantificacion()
        } catch (error) {
            alert('No se han rellenado todos los campos')
            return false
        }

        crearFilaTabla()
        cargarDatosGrafica(data)
        $('#frm')[0].reset()
    })
});

function crearFilaTabla() {
    let t = $('table template').contents().clone()
    for (let d of data) {
        claseCSS = d.class || ''
        t.find(`[name="${d.name}"]`).text(d.value).addClass(claseCSS)
    }
    t.appendTo('table tbody')
}

function calculaCaracterDeRiesgo() {
    // I = F X S
    // D = P X E
    // C = I + D

    let f = parseInt(data[1].value)
    let s = parseInt(data[2].value)
    let i = f * s

    let p = parseInt(data[3].value)
    let e = parseInt(data[4].value)
    let d = p * e

    agregarDatos("caracter", i + d)

}

function calculaProbabilidad() {
    // PR = A X V

    let a = parseInt(data[5].value)
    let v = parseInt(data[6].value)

    agregarDatos("probabilidad", a * v)

}

function calculaCuantificacion() {
    // ER = C X PR

    let c = parseInt(data[7].value)
    let pr = parseInt(data[8].value)
    let er = c * pr
    let v = ""
    let css = ""
    let hex = ""

    agregarDatos("cuantificacion", er)

    // Clase para la celda
    switch (true) {
        case (er < 251):
            hex = '#43a047'
            css = "green darken-1"
            v = "Muy bajo"
            break
        case (er < 501):
            hex = "#fdd835"
            css = "yellow darken-1"
            v = "Pequeño"
            break
        case (er < 751):
            hex = "#fb8c00"
            css = "orange darken-1"
            v = "normal"
            break
        case (er < 1001):
            hex = "#f4511e"
            css = "deep-orange darken-1"
            v = "Grande"
            break
        default:
            hex = "#e53935"
            css = "red darken-1"
            v = "Elevado"
    }
    agregarDatos("riesgo", v, css, hex)
}

function agregarDatos(nombre, valor, claseCSS = "", hex = "") {
    return new Promise((resolve, reject) => {
        try {
            data.push({
                "name": nombre,
                "value": valor,
                class: claseCSS,
                hex: hex
            })
            resolve()
        } catch (error) {
            console.error('ERROR GUARDANDO LOS DATOS EN LA VARIABLE DATA')
            reject()
        }
    })
}