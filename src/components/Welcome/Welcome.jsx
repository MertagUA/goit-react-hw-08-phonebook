import { Div } from './Welcome.styled';
import welcome from '../../assets/images/WelcomeImg.png';

export const Welcome = () => {
  return (
    <Div>
      <img src={welcome} alt="Welcome" width="1280px" height="760px" />
    </Div>
  );
};
