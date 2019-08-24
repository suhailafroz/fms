
function display_kmlmap() {
    var map_options = {
        mapTypeId: google.maps.MapTypeId.TERRIAN,
        zoom: 10
    }

    var map = new google.maps.Map(document.getElementById("map_canvas", map_options));
    var kmlUrl = 'https://raw.githubusercontent.com/nehachoutapelly/kmlrep/master/kml.kml';
    var kmlOptions = { map: map }

    var kmlLayer = new google.maps.KmlLayer(kmlUrl, kmlOptions);
    var myLatLng = [[17.415061, 78.464829],
    [17.411595, 78.462041],
    [17.408377, 78.468265],
    [17.391636, 78.440065],
    [17.370234, 78.44731],
    [17.4360955, 78.469752999],
    [17.425061, 78.464829],
    [17.384561, 78.438749],
    [17.378546, 78.4187459],
    [17.3671245, 78.4025487],
    [17.4098657, 78.464829],
    [17.4287545, 78.425871],
    [17.3387461, 78.68745],
    [17.3253261, 78.444879]
    ];//{ lat: 17.415061,  78.464829 };



    var marker;
    var contentString = 'This is the infoWindow content';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    for (i = 0; i < myLatLng.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(myLatLng[i][0], myLatLng[i][1]),
            map: map,
            animation: google.maps.Animation.DROP
        });
    }
    for (i = 0; i < myLatLng.length; i++) {
        marker.addListener('click', toggleBounce);
    }

    function toggleBounce() {
        infowindow.open(map, marker);
    }
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true   
        // title: {
        //     text: "Chart"
        // },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "spline",
                dataPoints: [
                    { label: "RAINFALL(CM)", y: 242.24 },
                    { label: "RAINFALL(MM)", y: 2422 },
                    { label: "DANGER(IN %)", y: 56 },
                    { label: "AFFECTED(IN NO)", y: 3 },
                    { label: "LIFES LOST", y: 0 }
                ]
            }
        ]
    });
    chart.render();

    var pie = new CanvasJS.Chart("pieContainer", {
        theme: "light2", // "light2", "dark1", "dark2"
        animationEnabled: true, // change to true   
        // title: {
        //     text: "Chart"
        // },
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "pie",
                dataPoints: [
                    { label: "RAINFALL(CM)", y: 242.24 },
                    { label: "RAINFALL(MM)", y: 2422 },
                    { label: "DANGER(IN %)", y: 56 },
                    { label: "AFFECTED(IN NO)", y: 3 },
                    { label: "LIFES LOST", y: 0 }
                ]
            }
        ]
    });
    pie.render();
}
