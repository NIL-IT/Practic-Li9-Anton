import React from "react";
import Title from "../UI/Title";
import Button from "../UI/button/Button";
import Input from "../UI/input/Input";

export default function InfoPage() {
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-14'>FAQ</Title>
      <>
        <Button
          link={"info"}
          className='text-[20px]'>
          FAQ СЕРВИС/ИНФОРМАЦИЯ О МАШИНЕ
        </Button>
        <div className='flex mt-5'>
          <Button
            link={"software"}
            mini
            className='mr-5'>
            FAQ ПО
          </Button>
          <Button
            link={"xd"}
            mini>
            FAQ MA, eSender, WeChat
          </Button>
        </div>
      </>
      <Button back>вернуться</Button>
    </div>
  );
}
