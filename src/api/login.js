import service from "@/utils/http";

/** 
 * @name 获取图片验证码
 * @url /blade-auth/captcha
*/
export function getCaptcha() {
    return service.get('/blade-auth/captcha')
}


export function login(data) {
    return service.post('/blade-auth/token', data, {
        headers: {
            Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
            "captcha-code": frutech.cache.get('CAPTCHA_CODE'),
            "captcha-key": frutech.cache.get('CAPTCHA_KEY')
        }
    })
}