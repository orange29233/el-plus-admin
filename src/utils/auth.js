import { useLocalStorage } from '@vueuse/core'

const token = useLocalStorage('token')

const setToken = (val) => {
    token.value = val
}

const getToken = () => {
    return token.value
}

const removeToken = () => {
    token.value = null
}

export {
    setToken,
    getToken,
    removeToken
}