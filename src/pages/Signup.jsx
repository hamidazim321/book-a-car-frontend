import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router';
import { signupUser } from '../redux/auth/authThunk';
import getFormData from '../helpers/getFormData';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = getFormData(e.target);
    const { password, passwordConfirmation } = formData;
    if (password !== passwordConfirmation) {
      toast.error('Passwords do not match', {
        position: 'top-center',
      });
      return;
    }
    dispatch(signupUser(formData))
      .then(() => {
        e.target.reset();
        navigate('/');
      });
  };
  return (
    <div className="h-screen flex flex-col justify-center md:p-0">
      <div className="mb-3">
        <h1 className="text-center font-mono mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Signup</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col w-full gap-3 md:w-1/2 mx-auto"
      >
        <div>
          <input type="text" autoComplete="username" placeholder="Username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="username" />
        </div>
        <div>
          <input type="email" autoComplete="email" placeholder="Email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="email" />
        </div>
        <div>
          <input type="password" autoComplete="new-password" placeholder="Password" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="password" />
        </div>
        <div>
          <input type="password" autoComplete="new-password" placeholder="Confirm Password" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500" name="passwordConfirmation" />
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none">Signup</button>
      </form>
    </div>
  );
}
