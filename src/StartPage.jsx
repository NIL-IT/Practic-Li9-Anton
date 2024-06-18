import React from "react";
import Button from "./UI/button/Button";
import Logo from "./assets/logo.svg";
export default function StartPage() {
  return (
    <div className='pt-11 flex flex-col place-items-center'>
      <Button className='mb-5'>Запись на обслуживание</Button>
      <div className='flex pb-5'>
        <Button
          className='mr-5'
          mini>
          Поддержать проект💰
        </Button>
        <Button mini>О нас 🚀</Button>
      </div>
      <Button>FAQ</Button>
      <img
        className='mt-16 mb-11'
        src={Logo}
        alt='Company Logo'
      />
    </div>
  );
}
