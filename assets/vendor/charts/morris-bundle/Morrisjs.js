(function(window, document, $, undefined) {
    "use strict";
    $(function() {

        if ($('#morris_area').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Area({
                element: 'morris_area',
                behaveLikeLine: true,
                data: [
                    { x: '2011 Q1', y: 4, z: 3 },
                    { x: '2011 Q2', y: 2, z: 1 },
                    { x: '2011 Q3', y: 2, z: 3 },
                    { x: '2011 Q4', y: 4, z: 1 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['Y', 'Z'],
                lineColors: ['#5969ff', '#ff407b'],
                resize: true,
                gridTextSize: '14px'


            });

        }




        if ($('#morris_line').length) {
            // Use Morris.Area instead of Morris.Line
            Morris.Line({
                element: 'morris_line',
                behaveLikeLine: true,
                data: [
                    { y: '2006', a: 10, b: 20 },
                    { y: '2007', a: 65, b: 45 },
                    { y: '2008', a: 50, b: 40 },
                    { y: '2009', a: 75, b: 65 },
                    { y: '2010', a: 50, b: 40 },
                    { y: '2011', a: 75, b: 65 },
                    { y: '2012', a: 100, b: 90 }
                ],

                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['Series A', 'Series B'],
                lineColors: ['#5969ff', '#ff407b'],
                resize: true,
                gridTextSize: '14px'
            });

        }

        if ($('#morris_bar').length) {
            Morris.Bar({
                element: 'morris_bar',
                data: [
                    { x: 'June', y: 1500 },
                    { x: 'July', y: 1200 },
                    { x: 'August', y: 250 },
                    { x: 'Sept', y: 1750 },
                    { x: 'oct', y: 400 },
                    { x: 'november', y: 300 },


                ],
                xkey: 'x',
                ykeys: ['y'],
                labels: ['Rewards'],
                barColors: ['#5969ff'],
                resize: true,
                gridTextSize: '14px'

            });
        }


        if ($('#morris_stacked').length) {
            // Use Morris.Bar
            Morris.Bar({
                element: 'morris_stacked',
                data: [
                    { x: '2011 Q1', y: 3, z: 2, a: 3 },
                    { x: '2011 Q2', y: 2, z: null, a: 1 },
                    { x: '2011 Q3', y: 0, z: 2, a: 4 },
                    { x: '2011 Q4', y: 2, z: 4, a: 3 }
                ],
                xkey: 'x',
                ykeys: ['y', 'z', 'a'],
                labels: ['Y', 'Z', 'A'],
                stacked: true,
                barColors: ['#5969ff', '#ff407b', '#25d5f2'],
                resize: true,
                gridTextSize: '14px'
            });
        }


        if ($('#morris_udateing').length) {
            var nReloads = 0;

            function data(offset) {
                var ret = [];
                for (var x = 0; x <= 360; x += 10) {
                    var v = (offset + x) % 360;
                    ret.push({
                        x: x,
                        y: Math.sin(Math.PI * v / 180).toFixed(4),
                        z: Math.cos(Math.PI * v / 180).toFixed(4)
                    });
                }
                return ret;
            }
            var graph = Morris.Line({
                element: 'morris_udateing',
                data: data(0),
                xkey: 'x',
                ykeys: ['y', 'z'],
                labels: ['sin()', 'cos()'],
                parseTime: false,
                ymin: -1.0,
                ymax: 1.0,
                hideHover: true,
                lineColors: ['#5969ff', '#ff407b'],
                resize: true
            });

            function update() {
                nReloads++;
                graph.setData(data(5 * nReloads));
                $('#reloadStatus').text(nReloads + ' reloads');
            }
            setInterval(update, 100);
        }


        if ($('#morris_donut').length) {
            Morris.Donut({
                element: 'morris_donut',
                data: [
                    { value: 1700, label: 'TECHNICAL EVENTS' },
                    { value: 1500, label: 'SKILLS' },
                    { value: 1250, label: 'ASSIGNMENTS' },
                    { value: 500, label: 'EXAMINATIONS' },
                    { value: 150, label: 'FACULTY INITIATIVES' },
                    { value: 100, label: 'LAB INITIATIVES' },
                    { value: 50, label: 'SPECIAL LAB INITIATIVES' }, { value: 15, label: 'EXTRA-CURRICULAR ACTIVITIES' },
                    { value: 100, label: 'STUDENT INITIATIVES' },
                    { value: 50, label: 'EXTERNAL EVENTS' }
                ],

                labelColor: '#2e2f39',
                gridTextSize: '66px',
                colors: [
                    "#5969ff",
                    "#ff407b",
                    "#25d5f2",
                    "#ffc750",
                    "#5969ff",
                    "#ff407b",
                    "#25d5f2",
                    "#ffc750"

                ],

                formatter: function(value) { return value },
                resize: true
            });
        }








    });

})(window, document, window.jQuery);