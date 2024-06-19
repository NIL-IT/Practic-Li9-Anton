import React from "react";
import Logo from "../assets/logo2.svg";
import Button from "../UI/buttons/Button";
import Title from "../UI/Title";

export default function About() {
  return (
    <div className='relative flex place-items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-14 '>О нас 🚀</Title>
      <div className='w-[155px] h-[155px] bg-[#264404] flex justify-center items-center mb-14 rounded-2xl'>
        <img
          className='w-[75%] pl-4 flex justify-center items-center pt-4'
          src={Logo}
          alt=''
        />
      </div>
      <div className='mb-[70px]'>
        <Button className='h-[42px] text-[16px] text-[#D9D9D9] mb-5'>Наш чат 💬</Button>
        <Button className='h-[42px] text-[16px] text-[#D9D9D9]'>Задать вопрос❓</Button>
      </div>
      <Button back>вернуться</Button>
    </div>
  );
}
