import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useEffect } from 'react';
export default function Dashboard() {
  const { userLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (userLoggedIn === false) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  if (userLoggedIn === false) {
    return null;
  }

  return (
    <div className="dashboard-parent">
      <div className="dashboard-center">
      <h1>Dashboard</h1>
      </div>
    </div>
  );
}
