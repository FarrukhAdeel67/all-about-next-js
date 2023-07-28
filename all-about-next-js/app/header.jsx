import React from "react";
import Link from "next/link";
import SearchBar from "../componets/clients/SearchBar";
const header = () => {
  return (
    <nav className="navTag">
      <Link className="linkTag" href={"/"}>
        Home
      </Link>
      <Link className="linkTag" href={"/about"}>
        About
      </Link>
      <Link className="linkTag" href={"/contact"}>
        Contact
      </Link>
      <Link className="linkTag" href={"/posts"}>
        Posts
      </Link>
      <SearchBar />
    </nav>
  );
};

export default header;
