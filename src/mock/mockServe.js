/* 
  使用mock.js  加载模板
*/

import Mock from 'mockjs'
import Data from './data.json'

// 返回order接口
Mock.mock('/goods', {code: 0, data: Data.goods})
// 返回rating接口
Mock.mock('/rating', {code: 0, data: Data.rating})
// 返回info接口
Mock.mock('/info', {code: 0, data: Data.info})