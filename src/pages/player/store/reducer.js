import { Map } from 'immutable'

import { 
  CHANGE_CURRENT_SONG,
  CHANGE_PLAY_LIST,
  CHANGE_CURRENT_SONG_INDEX,
  CHANGE_SEQUENCE
} from './constants'


const defaultState = Map({
  playList: [
    {
      "name": "一个人",
      "id": 1815918804,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 1083118,
          "name": "王嘉尔",
          "tns": [
            
          ],
          "alias": [
            
          ]
        }
      ],
      "alia": [
        
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 4,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 122299210,
        "name": "一个人",
        "picUrl": "https://p2.music.126.net/k7cd8qT7O9zcrUGU8vdSAg==/109951165674250196.jpg",
        "tns": [
          
        ],
        "pic_str": "109951165674250196",
        "pic": 109951165674250190
      },
      "dt": 185546,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 7424044,
        "vd": -29649
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4454444,
        "vd": -27039
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2969644,
        "vd": -25323
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [
        
      ],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8192,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 14242316,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1418077,
      "publishTime": 0
    },
    {
      "name": "半城烟沙 (合唱版)",
      "id": 1496833377,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 5771,
          "name": "许嵩",
          "tns": [
            
          ],
          "alias": [
            
          ]
        },
        {
          "id": 8259,
          "name": "金莎",
          "tns": [
            
          ],
          "alias": [
            
          ]
        }
      ],
      "alia": [
        "新天龙八部怀旧服推广曲"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 0,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 98559035,
        "name": "半城烟沙 (合唱版)",
        "picUrl": "https://p1.music.126.net/XBDIjKonP-S68XKczyNkbA==/109951165483014536.jpg",
        "tns": [
          
        ],
        "pic_str": "109951165483014536",
        "pic": 109951165483014530
      },
      "dt": 256995,
      "h": {
        "br": 320001,
        "fid": 0,
        "size": 10282885,
        "vd": -61771
      },
      "m": {
        "br": 192001,
        "fid": 0,
        "size": 6169748,
        "vd": -59226
      },
      "l": {
        "br": 128001,
        "fid": 0,
        "size": 4113180,
        "vd": -57605
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [
        
      ],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 128,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 22036,
      "publishTime": 1605974400000
    },
    {
      "name": "囍（女生版）",
      "id": 1496822949,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 30285885,
          "name": "等什么君",
          "tns": [
            
          ],
          "alias": [
            
          ]
        }
      ],
      "alia": [
        "原唱：葛东琪"
      ],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 5,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 98558797,
        "name": "囍（女生版）",
        "picUrl": "https://p1.music.126.net/m4zo-ZytE82l_Mdw3tUrQA==/109951165483970109.jpg",
        "tns": [
          
        ],
        "pic_str": "109951165483970109",
        "pic": 109951165483970110
      },
      "dt": 250682,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 10030125,
        "vd": -40987
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 6018093,
        "vd": -38391
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4012077,
        "vd": -36731
      },
      "a": null,
      "cd": "01",
      "no": 0,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [
        
      ],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 0,
      "originSongSimpleData": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "mv": 0,
      "publishTime": 1605888000000
    }
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.data)
    case CHANGE_PLAY_LIST:
      return state.set('playList', action.data)
    case CHANGE_CURRENT_SONG_INDEX:
      return state.set('currentSongIndex', action.data)
    case CHANGE_SEQUENCE:
      return state.set('sequence', action.data)
    default:
      return state
  }
}


export default reducer
