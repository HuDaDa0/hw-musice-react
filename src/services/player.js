import request from './request'

// 1496833377 半城烟沙 (合唱版)
// 1496822949 囍（女生版）
export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}
