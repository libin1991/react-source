const path = require('path'); // 获取绝对路径用

module.exports = {
  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') }
  }
};
