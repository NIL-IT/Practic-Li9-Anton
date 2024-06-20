import React from "react";
import Title from "../UI/Title";
import Button from "../UI/button/Button";
import Card from "../UI/Card/Card";

export default function AppointmentPage() {
  return (
    <div className='relative flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-7'>Запись на обслуживание</Title>
      <>
        <Button
          link='moscow'
          className='mb-5'>
          Москва
        </Button>
        <Button
          link='spb'
          className='mb-5'>
          Санкт-Петербург
        </Button>
        <Button
          link='nsk'
          className='mb-11'>
          Новосибирск
        </Button>
      </>
      <Button back>вернуться</Button>
    </div>
  );
}
