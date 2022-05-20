const navData = [
  { title: '主頁', href: './home.html', children:[] },
  { title: '香港' , href: './hk.html', children: [
      { location: '太平山頂', href: './victoriapeak.html'},
      { location: '大潭水塘', href: './taitamreservoir.html' },
      { location: '南朗山', href: 'javascript:;' }
    ]
  },

  { title: '九龍' , href: './kln.html', children: [
    { location: '獅子山', href: './lionrock.html' },
      { location: '飛鵝山', href: 'javascript:;'},
      { location: '魔鬼山', href: 'javascript:;' }
    ]
  },

    { title: '新界' , href: './nt.html', children: [
      { location: '青山腹地', href: './castlepeaks_hinterland.html'},
      { location: '杯靈雙渡', href: 'javascript:;' },
      { location: '千島 · 九逕', href: 'javascript:;' }
    ]
  },

  { title: '離島' , href: './islands.html', children: [
      { location: '長洲關公忠義亭', href: './cheungchau.html' },
      { location: '鴨洲', href: 'javascript:;'},
      { location: '坪洲', href: 'javascript:;' }
    ]
  },
  { title: 'About Us', href: './about.html', children:[] },
]

// navbar區域
const nav = $('.nav')

nav.append('<div class="nav_container"></div>')

navData.map((item,index) => {

  // 篩選出除了主頁和about us
  if(index === 0){
    $('.nav_container').append('<a href="./home.html" class="nav_item home">主頁</a>')
  }else if(index === navData.length - 1){
    $('.nav_container').append('<a href="./about.html" class="nav_item about">About Us</a>')
  }else {
    const navItem = $(`<a href=${item.href} class="nav_item">${item.title}</a>`)

    navItem.append(`<div class="slideDown"><a href=${item.children[0].href} class="slideDown_item">${item.children[0].location}</a><a href=${item.children[1].href} class="slideDown_item">${item.children[1].location}</a><a href=${item.children[2].href}" class="slideDown_item">${item.children[2].location}</a></div>`)

    $('.nav_container').append(navItem)
  }
})

// scroll bar scroll到指定高度 轉換navbar的position 模式
let navOffSetTop = nav.offset().top 
let navouterHeight = nav.outerHeight()

// window onscroll 事件
window.onscroll = function(){
  // 獲取當前scroll bar滾動的高度
  let windowScrollHeight = $('html').scrollTop()

  // 當滾動到nav 到body元素頂部的距離 + nav 自身高度時更改nav的classname
  if(windowScrollHeight >= navOffSetTop + navouterHeight ){
    nav.attr('class', 'nav nav_fixed')
  }else{
    nav.attr('class', 'nav')
  }
}
