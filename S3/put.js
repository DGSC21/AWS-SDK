AWS = require('aws-sdk'); // AWS 객체 설정
var s3 = new AWS.S3(); // s3객체 선언
var fs = require('fs'); //file system 모듈 설정
var param = {
    'Bucket':'dgsc-london',
    'ACL':'public-read',
    'Key':'1kb.png',
    'Body': fs.createReadStream('1kb.png'),
    'ContentType':'image/png'
} // params 객체 설정, Body에서 fs의 createReadStream(업로드하고싶은 파일)함수를 이용한다.

console.time('1kb');
s3.upload(param, (err, data)=>{
    console.log(err);
    console.log(data);
    console.timeEnd('1kb');

})
// 업로드 함수.
