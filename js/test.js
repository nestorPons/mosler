var dataTest = [
    [{
            "name": "definicion",
            "value": "Riesgo 1"
        },
        {
            "name": "funcion",
            "value": "1"
        },
        {
            "name": "sustitucion",
            "value": "1"
        },
        {
            "name": "profundidad",
            "value": "1"
        },
        {
            "name": "extension",
            "value": "1"
        },
        {
            "name": "agresion",
            "value": "1"
        },
        {
            "name": "vulnerabilidad",
            "value": "1"
        },
        {
            "name": "caracter",
            "value": 2,
            "class": "",
            "hex": ""
        },
        {
            "name": "probabilidad",
            "value": 1,
            "class": "",
            "hex": ""
        },
        {
            "name": "cuantificacion",
            "value": 2,
            "class": "",
            "hex": ""
        },
        {
            "name": "riesgo",
            "value": "Muy bajo",
            "class": "green darken-1",
            "hex": "#43a047"
        }
    ],
    [{
            "name": "definicion",
            "value": "Riesgo 2"
        },
        {
            "name": "funcion",
            "value": "3"
        },
        {
            "name": "sustitucion",
            "value": "3"
        },
        {
            "name": "profundidad",
            "value": "3"
        },
        {
            "name": "extension",
            "value": "3"
        },
        {
            "name": "agresion",
            "value": "4"
        },
        {
            "name": "vulnerabilidad",
            "value": "2"
        },
        {
            "name": "caracter",
            "value": 18,
            "class": "",
            "hex": ""
        },
        {
            "name": "probabilidad",
            "value": 8,
            "class": "",
            "hex": ""
        },
        {
            "name": "cuantificacion",
            "value": 144,
            "class": "",
            "hex": ""
        },
        {
            "name": "riesgo",
            "value": "Muy bajo",
            "class": "green darken-1",
            "hex": "#43a047"
        }
    ],
    [{
            "name": "definicion",
            "value": "Riesgo 3"
        },
        {
            "name": "funcion",
            "value": "5"
        },
        {
            "name": "sustitucion",
            "value": "5"
        },
        {
            "name": "profundidad",
            "value": "5"
        },
        {
            "name": "extension",
            "value": "5"
        },
        {
            "name": "agresion",
            "value": "5"
        },
        {
            "name": "vulnerabilidad",
            "value": "5"
        },
        {
            "name": "caracter",
            "value": 50,
            "class": "",
            "hex": ""
        },
        {
            "name": "probabilidad",
            "value": 25,
            "class": "",
            "hex": ""
        },
        {
            "name": "cuantificacion",
            "value": 1250,
            "class": "",
            "hex": ""
        },
        {
            "name": "riesgo",
            "value": "Elevado",
            "class": "red darken-1",
            "hex": "#e53935"
        }
    ],
    [{
            "name": "definicion",
            "value": "Riesgo 4"
        },
        {
            "name": "funcion",
            "value": "1"
        },
        {
            "name": "sustitucion",
            "value": "4"
        },
        {
            "name": "profundidad",
            "value": "4"
        },
        {
            "name": "extension",
            "value": "4"
        },
        {
            "name": "agresion",
            "value": "4"
        },
        {
            "name": "vulnerabilidad",
            "value": "2"
        },
        {
            "name": "caracter",
            "value": 20,
            "class": "",
            "hex": ""
        },
        {
            "name": "probabilidad",
            "value": 8,
            "class": "",
            "hex": ""
        },
        {
            "name": "cuantificacion",
            "value": 160,
            "class": "",
            "hex": ""
        },
        {
            "name": "riesgo",
            "value": "Muy bajo",
            "class": "green darken-1",
            "hex": "#43a047"
        }
    ],
    [{
            "name": "definicion",
            "value": "Riesgo 5"
        },
        {
            "name": "funcion",
            "value": "1"
        },
        {
            "name": "sustitucion",
            "value": "4"
        },
        {
            "name": "profundidad",
            "value": "4"
        },
        {
            "name": "extension",
            "value": "4"
        },
        {
            "name": "agresion",
            "value": "4"
        },
        {
            "name": "vulnerabilidad",
            "value": "2"
        },
        {
            "name": "caracter",
            "value": 20,
            "class": "",
            "hex": ""
        },
        {
            "name": "probabilidad",
            "value": 8,
            "class": "",
            "hex": ""
        },
        {
            "name": "cuantificacion",
            "value": 1000,
            "class": "",
            "hex": ""
        },
        {
            "name": "riesgo",
            "value": "Muy bajo",
            "class": "green darken-1",
            "hex": "#43a047"
        }
    ]
]

function loadTest() {
    for (let d of dataTest) {
        crearFilaTabla(d)
        cargarDatosGrafica(d)
    }
    ajustarAlto()
}