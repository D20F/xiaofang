import CryptoJS from 'crypto-js'

const iv = CryptoJS.enc.Utf8.parse('ABCDEF1234561234');

const word='6D547FB9FF454763B417B991F4421CC631E18535A123042B0125DC8BD42D45D8E1D811EE6752FFFB087D063D6EAB4BCD798369FAC29D1822A7548E502511021F'
const seed='4f295dffe2051d8f75928865edc3e2832cf48e2ab67192f8128ebdfebb25105d8e060f5b3a50bd7e6d290ceb8cee71d014bf60bfcc7cfa6d3655c900346a78d4'

const key = CryptoJS.enc.Utf8.parse(seed);
const encryptedHexStr = CryptoJS.enc.Hex.parse(word);
const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
const decrypt = CryptoJS.AES.decrypt(srcs, key, { 
    iv: iv, 
    mode: CryptoJS.mode.CBC, 
    padding: CryptoJS.pad.Pkcs7 
});
const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
console.log(decryptedStr.toString())
return decryptedStr.toString();