// 1. erase everything below this line and paste in your geojson
// 2. add the following before your pasted content, so that the map
//    will understand how to find your geojson. See README.md for more info
//
//    var json =
//
//    See example below:


var json = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#00ff00",
        "marker-size": "medium",
        "marker-symbol": "",
        "title": "Love Library Garden",
        "image": "<a data-flickr-embed=\"true\" href=\"https://www.flickr.com/photos/189753833@N07/50237618773/in/album-72157715528007683/\" title=\"yawn_connie\"><img src=\"https://live.staticflickr.com/65535/50237618773_c9052299b5_n.jpg\" width=\"240\" height=\"320\" alt=\"yawn_connie\"></a><script async src=\"//embedr.flickr.com/assets/client-code.js\" charset=\"utf-8\"></script>",
        "description": "Went for a walk in the garden",
        "date": "jfkalj"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -96.702561378479,
          40.81735756955039
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#373fff",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "title": "Route to Hamilton",
        "marker-symbol": ""
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -96.70258283615112,
            40.817341330445025
          ],
          [
            -96.70405268669128,
            40.81693535151902
          ],
          [
            -96.7040741443634,
            40.818283191984804
          ],
          [
            -96.70499682426453,
            40.8183075502955
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "stroke": "#ffe500",
        "stroke-width": 2,
        "stroke-opacity": 1,
        "fill": "#ffb1d5",
        "fill-opacity": 0.5,
        "title": "Hamilton Hall",
        "image": "https://jdussault477.files.wordpress.com/2020/09/hearts.jpg",
        "danger": "Chemicals!"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              -96.7047929763794,
              40.818356266890085
            ],
            [
              -96.70440673828125,
              40.81832378916436
            ],
            [
              -96.70437455177307,
              40.818510535870175
            ],
            [
              -96.70415997505188,
              40.818510535870175
            ],
            [
              -96.70413851737975,
              40.81876223712012
            ],
            [
              -96.70442819595337,
              40.81878659525492
            ],
            [
              -96.70443892478941,
              40.819030176110914
            ],
            [
              -96.7045247554779,
              40.81904641480285
            ],
            [
              -96.70453548431396,
              40.81909513085478
            ],
            [
              -96.70462131500243,
              40.81909513085478
            ],
            [
              -96.70465350151062,
              40.819030176110914
            ],
            [
              -96.70480370521544,
              40.819030176110914
            ],
            [
              -96.7047929763794,
              40.818356266890085
            ]
          ]
        ]
      }
    }
  ]
}
