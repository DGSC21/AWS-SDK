var AWS = require('aws-sdk');
var s3 = new AWS.S3();
var file = require('fs').createWriteStream('1kb.png');
var param = {
    'Bucket':'dgsc-london',
    'Key':'1kb.png'
}; // param으로 다운받을 객체 변수 설정

console.time('1kb');
s3.getObject(param).createReadStream().pipe(file);
console.timeEnd('1kb');
//s3의 getobject함수를 통해 파일스트림을 다운로드한다.
