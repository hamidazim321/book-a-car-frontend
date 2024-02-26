import React, { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FaFacebookF, FaLinkedinIn, FaTwitch, FaTwitter,
} from 'react-icons/fa';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getUser } from '../helpers/storage';
import { logoutUser } from '../redux/auth/authThunk';

export default function NavigationPanel() {
  const navLinkClass = 'w-full flex items-center p-2 text-gray-900 group hover:bg-lime-600  hover:text-white';
  const disabledLinkClass = 'ms-3 w-full flex items-center p-2 text-gray-500 cursor-not-allowed border-0';
  const [openSidebar, setOpenSidebar] = useState(false);
  const loggedIn = getUser() !== null;
  const currentUser = getUser();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNonAdmins = () => {
    toast.info('Only Admins can perform this action', {
      position: 'top-center',
    });
  };

  const handleSidebar = (e) => {
    e.stopPropagation();
    setOpenSidebar((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutUser())
      .then(() => {
        navigate('/');
      });
  };
  useEffect(() => {
    const closeSidebar = () => {
      setOpenSidebar(false);
    };

    document.body.addEventListener('click', closeSidebar);

    return () => {
      document.body.removeEventListener('click', closeSidebar);
    };
  }, []);

  return (
    <div>
      <button onClick={handleSidebar} aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200">
        <span className="sr-only">Open sidebar</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="#000000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z" />
        </svg>
      </button>

      <aside id="default-sidebar" className={`p-2 flex flex-col bg-gray-50 fixed md:static top-0 left-0 z-40 w-64 h-screen transition-transform md:translate-x-0 ${openSidebar ? '' : '-translate-x-full'}`} aria-label="Sidebar">
        <div>
          <h1 className="text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900">
            Book A
            <span className="text-blue-600"> Car</span>
          </h1>
        </div>
        <div className="px-3 py-4 overflow-y-auto pt-28">
          <ul className="space-y-2 font-medium">
            {loggedIn && (
              <>
                <li>
                  <NavLink to="/" className={navLinkClass}>
                    <span className="ms-3">Cars</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/reserve-car" className={navLinkClass}>
                    <span className="ms-3">Reserve Car</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/my-reservations" className={navLinkClass}>
                    <span className="ms-3">My Reservations</span>
                  </NavLink>
                </li>
                {
                  currentUser.admin ? (
                    <>
                      <li>
                        <NavLink to="/add-car" className={navLinkClass}>
                          <span className="ms-3">Add Car</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/delete-car" className={navLinkClass}>
                          <span className="ms-3">Delete Car</span>
                        </NavLink>
                      </li>
                    </>

                  ) : (
                    <>
                      <li>
                        <button type="button" onClick={handleNonAdmins} className={disabledLinkClass}>Add Car</button>
                      </li>
                      <button type="button" onClick={handleNonAdmins} className={disabledLinkClass}>Delete Car</button>
                      <li />
                    </>

                  )
                }
                <li>
                  <button type="button" onClick={handleLogout} className={navLinkClass}>
                    <span className="ms-3">Logout</span>
                  </button>
                </li>
              </>
            )}
            {!loggedIn && (
              <>
                <li>
                  <Link to="/" className={navLinkClass}>
                    <span className="ms-3">Login</span>
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className={navLinkClass}>
                    <span className="ms-3">Signup</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="mt-auto px-4">
          <ul className="flex ms-2 justify-around items-center">
            <li className="cursor-pointer"><FaFacebookF /></li>
            <li className="cursor-pointer"><FaLinkedinIn /></li>
            <li className="cursor-pointer"><FaTwitch /></li>
            <li className="cursor-pointer"><FaTwitter /></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
