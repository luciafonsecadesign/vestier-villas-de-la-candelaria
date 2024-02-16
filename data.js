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
          "yaw": -3.000816215818741,
          "pitch": 0.2280184465494166,
          "rotation": 0,
          "target": "1-zapatero"
        },
        {
          "yaw": -2.079173664105225,
          "pitch": 0.2087772051927459,
          "rotation": 0.7853981633974483,
          "target": "2-vestidos-y-esposo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-zapatero",
      "name": "Zapatero",
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
          "yaw": -2.974708502950566,
          "pitch": 0.1257580464916419,
          "rotation": 0,
          "target": "0-tocador-y-lociones"
        },
        {
          "yaw": 1.6423816370565767,
          "pitch": 0.16339520572812027,
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
          "yaw": 2.3245337681738585,
          "pitch": 0.311512394029263,
          "rotation": 5.497787143782138,
          "target": "3-central-sillon"
        },
        {
          "yaw": -0.6238061291301733,
          "pitch": 0.12496050404340231,
          "rotation": 0,
          "target": "4-central-joyas"
        },
        {
          "yaw": -2.700236358349777,
          "pitch": 0.12711559948606777,
          "rotation": 0.7853981633974483,
          "target": "1-zapatero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-central-sillon",
      "name": "Central Sillon",
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
          "yaw": 0.18282871347030571,
          "pitch": 0.3017606599289877,
          "rotation": 13.351768777756625,
          "target": "2-vestidos-y-esposo"
        },
        {
          "yaw": -1.3614695110232429,
          "pitch": 0.09299552595390814,
          "rotation": 5.497787143782138,
          "target": "1-zapatero"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-central-joyas",
      "name": "Central Joyas",
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
          "yaw": 0.01141333023054436,
          "pitch": 0.4144063234541058,
          "rotation": 0,
          "target": "2-vestidos-y-esposo"
        },
        {
          "yaw": 0.5215918234966139,
          "pitch": 0.0761168541266457,
          "rotation": 0.7853981633974483,
          "target": "2-vestidos-y-esposo"
        },
        {
          "yaw": -0.09287672563253402,
          "pitch": 0.024893598301439113,
          "rotation": 5.497787143782138,
          "target": "3-central-sillon"
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
