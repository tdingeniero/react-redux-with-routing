import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Counter from './Counter';
//import { getUser } from './redux/ducks/users';
import { getUser } from './redux/ducks/userSlice';
import User from './User';

const App = () => {

  const count = useSelector(state => state.counter.count);
 
  
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(getUser({id:"2"}));
  }, [dispatch]);

  const user = useSelector(state => state.user);
  console.log(user);
  const people = ["Lei","Jeff","Saitz"];
  return (
    <div className="App">
      <div>Change name: {user && user.firstname}</div>
      <div>Total Count: {count}</div>
      {people.map(p => (<Counter key={p} name={p} /> ))}    
      <User />
    </div>
  );
}

export default App;
