var hkArea = '../images/area/area_hk_peak.png'
var klnArea = '../images/area/area_kln_lionrock.png'
var ntArea = '../images/area/area_nt_taimoshan.png'
var islandsArea = '../images/area/area_island_Lcable.png'

var areaData = [
  {
    href: './hk.html',
    alt: '香港',
    imgSrc: hkArea
  },
  {
    href: './kln.html',
    alt: '九龍',
    imgSrc: klnArea
  },
  {
    href: './nt.html',
    alt: '新界',
    imgSrc: ntArea
  },
  {
    href: './islands.html',
    alt: '離島',
    imgSrc: islandsArea
  },
]

  // area區域 
  // 獲取元素
  var area = $('.area')[0]
  areaData.map( item => {
    // 創建element node  以及每個item的HTML內容為圖片
    var areaItem = $(`<a href=${item.href} class="area_item"><img src=${item.imgSrc} alt=${item.alt}></a>`)[0]
    
    // 插入子元素
    area.append(areaItem)
})