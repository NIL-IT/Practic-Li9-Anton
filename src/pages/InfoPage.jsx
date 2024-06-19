import React from "react";
import Title from "../UI/Title";
import Button from "../UI/buttons/Button";

export default function InfoPage() {
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-14'>FAQ</Title>
      <>
        <Button className='text-[20px]'>FAQ СЕРВИС/ИНФОРМАЦИЯ О МАШИНЕ</Button>
        <div className='flex mt-5'>
          <Button
            mini
            className='mr-5'>
            FAQ ПО
          </Button>
          <Button mini>FAQ MA, eSender, WeChat</Button>
        </div>
      </>
      <Button back>вернуться</Button>
    </div>
  );
}
