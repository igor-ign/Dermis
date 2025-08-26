import Container from "../Container/Container";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

export default function LandingPageHeader() {
  return (
    <header className="bg-background p-4 border-b-[2px] sticky">
      <Container>
        <div className="flex justify-between items-center">
          <h1 className="text-primary font-bold text-2xl">
            <a href="/" className="no-underline">
              Dermis
            </a>
          </h1>

          <nav
            aria-label="Main navigation"
            className="tablet:hidden smartphone:hidden notebook:flex desktop:flex"
          >
            <ul className="text-black flex justify-between gap-12 items-center">
              <li>
                <a href="#funcionalidades">Funcionalidades</a>
              </li>
              <li>
                <a href="#valores">Valores</a>
              </li>
              <li>
                <a href="#contato">Contato</a>
              </li>
              <li>
                <a
                  href="/login"
                  className="bg-primary text-background w-[80px] h-[35px] rounded-xl flex items-center justify-center"
                >
                  Login
                </a>
              </li>
            </ul>
          </nav>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger
              className="notebook:hidden desktop:hidden p-2 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Open menu"
            >
              <HamburgerMenuIcon className="size-6" />
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="bg-white rounded-md shadow-md py-2 w-48 flex flex-col gap-1 notebook:hidden desktop:hidden"
                sideOffset={5}
              >
                <DropdownMenu.Item asChild>
                  <a
                    href="#funcionalidades"
                    className="px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Funcionalidades
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a
                    href="#valores"
                    className="px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Valores
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a
                    href="#contato"
                    className="px-4 py-2 text-black hover:bg-gray-100 rounded-md"
                  >
                    Contato
                  </a>
                </DropdownMenu.Item>
                <DropdownMenu.Item asChild>
                  <a
                    href="/login"
                    className="px-4 py-2 text-primary hover:bg-gray-100 rounded-md font-semibold"
                  >
                    Login
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </div>
      </Container>
    </header>
  );
}
