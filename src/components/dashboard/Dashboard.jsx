import { useNavigate } from 'react-router-dom';
import { useUser } from '../../context/UserContext';
import { useEffect } from 'react';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { Avatar, Divider } from '@mui/material';
import styled from 'styled-components';
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
      <div className='recent-list'>
        <div className='user-message'>
          <Avatar />
          <div className='recent-info'>
          <h4>Name:<span> Waleed</span></h4>
          <p>lorem insum dolor sit umet</p>
          </div>
        </div>
        <StyledDivider />
        <div className='user-message'>
          <Avatar />
          <div className='recent-info'>
          <h4>Name:<span> Ahmed</span></h4>
          <p>lorem insum dolor sit umet</p>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}

const StyledDivider = styled(Divider)`
  && {
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: center;
    color: #43ff64d9;
    /* background-color: #43ff64d9; */
    background-color: #403f3e;
    height: 0.09px;
    margin: 10px 0px;
    width: 80%;
  }
`;