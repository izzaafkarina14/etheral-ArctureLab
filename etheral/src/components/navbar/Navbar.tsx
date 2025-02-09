import { Logo } from "../logo/Logo";

export const Navbar = () => {
  return (
    <div className="bg-transparent py-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <Logo />
        <div className="flex text-primary gap-8">
          <button>Home</button>
          <button>Features</button>
          <button>Explore</button>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
};
