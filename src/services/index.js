// import request from '../utiles/http'
import Cookies from 'js-cookie';
import request from '../utiles/request';

function ShopList(params){
    return request.get('/buyer/storelist')
}

export {
    ShopList
}
