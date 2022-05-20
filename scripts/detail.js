// when click the thumb image, switch the image opacity to 1 & z-index to 9
var getExpand = function(area,routeName){
  $('.thumb').each((index, item) => {
    // jquery .each方法item返回為dom object 而不是jq object，可使用原生js方法offsetTop得出元素距離頁面頂部的距離
    item.addEventListener('click', function(){
      // show orginal image
      $('.expand_box').css({
        'z-index': 9,
        'opacity': 1
      })
      $('.orginal_image').css('top', `${item.offsetTop}px`)
      $('.orginal_image').attr('src',  `../images/${area}/${routeName}/img${index+1}.png`)
    })
  })
}

// click the mask div, switch the image opacity to 0 & z-index to -1
$('.mask').on('click',function(){
  $('.expand_box').css({
    'z-index': -1,
    'opacity': 0
  })
})
