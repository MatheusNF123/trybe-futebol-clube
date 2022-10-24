import IUser from "../../entities/IUser"

const mockLogin = {
  email: 'admin@admin.com',
  password: 'secret_admin'
}
export default mockLogin

const mockUser: IUser = {
  id: 1,
  username: 'admin',
  email: 'admin@admin.com',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  role: 'admin'
}

const mockUserNormal = {
  id: 1,
  username: 'User',
  email: 'user@user.com',
  password: '$2a$08$Y8Abi8jXvsXyqm.rmp0B.uQBA5qUz7T6Ghlg/CvVr/gLxYj5UAZVO',
  role: 'user'
}

const mockToken = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlhdCI6MTY2NjQ1NzAyMCwiZXhwIjoxNjY2NTI5MDIwfQ.X4dCRkUds61AjJn-OZBEuD_TlXxttQ2IBGR-Unju154'
}

export { mockUser, mockToken, mockUserNormal }


