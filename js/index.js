var data = {}
jQuery(function() {
    $('select').formSelect();
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

        $('#frm')[0].reset()
    })
});

function crearFilaTabla() {
    let t = $('table template').contents().clone()
    for (let d of data) {
        console.log(d.name, d.value)
        claseCSS = d.class || ''
        console.log(claseCSS)
        t.find(`[name="${d.name}"]`).text(d.value).addClass(claseCSS)
    }
    t.appendTo('table tbody')
    console.log(data)
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

    agregarDatos("cuantificacion", er)

    // Clase para la celda
    switch (true) {
        case (er < 251):
            css = "green darken-1"
            v = "Muy bajo"
            break
        case (er < 501):
            css = "yellow darken-1"
            v = "Pequeño"
            break
        case (er < 751):
            css = "orange darken-1"
            v = "normal"
            break
        case (er < 1001):
            css = "deep-orange darken-1"
            v = "Grande"
            break
        default:
            css = "red darken-1"
            v = "Elevado"
    }
    agregarDatos("riesgo", v, css)
}

function agregarDatos(nombre, valor, claseCSS = "") {
    return new Promise((resolve, reject) => {
        try {
            data.push({
                "name": nombre,
                "value": valor,
                class: claseCSS
            })
            resolve()
        } catch (error) {
            console.error('ERROR GUARDANDO LOS DATOS EN LA VARIABLE DATA')
            reject()
        }
    })
}