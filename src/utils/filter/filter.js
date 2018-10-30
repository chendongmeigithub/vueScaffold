/**
 * @description 过滤器方法
 * @namespace filterWay
 * @property {function}  toThousands 数字格式转换.
 * @property {function}  formatDate 各种时间格式化
 */
export default {
  /**
   * @param {number} num - 数字.
   * @return {string} 格式化后数字.
   */
  toThousands: function(data) {
    let num = parseInt(data);
    var danwei = "";
    if (parseInt(num / 100000) > 0) {
      num = parseInt(num / 10000);
      danwei = "万";
    }
    return (
      (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,") + danwei
    );
  },
  /**
   * @param {Date} date - 时间对象(2018-08-08 00:00:00)或时间戳对象(1536631318000).
   * @param {string} format - 时间格式("yyyy-MM-dd hh:mm:ss"、yyyy/MM/dd hh:mm:ss"、"yyyy-MM-dd"、"hh:mm:ss").
   * @return {string} time - 格式化后的时间字符串
   */
  formatDate: function(DateIn, format) {
    let date = DateIn ? new Date(DateIn) : new Date();

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
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return format;
  }
};
