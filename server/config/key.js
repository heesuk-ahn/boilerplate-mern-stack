// 개발 환경에 따라서 config 정보를 바꿔줄 때 사용
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}