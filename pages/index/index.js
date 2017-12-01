Page({
 data: {
  selected: true,
  selected1: false,
  hidden: false,
 },
 selected: function (e) {
  this.setData({ 
   selected1: false,
   selected2: false,
   selected3: false,
   selected: true
  })
 },
 selected1: function (e) {
  this.setData({
   selected: false,
   selected2: false,
   selected3: false,
   selected1: true
  })
 },
 selected2: function (e) {
  this.setData({
   selected: false,
   selected1: false,
   selected3: false,
   selected2: true
  })
 },
 selected3: function (e) {
  this.setData({
   selected2: false,
   selected1: false,
   selected: false,
   selected3: true
  })
 },
 pingjia: () => {
  wx.navigateTo({
   url: '../pingjia/pingjia',
  })
 },
 orderInfo: () => {
  wx.navigateTo({
   url: '../orderInfo/orderInfo',
  })
 }
})
