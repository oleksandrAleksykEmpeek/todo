import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ThunkGetTasks } from '../../../store/tasks/thunks/getTasks';

const Home = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  useEffect(() => {
    if (!!user) {
      dispatch(ThunkGetTasks(user.id));
    }
  }, [user]);
  return <div>Test</div>;
};

export default Home;
