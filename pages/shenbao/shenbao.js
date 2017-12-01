// pages/addShebei/addShebei.js
Page({

 /**
  * 页面的初始数据
  */
 data: {
  array: ['请选择申报类型', '售后', '维保'],
  array1: ['请选择设备名称', '电视机', '电风扇', '电动机'],
  index: 0,
  index1: 0,
  date: '请选择出厂时间'
 },

 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function (options) {

 },

 /**
  * 生命周期函数--监听页面初次渲染完成
  */
 onReady: function () {

 },

 /**    
  * 生命周期函数--监听页面显示
  */
 onShow: function () {

 },

 /**
  * 生命周期函数--监听页面隐藏
  */
 onHide: function () {

 },

 /**
  * 生命周期函数--监听页面卸载
  */
 onUnload: function () {

 },

 /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function () {

 },

 /**
  * 页面上拉触底事件的处理函数
  */
 onReachBottom: function () {

 },

 /**
  * 用户点击右上角分享
  */
 onShareAppMessage: function () {

 },
 bindPickerChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
   index: e.detail.value
  })
 },
 bindPickerChange1: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
   index1: e.detail.value
  })
 },
 bindDateChange: function (e) {
  console.log('picker发送选择改变，携带值为', e.detail.value)
  this.setData({
   date: e.detail.value
  })
 },
 up: function () {
  var that = this;
  wx.chooseImage({
   success: function (res) {
    var tempFilePaths = res.tempFilePaths
    if (tempFilePaths.length > 8) {
     wx.showModal({
      title: '提示',
      content: '最多上传8张图片',
     })
    } else {
     that.setData({
      imgList: tempFilePaths
     })
    }
    wx.uploadFile({
     url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
     filePath: tempFilePaths[0],
     name: 'file',
     formData: {
      'user': 'test'
     },
     success: function (res) {
      var data = res.data
      //do something
      console.log(data)
     }
    })
   }
  })
 }
})