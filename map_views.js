const mapViewList = {
  views: [
    {
      subtitle: "中国云南省",
      text:
        "<p>中国西南的云南省是一个多山的地区。</p><p class='legend'>(红色部分为云南)</p><p class='directions'>&#128269; 单击右箭头按钮查看下一张图</p>",
      layers: ["yunnanOutline"], //
      zoom: 5,
      lat: 30.0,
      long: 104.0,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "云南高原地区",
      text:
        "<p>该地区是许多湖泊的家园，总面积为1066平方公里。其中九个高原湖泊的表面积超过30平方公里。这些湖泊跨越多个分水岭。</p><p>(分水岭用红色标出，湖泊用蓝色标出。)</p>",
      layers: ["subBasins", "nineLakes"],
      zoom: 7,
      lat: 26.199619,
      long: 101.967598,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "玉溪城区",
      text:
        '<p>其中三个高原湖泊位于云南玉溪城区。玉溪市政府负责这些湖泊的修复和保护。</p><p class="legend">(绿色部分为玉溪市)</p>',
      layers: ["yuxiOutline", "nineLakes"],
      zoom: 8,
      lat: 24.423742,
      long: 102.810943,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "玉溪境内的三个湖",
      text:
        "<p>在这三个湖中，抚仙湖比杞麓湖和星云湖更大、更深。</p><p class='directions'>&#128269; 单击湖泊以了解有关它们的更多信息。</p>",
      layers: ["yuxiLakes"], //
      zoom: 10,
      lat: 24.423742,
      long: 102.810943,
      tiles: "satelliteStreets",
      polyColor: "#3388ff"
    },
    {
      subtitle: "玉溪湖与伊利湖的比较",
      text:
        "<p>伊利湖（在这里位于玉溪地区的湖泊下方）尽管水量和表面积较大，但对水质的威胁也相似</p><p class='directions'>&#128269; 单击湖泊以了解有关它们的更多信息。</p>",
      layers: ["yuxiLakes", "lakeErie"],
      zoom: 8,
      lat: 23.609959,
      long: 104.34255,
      tiles: "noLabels",
      polyColor: "#3388ff"
    }
  ]
};
