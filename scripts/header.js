// create class="header_container" div and append to header
const headerContainer = $('<div class="header_container"></div>')
$('.header').append(headerContainer)

headerContainer.html( 
  '<div class="info_head"><div class="contact"><span style="color: gray;">關注我們：</span><a href="javascript:;" class="fb"></a><a href="javascript:;" class="ins"></a><a href="javascript:;" class="wechat"></a><a href="javascript:;" class="youtube"></a><div class="userBox"></div></div></div><div class="info_body"><div class="leftBox"><a href="./home.html" class="header_title"></a><div class="inputBox"><button class="button">搜尋</button><input type="text" class="input" placeholder="搜尋路綫(e.g. 獅子山)"><div class="magnifying"></div></div><div class="hot"><span>熱門:</span><a href="javascript:;">獅子山</a><a href="javascript:;">太平山頂</a></div>  </div><div class="rightBox"><a href="./home.html" class="logo"><img src="../images/logo_index.png" alt=""></a><div class="fontsBox">字體大小：<input type="button" value="a" disabled="false" class="medium" >&nbsp;/&nbsp;  <input type="button" value="A" class="large" ></div></div></div>'
)


// define switch font size function
const switchFontSize = (fontSize) => {
  $('html').css('font-size',`${fontSize}px`)
}

// 事件監聽 檢測click事件，然後執行switchFontSize function並傳入參數
$('.large').on('click', function(){
  $(this).attr('disabled', true)
  $('.medium').attr('disabled',false)
  switchFontSize(21)
})
$('.medium').on('click', function(){
  $(this).attr('disabled', true)
  $('.large').attr('disabled',false)
  switchFontSize(16)
})

// 使用localStorage方法控制 userBox 的顯示
function getUserBox(){
  // 查看在local storage的數據 chrome: Application => Local Storage
  const name = localStorage.getItem('name')

  if(name === null){
    $('.userBox').html('<span class="userIcon"></span><a href="./login.html" class="signIn">登入</a>')
  }else{
    $('.userBox').html(`<span class="userIcon"></span>Hi, &nbsp;<a href="javascript:;" class="helloUser">${name}</a> &nbsp;<a class="logOut" href="javascript:;" >登出</a>`) 
  }
}
getUserBox()

// click the logOut button and then removeItem from localStorage
$('.logOut').on('click',function(){
  localStorage.removeItem('name')
  getUserBox()
})

