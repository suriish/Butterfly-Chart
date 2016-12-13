
/* Initialise Google visualization */
google.load("visualization", "1", {
    packages: ["corechart"]
});

/* Data Foramt for Google Cahrt - provide data in desending  order  */
bdata = google.visualization.arrayToDataTable([
    [' ', 'Most Liked', {
        role: 'style'
    }, {
        role: 'annotation'
    }, 'Most Disliked', {
        role: 'style'
    }, {
        role: 'annotation'
    }],
    [' ', 8.94, '#b87333', 'Food', -8.94, '#b87333', 'Clealines'], /*value , color , label, negative value, color , label */
    [' ', 10.49, 'silver', 'service', -10.49, 'silver', 'Ambiance'],
    [' ', 19.30, 'gold', 'lable2', -19.30, 'gold', 'lable3'],

]);

/* Function to draw butterfly chart */
function drawbarChart(data,targetId) {
    var view1 = new google.visualization.DataView(data);
    view1.setColumns([0, 1, 2, 3, 4, 5, 6]); /* columns in data table*/
    var options1 = {

        chartArea: {
            left: "3%",
            top: "10%",

            width: "94%"
        },
        bar: {
            groupWidth: "95%"
        },
        legend: {
            position: "none"
        },
        isStacked: true,

        hAxis: {
            format: ';',

        },
        vAxis: {
            direction: -1, /* value responsible for making the normal bar chart as butterfly chart */

        },
        animation: {
            duration: 1000,
            easing: 'out',
            startup: true
        },
        annotations: {  /* text decoration for labels */

            textStyle: {

                fontSize: 13,
                bold: true,
                italic: true,
                // The color of the text.
                color: '#871b47',
                // The color of the text outline.
                auraColor: '#d799ae',
                // The transparency of the text.
                opacity: 0.8
            }
        }
    };
    var formatter1 = new google.visualization.NumberFormat({
        pattern: ';'
    });

    formatter1.format(data, 4)
    formatter1.format(data, 1)
    var chart1 = new google.visualization.BarChart(document.getElementById(targetId));
    chart1.draw(view1, options1);
}
