import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useEffect } from 'react';

export default function Dashboard() {
  const { userLoggedIn } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/');
    }
  }, [userLoggedIn, navigate]);

  if (!userLoggedIn) {
    return null;
  }

  return (
    <div className="dashboard-parent">
      <div className="dashboard-center">Your dashboard content goes here</div>
    </div>
  );
}
