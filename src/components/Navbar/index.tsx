"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, NavbarContainer, Logo, NavLinks, RightSide } from "./style";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import type { SearchProps } from "antd/es/input/Search";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
const Navbar = () => {
     const { Search } = Input;

     const suffix = (
          <AudioOutlined
               style={{
                    fontSize: 16,
                    color: "#1677ff",
               }}
          />
     );
     const router = useRouter();
     const onSearch: SearchProps["onSearch"] = (value, _e, info) =>
          console.log(info?.source, value);
     const [isLoggedIn, setIsLoggedIn] = useState(false);

     useEffect(() => {
          const token = localStorage.getItem("token");
          setIsLoggedIn(!!token);
     }, []);

     return (
          <Container>
               <NavbarContainer>
                    <div>
                         <Logo>Exclusive</Logo>
                    </div>
                    <NavLinks>
                         <p onClick={() => router.push("/")}>Home</p>
                         <p onClick={() => router.push("/contact")}>Contact</p>
                         <p onClick={() => router.push("/about")}>About</p>
                         <p
                              onClick={() =>
                                   router.push(
                                        isLoggedIn ? "/profile" : "/signup"
                                   )
                              }>
                              {isLoggedIn ? "Profile" : "Sign  Up"}
                         </p>
                    </NavLinks>
                    <RightSide>
                         <div>
                              <Space>
                                   <Search
                                        placeholder="input search text"
                                        allowClear
                                        onSearch={onSearch}
                                        style={{ width: 250 }}
                                   />
                              </Space>
                         </div>
                         <span>
                              <HeartOutlined />
                         </span>
                         <span>
                              <ShoppingCartOutlined />
                         </span>
                    </RightSide>
               </NavbarContainer>
          </Container>
     );
};

export default Navbar;
