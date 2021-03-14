var data = {}
jQuery(async function () {
  $('select').formSelect();
  $('#frm').on("submit", function (event) {
    event.preventDefault();
    data = $(this).serializeArray()

    calculaCaracterDeRiesgo()
    calculaProbabilidad()
    calculaCuantificacion()
    calculoYClasificacion()

    console.log(data)
    crearFilaTabla()
    if (data.length == 7) {
    }
    // todo:: $('#frm')[0].reset()
  })
});

function crearFilaTabla() {
  let t = $('table template').contents()

  for (let d of data) {
    claseCSS = d.class || ''
    console.log(claseCSS)
    t.find(`[name="${d.name}"]`).text(d.value).addClass(claseCSS)
  }
  t.appendTo('table tbody')
}

async function calculaCaracterDeRiesgo() {
  // I = F X S
  // D = P X E
  // C = I + D

  let f = data[1].value
  let s = data[2].value

  await agregarDatos("caracter", f + s)

}

async function calculaProbabilidad() {
  // PR = A X V

  let a = data[5].value
  let v = data[6].value

  await agregarDatos("probabilidad", a * v)

}

async function calculaCuantificacion() {
  // ER = C X PR

  let c = data[7].value
  let pr = data[8].value

  await agregarDatos("cuantificacion", c * pr)

}

async function calculoYClasificacion() {

  let er = parseInt(data[9].value)
  let v = ""
  let c = ""

  switch (true) {
    case (er < 251):
      c = "green darken-1"
      v = "Muy bajo"
      break
    case (er < 501):
      c = "yellow darken-1"
      v = "Pequeño"
      break
    case (er < 751):
      c = "orange darken-1"
      v = "normal"
      break
    case (er < 1001):
      c = "deep-orange darken-1"
      v = "Grande"
      break
    case (12):
      c = "red darken-1"
      v = "Elevado"
  }
  await agregarDatos("riesgo", v, c)
}

function agregarDatos(nombre, valor, claseCSS = "") {
  return new Promise((resolve) => {
    data.push({ "name": nombre, "value": valor, class: claseCSS })
    resolve()
  })
}
