"use client";
import React, { useState } from "react";
import {
     Container,
     Wrapper,
     Registration,
     Inputs,
     Buttons,
     LoginOptions,
} from "./style";
import { Button, Form, Input, message } from "antd";
import { useWatch } from "antd/es/form/Form";
import { useRouter } from "next/navigation";
//types
type FieldType = {
     name?: string;
     email?: string;
     password?: string;
     address?: string;
};

//antd configs
const onFinish = (values: any) => {
     console.log("Success:", values);
};
const onFinishFailed = (errorInfo: any) => {
     console.log("Failed:", errorInfo);
};

export const Login = () => {
     const [form] = Form.useForm();
     const email = useWatch("email", form);
     const password = useWatch("password", form);

     //userouter
     const router = useRouter();

     //handle Register
     const handleSubmit = async () => {
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/auth/login`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              email,
                              password,
                         }),
                    }
               );
               const data = await res.json();
               if (data.success) {
                    localStorage.setItem("token", data.token);
                    message.success(data.message);
                    router.push("/");
               } else {
                    message.error(data.message);
                    console.log(data);
               }
          } catch (error) {
               console.log(error);
               message.error("Something went wrong");
          }
     };
     return (
          <Container>
               <Wrapper>
                    <Registration>
                         <h1>Login to your account</h1>
                         <p>Enter your details below</p>
                         <Inputs>
                              <Form
                                   onSubmitCapture={handleSubmit}
                                   form={form}
                                   name="basic"
                                   style={{ maxWidth: 600 }}
                                   initialValues={{ remember: true }}
                                   onFinish={onFinish}
                                   onFinishFailed={onFinishFailed}
                                   autoComplete="off">
                                   <Form.Item<FieldType>
                                        name="email"
                                        rules={[
                                             {
                                                  required: true,
                                                  message: "Please input your email!",
                                             },
                                        ]}>
                                        <Input placeholder="Input your email here" />
                                   </Form.Item>

                                   <Form.Item<FieldType>
                                        name="password"
                                        rules={[
                                             {
                                                  required: true,
                                                  message: "Please input your password!",
                                             },
                                        ]}>
                                        <Input.Password placeholder="Input your password here" />
                                   </Form.Item>
                              </Form>
                         </Inputs>
                         <Buttons>
                              <div>
                                   <Button
                                        onClick={() => handleSubmit()}
                                        type="primary"
                                        htmlType="submit"
                                        danger>
                                        Login
                                   </Button>
                                   <Button type="primary">
                                        Sing in with google
                                   </Button>
                              </div>
                         </Buttons>
                         <LoginOptions>
                              <p>Have an account?</p>
                              <p onClick={() => router.push("/signup")}>
                                   Register
                              </p>
                         </LoginOptions>
                    </Registration>
               </Wrapper>
          </Container>
     );
};
export default Login;
