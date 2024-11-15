import ThemeSwitcher from "./themeSwitcher";

interface NavBarProps {
  children: React.ReactNode;
}

function NavBar({ children }: NavBarProps) {
  return (
    <div className="navbar bg-transparent shadow-lg backdrop-blur-lg sticky top-0 z-10 w-9/12 mx-auto mt-5 rounded-full px-6">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl text-primary" href="/">
          vedPatel
        </a>
      </div>
      <div className="navbar-end flex gap-4 text-primary">
        <ThemeSwitcher />
        {children}
      </div>
    </div>
  );
}

export default NavBar;
