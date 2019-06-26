var AWS = require('aws-sdk');
var s3 = new AWS.S3(); // s3변수 설정
var param = {
    'Bucket':'dgsc-london',
    'Key':'1kb.png'
}; // param객체 변수 설정

console.time('1kb');
s3.deleteObject(param, (err, data)=>{
    console.log(err);
    console.log(data);
    console.timeEnd('1kb');
})
//s3 deleteobject를 통해 원하는 데이터를 삭제한다.
