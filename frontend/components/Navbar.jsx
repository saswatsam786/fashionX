"use client";
import { AppShell, Navbar, Header } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import Image from "next/image";
import Head from "next/head";
import NavbarComponents from "./NavbarComponents";

const NavbarComponent = ({ children }) => {
  return (
    <AppShell
      padding="md"
      height="100vh"
      header={
        <Header
          height={60}
          p="xs"
          className="flex justify-between items-center pl-5 pr-5"
        >
          {/* Header content */}
          <NavbarComponents />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {/* Your application here */}
      {children}
    </AppShell>
  );
};

export default NavbarComponent;