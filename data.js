var APP_DATA = {
  "scenes": [
    {
      "id": "0-tocador-y-lociones",
      "name": "Tocador y Lociones",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0122126372031701,
          "pitch": 0.17146775311513274,
          "rotation": 0.7853981633974483,
          "target": "2-vestidos-y-esposo"
        },
        {
          "yaw": -2.121734562620345,
          "pitch": 0.2220320407920191,
          "rotation": 5.497787143782138,
          "target": "1-zapatero-y-bolsos"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-zapatero-y-bolsos",
      "name": "Zapatero y Bolsos",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9944177186662628,
          "pitch": 0.2534370969319273,
          "rotation": 5.497787143782138,
          "target": "0-tocador-y-lociones"
        },
        {
          "yaw": 3.1158879647047115,
          "pitch": 0.09363663617999407,
          "rotation": 0,
          "target": "2-vestidos-y-esposo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-vestidos-y-esposo",
      "name": "Vestidos y Esposo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.827848928786299,
          "pitch": 0.11706460259501483,
          "rotation": 0,
          "target": "1-zapatero-y-bolsos"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Vestier Villas de la Candelaria",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
