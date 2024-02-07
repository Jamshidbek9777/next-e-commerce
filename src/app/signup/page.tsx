"use client";
import React, { useState } from "react";
import {
     Container,
     Wrapper,
     Registration,
     Inputs,
     Buttons,
     RegisterOptions,
} from "./style";
import { Button, Form, Input, message } from "antd";
import { useForm, useWatch } from "antd/es/form/Form";
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

export const Register = () => {
     const [form] = Form.useForm();
     const name = useWatch("name", form);
     const email = useWatch("email", form);
     const password = useWatch("password", form);
     const address = useWatch("address", form);

     //userouter
     const router = useRouter();

     //handle Register
     const handleSubmit = async () => {
          try {
               const res = await fetch(
                    `http://localhost:8000/api/v1/auth/register`,
                    {
                         method: "POST",
                         headers: {
                              "Content-Type": "application/json",
                         },
                         body: JSON.stringify({
                              name,
                              email,
                              password,
                              address,
                         }),
                    }
               );
               const data = await res.json();
               if (data.success) {
                    localStorage.setItem("token", data.token);
                    message.success(data.message);
                    router.push("/login");
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
                         <h1>Create an account</h1>
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
                                        name="name"
                                        rules={[
                                             {
                                                  required: true,
                                                  message: "Please input your name!",
                                             },
                                        ]}>
                                        <Input placeholder="Input your name here" />
                                   </Form.Item>
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
                                   <Form.Item<FieldType>
                                        name="address"
                                        rules={[
                                             {
                                                  required: true,
                                                  message: "Please input your address!",
                                             },
                                        ]}>
                                        <Input placeholder="Input your address here" />
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
                                        Create an account
                                   </Button>

                                   <Button type="primary">
                                        Sign up with Google
                                   </Button>
                              </div>
                         </Buttons>
                         <RegisterOptions>
                              <p>Already have an account?</p>
                              <p onClick={() => router.push("/login")}>
                                   Log in
                              </p>
                         </RegisterOptions>
                    </Registration>
               </Wrapper>
          </Container>
     );
};
export default Register;
