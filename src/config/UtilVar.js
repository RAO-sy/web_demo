
var UtilVar = {
    ENC: false, //返回结果是否加密
    // baseUrl: "http://127.0.0.1:5000",
	baseUrl: "http://10.0.2.37:5000",
    code: 401,
};
const runtimeType = {

    production: () => {
    },
    yh:()=>{

    },
    //开发环境
    development: () => {
      
    },
    
};

const env = process.env.VUE_APP_URL_ENV;

if (runtimeType.hasOwnProperty(env)) {
    runtimeType[env]();
} else {
    console.error(`Invalid environment: ${env}`);
}
// runtimeType[process.env.VUE_APP_URL_ENV]()
export default UtilVar

