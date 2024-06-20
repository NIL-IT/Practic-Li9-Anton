import React from "react";
import Button from "../UI/button/Button";
import { useParams } from "react-router-dom";
import Title from "../UI/Title";
import Input from "../UI/input/Input";

export default function SearchPage() {
  const { quest } = useParams();
  console.log(quest);
  const problems = {
    info: [
      {
        title: "FAQ СЕРВИС/ИНФОРМАЦИЯ О МАШИНЕ",
        questions: [
          "Установка приложений на передние экраны",
          "Смена времени",
          "Получение доступа к блоку телематики",
          "Перезагрузка, сброс, ребут Авто",
        ],
      },
    ],
    software: [
      {
        title: "FAQ ПО",
        questions: [
          "Установка приложений на передние экраны 1",
          "Смена времени 1",
          "Получение доступа к блоку телематики 1",
          "Перезагрузка, сброс, ребут Авто 1",
        ],
      },
    ],
    xd: [
      {
        title: "FAQ MA, eSender, WeChat",
        questions: [
          "Установка приложений на передние экраны 2",
          "Смена времени 2",
          "Получение доступа к блоку телематики 2",
          "Перезагрузка, сброс, ребут Авто 2",
        ],
      },
    ],
  };
  console.log(problems[quest][0].title);
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-6'>{problems[quest][0].title}</Title>
      <div className='mb-7'>
        <Input
          search
          className
        />
      </div>
      <div className='mb-12'>
        {problems[quest][0].questions.map((i, k) => {
          return <Button className='h-[54px] text-[14px] text-[#D9D9D9] mb-6'>{i}</Button>;
        })}
      </div>

      <Button back>вернуться</Button>
    </div>
  );
}
