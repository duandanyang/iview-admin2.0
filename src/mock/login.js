import { getParams } from '@/libs/util'

const USER_MAP = {
  super_admin: {
    username: 'super_admin',
    nickname: '超级管理员',
    accountId: '1',
    role: 'SUPERADMIN',
    avator: 'https://file.iviewui.com/dist/a0e88e83800f138b94d2414621bd9704.png'
  },
  admin: {
    username: 'admin',
    nickname: '管理员',
    accountId: '2',
    role: 'ADMIN',
    avator: 'https://avatars0.githubusercontent.com/u/20942571?s=460&v=4'
  }
}

export const login = req => {
  return { code: 0, msg: 'success', data: USER_MAP.super_admin }
}

export const getUserInfo = req => {
  const params = getParams(req.url)
  return USER_MAP[params.token]
}

export const logout = req => {
  return null
}
