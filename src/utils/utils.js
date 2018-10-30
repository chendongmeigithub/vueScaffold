/**
 * 公用方法
 */
const getLocalStorage = name => {
  let data = localStorage.getItem(name);
  try {
    data = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }

  return data;
};
const setLocalStorage = (name, data) => {
  if (typeof data != "string") {
    data = JSON.stringify(data);
  }

  localStorage.setItem(name, data);
};
const removeLocalStorage = name => {
  localStorage.removeItem(name);
};

const getSessionStorage = name => {
  let data = sessionStorage.getItem(name);
  try {
    data = JSON.parse(data);
  } catch (err) {
    console.log(err);
  }

  return data;
};
const setSessionStorage = (name, data) => {
  if (typeof data != "string") {
    data = JSON.stringify(data);
  }

  sessionStorage.setItem(name, data);
};
const removeSessionStorage = name => {
  sessionStorage.removeItem(name);
};

/**
 * @description 时间格式化
 * @function formatDate
 * @param {Date} date - 时间对象(2018-08-08 00:00:00)或时间戳对象(1536631318000).
 * @param {string} format - 时间格式("yyyy-MM-dd hh:mm:ss"、yyyy/MM/dd hh:mm:ss"、"yyyy-MM-dd"、"hh:mm:ss").
 * @return {string} time - 格式化后的时间字符串
 */
const formatDate = (DateIn, format) => {
  let date = DateIn ? new Date(DateIn) : new Date();
  format ? format : (format = "yyyy-MM-dd hh:mm:ss");

  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "H+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds() //秒
  };
  if (/(y+)/.test(format)) {
    format = format.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return format;
};

/**
 * @description 获取开始时间与结束时间
 * @function formatDate
 * @param {Date} time - 时间对象(2018-08-08 00:00:00)或时间戳对象(1536631318000).
 * @param {string} day - 时间天数
 * @param {string} dayType - 时间类型s:秒、m:分、h:时、d:天、
 * @param {string} format - 时间格式("yyyy-MM-dd hh:mm:ss"、yyyy/MM/dd hh:mm:ss"、"yyyy-MM-dd"、"hh:mm:ss").
 * @return {obj} timeBuckets - { startTime: '2018-08-08 00:00:00', endTime: '2018-08-07 00:00:00' }
 */
const timeBuckets = (time, day, dayType, format) => {
  let date = time ? new Date(time) : new Date();
  day ? day : (day = 10);
  dayType = dayType.toLowerCase();
  dayType ? dayType : (dayType = "s");

  let second = 0;
  switch (dayType) {
    case "s":
      second = day * 1000;
      break;
    case "m":
      second = day * 1000 * 60;
      break;
    case "h":
      second = day * 1000 * 60 * 60;
      break;
    case "d":
      second = day * 1000 * 60 * 60 * 24;
      break;
    default:
      second = day * 1000;
  }

  let startTime = Date.parse(date);
  let endTime = Date.parse(date) - second;
  startTime = formatDate(startTime, format);
  endTime = formatDate(endTime, format);

  let timeBuckets = { startTime: startTime, endTime: endTime };
  return timeBuckets;
};

/**
 * @description 获取默认分页信息
 * @function getPageInfo
 * @param {Number} pageSize - 每页条数
 */
const getPageInfo = pageSize => {
  let size = pageSize || 20;
  let pageInfo = {
    pageSize: size,
    pageNumber: 1,
    totalPage: 0,
    totalRow: 0,
    list: []
  };

  return pageInfo;
};

/**
 * @description 判断字符是否是中文字符
 * @function isChina
 * @param {String} str
 */
const isChina = str => {
  var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
  if (!patrn.exec(str)) {
    return false;
  } else {
    return true;
  }
};

/**
 * @description 验证身份证号
 * @function checkIDCard
 * @param {String} idcode
 */
let checkIDCard = idcode => {
  // 加权因子
  var weight_factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  // 校验码
  var check_code = ["1", "0", "X", "9", "8", "7", "6", "5", "4", "3", "2"];

  var code = idcode + "";
  var last = idcode[17]; //最后一个

  var seventeen = code.substring(0, 17);

  // ISO 7064:1983.MOD 11-2
  // 判断最后一位校验码是否正确
  var arr = seventeen.split("");
  var len = arr.length;
  var num = 0;
  for (var i = 0; i < len; i++) {
    num = num + arr[i] * weight_factor[i];
  }

  // 获取余数
  var resisue = num % 11;
  var last_no = check_code[resisue];

  var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;

  // 判断格式是否正确
  var format = idcard_patter.test(idcode);

  // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
  return last === last_no && format ? true : false;
};

/**
 * @description 验证是否是手机号或者电话
 * @function isPhone
 * @param {String} phone
 */
let isPhone = phone => {
  let status = false;
  let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (myreg.test(phone)) {
    status = true;
  }
  var myreg2 = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/;
  if (myreg2.test(phone)) {
    status = true;
  }
  return status;
};

let getBirthdayFromIdCard = ic => {
  let data = { gender: "", birthday: "", age: "" };

  if (!checkIDCard(ic)) return;
  ic = String(ic);
  //获取出生日期
  data.birthday =
    ic.substring(6, 10) +
    "-" +
    ic.substring(10, 12) +
    "-" +
    ic.substring(12, 14);

  //获取性别
  data.gender = ic.slice(14, 17) % 2 ? "男" : "女"; // 1代表男性，0代表女性

  //获取年龄
  var myDate = new Date();
  var month = myDate.getMonth() + 1;
  var day = myDate.getDate();
  var age = myDate.getFullYear() - ic.substring(6, 10) - 1;
  if (
    ic.substring(10, 12) < month ||
    (ic.substring(10, 12) == month && ic.substring(12, 14) <= day)
  ) {
    age++;
  }
  data.age = age;

  return data;
};

let imgSrcToBase64New = (imgSrc, callBack) => {
  function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, img.width, img.height);
    var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
    var dataURL = canvas.toDataURL("image/" + ext);
    return dataURL;
  }
  var image = new Image();
  image.crossOrigin = "anonymous"; //防止跨域出错
  image.src = imgSrc;
  image.onload = function() {
    var base64 = getBase64Image(image);
    callBack(base64);
    return base64;
  };
};

export {
  getLocalStorage,
  setLocalStorage,
  removeLocalStorage,
  getSessionStorage,
  setSessionStorage,
  removeSessionStorage,
  formatDate,
  timeBuckets,
  getPageInfo,
  isChina,
  checkIDCard,
  isPhone,
  getBirthdayFromIdCard,
  imgSrcToBase64New
};
