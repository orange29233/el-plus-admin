import http from "@/utils/http";
import { ref } from 'vue'
import { useLocalStorage,StorageSerializers } from '@vueuse/core'
import { setToken, removeToken } from '@/utils/auth.js'
import qs from 'qs'
import router from '@/router/index.js'



const user = useLocalStorage('user',null,{serializer:StorageSerializers.object})  //用户信息
const islogin = useLocalStorage('islogin',null,{serializer:StorageSerializers.boolean}) //登录状态
const authKey = useLocalStorage('authKey') //登录鉴权KEY
const user_role = useLocalStorage('user_role',null,{serializer:StorageSerializers.object}) // 角色信息
const user_menu = useLocalStorage('user_menu') // 角色目录
const user_menu_tree = useLocalStorage('user_menu_tree',null,{serializer:StorageSerializers.object}) // 角色目录


export const useUser = () => {
 
    const loginModel = ref({
        account: '',
        password: '',
        grantType: 'captcha',
        tenantId: '000000',
        code: ''
    })

    const validateType = ref()
    const imgsrc = ref()

    //获取验证码类型
    const getLoginValidateType = async () => {
        const res = await http.get('/whdc-msg/sms/getSMSSendingSwitch')
        validateType.value = res.data
        if (res.data == 1) {
            getCaptcha()
        }
    }

    //获取图片验证码
    const getCaptcha = async () => {
        const res = await http.get('/blade-auth/captcha');
        imgsrc.value = res.image;
        authKey.value = res.key
    }

    //登录
    const login = async () => {
        const res = await http.post('/blade-auth/token', qs.stringify(loginModel.value), {
            headers: {
                Authorization: 'Basic c3dvcmQ6c3dvcmRfc2VjcmV0',
                "captcha-code": loginModel.value.code,
                "captcha-key": authKey.value
            }
        })
        getCaptcha()
        setToken(res.accessToken)
        islogin.value = true
        
        user.value = res
        userDetail(res.userId)
        queryUserMenus()
        router.replace({name:'index'})
    }

    //登出
    const logout = () => {
        removeToken()
        islogin.value = false
    }

    //查询用户角色
    const userDetail = async (id)=>{
        const res = await http.get('/blade-user/detail',{params:{id}});
        user_role.value = res
        roleIdsMenu(res.roleId)
    }

    //查询角色菜单
    const roleIdsMenu = async (roleIds)=>{
        const res = await http.get('/blade-system/menu/role-tree-keys',{params:{roleIds}});
        user_menu.value = res.menu
    }

    //获取用户的权限菜单数据
    const queryUserMenus = async (roleIds)=>{
        const res = await http.get('/blade-system/menu/routes');
        user_menu_tree.value = res
    }

    return {
        validateType,
        loginModel,
        islogin,
        imgsrc,
        getLoginValidateType,
        getCaptcha,
        login,
        logout,
        user,
        user_menu_tree
    }
}