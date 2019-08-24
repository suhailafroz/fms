
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
    [17.398377, 78.558265],
    [17.391636, 78.440065],
    [17.210234, 78.59731],
    [17.4360955, 78.55975269999999],
    [17.3457176, 78.55222959999992],
    [17.406283, 78.489987],
    [17.3687826, 78.52467060000004],
    [17.361564, 78.474665],
    [17.367781, 78.432861],
    [17.357362, 78.511196],
    [17.4138277, 78.4397584],
    [17.397431, 78.251],
    [17.410586, 78.465232],
    [17.491595, 78.292041]
    ];//{ lat: 17.415061,  78.464829 };

    var contentString = 'This is the infoWindow content';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker;
    for (i = 0; i < myLatLng.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(myLatLng[i][0], myLatLng[i][1]),
            map: map,
            animation: google.maps.Animation.DROP
        });
    }
    marker.addListener('click', toggleBounce);

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
