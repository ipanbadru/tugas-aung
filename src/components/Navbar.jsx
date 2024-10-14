import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
export default function Navbar() {
  return (
    <nav className="py-6">
      <div className="container flex justify-between items-center">
        <h1 className="font-bold text-3xl">Education.</h1>
        <ul className="hidden md:flex space-x-5 uppercase font-bold justify-center flex-1">
          <li>Beranda</li>
          <li>Materi</li>
          <li>Quiz Interaktive</li>
          <li>test</li>
        </ul>
        <div>
          <a
            href=""
            className="py-0.5 px-1 rounded-sm bg-primary text-white hidden md:inline-block"
          >
            Tentang Kami
          </a>
          <Menu>
            <MenuButton className="text-3xl md:hidden">
              <IoMdMenu />
            </MenuButton>
            <MenuItems
              transition
              className="bg-black/50 fixed inset-0 flex justify-center items-center p-8"
            >
              <MenuItem
                as="button"
                className="absolute top-1 right-6 text-white text-2xl"
              >
                <IoMdClose />
              </MenuItem>
              <ul className="bg-white rounded-lg w-full h-full px-4 py-3 space-y-4">
                <MenuItem as={'li'}>Beranda</MenuItem>
                <MenuItem as={'li'}>Materi</MenuItem>
                <MenuItem as={'li'}>Quiz Interaktive</MenuItem>
              </ul>
            </MenuItems>
          </Menu>
        </div>
      </div>
    </nav>
  );
}
