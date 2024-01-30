import { FaReact } from "react-icons/fa";
import { BsCart2, BsPencilSquare } from "react-icons/bs";
import { Link } from "react-router-dom";
import RSButton from "../RS/RSButton";
import { useAuth } from "../../hooks/useAuth";

export default function Header() {
  const { auth, user } = useAuth();

  const handleLogin = () => {
    auth.loginWithGoogle();
  };

  const handleLogout = () => {
    auth.logout();
  };

  return (
    <header className="p-5 pb-6 border-b mb-10 shadow-sm">
      <div className="flex items-center max-w-screen-xl m-auto">
        {/* logo */}
        <div className="mr-20">
          <Link
            to="/"
            className="group flex items-center justify-start gap-2 text-2xl font-semibold text-blue-400"
          >
            <FaReact className="group-hover:rotate-180 transition-all duration-300" />
            <div>React Shop</div>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex-1 text-blue-950 font-bold ">
          <ul className="flex gap-10">
            <li className="hover:text-blue-400">
              <Link to="/products/all">All</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/products/top">Top</Link>
            </li>
            <li className="hover:text-blue-400">
              <Link to="/products/bottom">Bottom</Link>
            </li>
          </ul>
        </nav>
        {/* user */}
        <div className="flex flex-1 items-center justify-end gap-5">
          <div className="flex justify-center items-center gap-1">
            {user ? (
              <>
                <img src={user.photoURL} className="w-8 h-8 rounded-full" />
                <p>
                  <b>{user.displayName}</b>님 안녕하세요
                </p>
              </>
            ) : (
              <p>로그인 후 이용가능합니다.</p>
            )}
          </div>
          <Link to="/new">
            <BsPencilSquare className="text-xl text-blue-400 hover:text-blue-300" />
          </Link>
          <Link to="/cart">
            <BsCart2 className="text-2xl text-blue-400 hover:text-blue-300" />
          </Link>
          {user ? (
            <RSButton className="py-1" onClick={handleLogout}>
              로그아웃
            </RSButton>
          ) : (
            <RSButton className="py-1" onClick={handleLogin}>
              로그인
            </RSButton>
          )}
        </div>
      </div>
    </header>
  );
}
