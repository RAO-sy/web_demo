
import axios from "axios";

// let instance = axios.create({
//     baseURL:'/api',
//     timeout:5000
// })
import {    currentList,
    currentPage,
    currentSave,
    currentUpdate,
    currentDelete,
    currentSelect,
    currentSelectList,

    currentPOST,
    currentGET,
    currentApi

} from './modules'
import { 
    GETNOBASE,
    GET
} from './api'


export {
    GETNOBASE,
    GET
}


export {
    currentApi,
    currentList,
    currentPage,
    currentSave,
    currentUpdate,
    currentDelete,
    currentSelect,
    currentSelectList,
    currentPOST,
    currentGET
}
