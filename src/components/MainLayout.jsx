import Link from "next/link";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle,DarkThemeToggle,Footer, FooterBrand, FooterCopyright, FooterDivider, FooterLink, FooterLinkGroup } from "flowbite-react";


export function DefultHeader(){
    return(
        <Navbar >
      <NavbarBrand as={Link} href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Bücher Traum</span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/" active>Home</NavbarLink>
        <NavbarLink href="/about">About</NavbarLink>
        <NavbarLink href="/services">Services</NavbarLink>
        <NavbarLink href="/pricing">Pricing</NavbarLink>
        <NavbarLink href="/contact">Contact</NavbarLink>
      </NavbarCollapse>
      <DarkThemeToggle />

    </Navbar>
    )
}






export function DefultFooter(){
    return(
        <Footer container className='rounded-none'>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <FooterBrand
              href="https://BuecherTraum.elvwebhub.com"
              name="BücherTraum"
            />
            <FooterLinkGroup>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
            </FooterLinkGroup>
          </div>
          <FooterDivider />
          <FooterCopyright href="#" by="Ahmed Hassan" year={2024} />
        </div>
      </Footer> 
       )
}