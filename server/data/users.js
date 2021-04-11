import bcrypt from 'bcryptjs';

export const users = [
  {
    name: 'Admin User',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Niyam Salami',
    email: 'niyamsa@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Ebru Gundesh',
    email: 'ebrugundesh@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];
