import React, { useState } from "react";
import Button from "../UI/button/Button";
import { useParams } from "react-router-dom";
import Title from "../UI/Title";
import Input from "../UI/input/Input";

export default function SearchPage() {
  const { quest } = useParams();
  const [searchText, setSearchText] = useState("");
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
  const filteredQuestions = problems[quest][0].questions.filter((question) =>
    question.toLowerCase().includes(searchText.toLowerCase()),
  );
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-6'>{problems[quest][0].title}</Title>
      <div className='mb-7'>
        <Input
          search
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className='mb-12'>
        {filteredQuestions.length > 0
          ? filteredQuestions.map((question, index) => {
              return (
                <Button
                  key={index}
                  className='h-[54px] text-[14px] text-[#D9D9D9] mb-6'>
                  {question}
                </Button>
              );
            })
          : "Ничего не нашли"}
      </div>

      <Button back>вернуться</Button>
    </div>
  );
}
