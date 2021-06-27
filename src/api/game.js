import api from './index'
// axios
import request from '@/utils/request'

// get game list
export function getGameList(params) {
  return request({
    url: "/api/Game/GetGameList",
    method: 'post',
    data: params,
    hideloading: true
  })
}

// get game list
export function getGameDetail(params) {
  return request({
    url: "/api/Game/GetGameDetail",
    method: 'post',
    data: params,
    hideloading: true
  })
}
