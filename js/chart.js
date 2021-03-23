var ctx = document.getElementById('myChart').getContext('2d');


var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',
    // The data for our dataset
    data: {
        labels: [],
        datasets: [{
            label: 'Gráfica Mosler',
            backgroundColor: [],
            borderColor: 'rgb(255, 99, 132)',
            data: []
        }]
    },
    options: {
        legend: {
            display: false,
        },
        scales: {
            yAxes: [{
                stacked: true,
                gridLines: {
                    display: true,
                    color: "rgba(255,99,132,0.2)"
                }
            }],
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 100
            }
        }
    }
});

function cargarDatosGrafica(data) {
    addData(data[0].value, data[9].value, data[10].hex)
}

function addData(label, data, color) {
    chart.data.labels.push(label);

    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
        dataset.backgroundColor.push(color);
    });
    chart.update();
}


function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
        parseInt(result[1], 16),
        parseInt(result[2], 16),
        parseInt(result[3], 16)
    ] : null;
}

function actualizaChartDato(dato) {
    var colorBar;
    if (dato >= 0 && dato <= 100) {
        var verde = 'rgb(0,228,0)';
        // colorBar.backgroundColor(verde);
    }
    if (dato > 101 && dato <= 200) {
        var amarillo = 'rgb(255,255,0)';
        //colorBar.backgroundColor(amarillo);
    }
    if (dato > 201 && dato <= 300) {
        var naranja = 'rgb(255,126,0)';
        //colorBar.backgroundColor(naranja);
    }

    if (myChart.data.datasets.length) {
        myChart.data.datasets[0].backgroundColor[0] = colorBar;
        myChart.data.datasets[0].data = [dato];
        myChart.update();
    }
}

function imprimirGrafica() {

    let canvas = document.querySelector("#myChart");
    let canvas_img = canvas.toDataURL("image/png", 1.0); //JPEG will not match background color
    let pdf = new jsPDF('landscape', 'in', 'letter'); //orientation, units, page size
    pdf.addImage(canvas_img, 'png', .5, 1.75, 10, 5); //image, type, padding left, padding top, width, height
    pdf.autoPrint(); //print window automatically opened with pdf
    let blob = pdf.output("bloburl");
    window.open(blob);

}