"use client"
import { signOut } from "next-auth/react";
import Link from "next/link";

const LinkSignout = () => {
  return (
    <Link
      href="/api/auth/signout"
      onClick={(e) => {
        e.preventDefault();
        if(confirm("Estas seguro?")){

          signOut();
        }
      }}
    >
      Cerrar Sesión
    </Link>
  );
};

export default LinkSignout;
