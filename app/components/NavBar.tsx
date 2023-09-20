import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
function NavBar() {
  return (
    <div className="flex justify-between items-center px-10 py-3 border-b-[1px] shadow-sm">
      <div className="flex gap-10 items-center">
        <div>
          <Image src="/logo.png" alt="" width={120} height={60} />
        </div>
        <div className="hidden md:flex gap-6">
          <h2 className="hover:bg-gray-100 cursor-pointer p-2 rounded-md transition-all">
            Home
          </h2>
          <h2 className="hover:bg-gray-100 cursor-pointer p-2 rounded-md transition-all">
            History
          </h2>
          <h2 className="hover:bg-gray-100 cursor-pointer p-2 rounded-md transition-all">
            Help
          </h2>
        </div>
      </div>

      <UserButton afterSignOutUrl="/" />
    </div>
  );
}

export default NavBar;
