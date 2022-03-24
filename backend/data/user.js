import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Berkant Cen',
    email: 'berkant@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'İpek Cen',
    email: 'ipek@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
