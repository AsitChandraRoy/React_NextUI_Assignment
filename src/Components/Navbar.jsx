import React from "react";
import { NavLink } from "react-router-dom";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";

function NavbarArea() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions"
  ];
  return (
    <>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        isBlurred={false}
        className="w-full bg-[#002228] border border-blue-900 py-2 mx-auto px-0 sm:px-7 font-work"
        maxWidth="full"
      >
        <NavbarBrand>
          <div className="w-26">
            <img src="Logo.svg" alt="" />
          </div>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>About Us</NavbarItem>
          <NavbarItem>Pricing</NavbarItem>
          <NavbarItem>Customers</NavbarItem>
          <NavbarItem>Solutions</NavbarItem>
        </NavbarContent>
        <NavbarContent className="hidden sm:flex gap-4" justify="end">
          <NavbarItem className="space-x-3">
            <Button as={Link} className="bg-[#0ff1f6]" radius="full">
              Book a Demo
            </Button>
            <Button
              as={Link}
              className="text-white"
              variant="bordered"
              radius="full"
            >
              Contact Us
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        </NavbarContent>
        <NavbarMenu className="bg-[#002228]">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
                    <Button as={Link} className="bg-[#0ff1f6]" radius="full">
              Book a Demo
            </Button>
            <Button
              as={Link}
              className="text-white"
              variant="bordered"
              radius="full"
            >
              Contact Us
            </Button>
      </NavbarMenu>
      </Navbar>
    </>
  );
}

export default NavbarArea;
