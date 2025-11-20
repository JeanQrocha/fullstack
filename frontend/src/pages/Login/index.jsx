import './styles.css'
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { LoginUser } from '../../api/users';
import { toast } from 'react-toastify';
import { AuthContext } from '../../auth/context';


export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !senha) {
      toast('Preencha todos os campos');
    }
    try {
      const response = await LoginUser(email, senha);
      login(response.data.token);
      navigate('/users');
    } catch (error) {
      toast.error('Email ou Senha inválidos');
    }

  }
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2 className='h2-login'>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <p className="signup">Não possui conta? <spam className="signup">cadastre-se</spam></p>
        <button className="button" type="submit" onClick={handleLogin}>Entrar</button>
        <button className="button back-button" onClick={handleBackClick}>
          Voltar
        </button>
      </form>
    </div>
  );
}