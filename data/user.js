import bcypt from 'bcryptjs'
const User = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    password: bcypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcypt.hashSync('123456', 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcypt.hashSync('123456', 10),
    isAdmin: false,
  },
]


export default User