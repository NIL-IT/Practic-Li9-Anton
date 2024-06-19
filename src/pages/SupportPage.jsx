import React from "react";
import Title from "../UI/Title";
import Card from "../assets/Card.png";
import Button from "../UI/buttons/Button";

export default function SupportPage() {
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title>Поддержать проект💰</Title>
      <div></div>
      <Button back>вернуться</Button>
    </div>
  );
}
