import request from '@/utils/request'
/**
 * 获取-文章分类
 * @returns Promise对象
 */
export const getArtCateListAPI = () => {
  return request({
    url: '/my/cate/list'
  })
}

/**
 * 增加-文章分类
 * @param {*} param0 { cate_name: 文章分类名字, cate_alias: 文章分类别名 }
 * @returns Promise对象
 */
export const addArtCateAPI = ({ cate_name, cate_alias }) => {
  return request({
    url: '/my/cate/add',
    method: 'POST',
    data: {
      cate_name,
      cate_alias
    }
  })
}

/**
 * 更新-文章分类
 * @param {*} param0 { id: 文章分类id, cate_name: 文章分类名字, cate_alias: 文章分类别名 }
 * @returns Promise对象
 */
export const updateArtCateAPI = ({ id, cate_name, cate_alias }) => {
  return request({
    url: '/my/cate/info',
    method: 'PUT',
    data: {
      id,
      cate_name,
      cate_alias
    }
  })
}

/**
 * 删除-文章分类
 * @param {*} id 要删除的-文章分类id
 * @returns Promise对象
 */
export const delArtCateAPI = (id) => {
  return request({
    url: '/my/cate/del',
    method: 'DELETE',
    params: {
      id
    }
  })
}

/**
 * 获取文章列表
 * @param {*} param0 { pagenum: 当前页码数, pagesize: 当前页条数, cate_id: 文章分类id, state: 文章状态 }
 * @returns Promise对象
 */
export const getArticleListAPI = ({ pagenum, pagesize, cate_id, state }) => {
  return request({
    url: '/my/article/list',
    params: {
      pagenum,
      pagesize,
      cate_id,
      state
    }
  })
}

/**
 * 发布文章
 * @param {*} fd 表单对象
 * @returns Promise对象
 */
export const uploadArticleAPI = (fd) => {
  return request({
    url: '/my/article/add',
    method: 'POST',
    data: fd // 参数要的是表单对象, 不能写普通对象, axios内部会判断, 如果是表单对象, 传递的请求体会设置Content-Type: form-data与后端对应
  })
}

/**
 * 获取-文章详情
 * @param {*} id 文章id
 * @returns Promise对象
 */
export const getArticleDetailFn = (id) => {
  return request({
    url: '/my/article/info',
    params: {
      id
    }
  })
}

/**
 * 获取-文章详情
 * @param {*} id 文章id
 * @returns Promise对象
 */
export const getArticleDetailAPI = (id) => {
  return request({
    url: '/my/article/info',
    params: {
      id
    }
  })
}

/**
 * 删除-文章
 * @param {*} id 文章id
 * @returns Promise对象
 */
export const delArticleAPI = (id) => {
  return request({
    url: '/my/article/info',
    method: 'DELETE',
    params: {
      id
    }
  })
}
