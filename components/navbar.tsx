import React from "react";
import Container from "@/components/ui/container";
import Link from "next/link";
import MainNav from "@/components/main-nav";

const Navbar = () => {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
      <Container>
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-3xl">Store</p>
        </Link>
        <MainNav data={[]} />
      </Container>
    </div>
  );
};

export default Navbar;
