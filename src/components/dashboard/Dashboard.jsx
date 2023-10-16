import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useEffect } from 'react';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
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
      <div className='recent-chats'>
      <div className='recent-chat-title'>
        <p><RecentActorsIcon />Recent Encounters</p>
      </div>
      </div>
      </div>
    </div>
  );
}
