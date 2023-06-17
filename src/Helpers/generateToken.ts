import jwt from 'jsonwebtoken';

const generateToken = () => {
  const payload = { userId: 123456 }; // Customize the payload as per your needs

  const token = jwt.sign(payload, 'secretKey', { expiresIn: '1h' });
  return token;
};

export default generateToken;
