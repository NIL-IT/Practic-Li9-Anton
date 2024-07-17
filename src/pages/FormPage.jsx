import { useState, useRef } from "react";
import Button from "../UI/button/Button";
import Title from "../UI/Title";
import { useLocation, useParams } from "react-router-dom";
import Input from "../UI/input/Input";

export default function FormPage() {
  const [isFilled, setIsFilled] = useState(false);
  const { cityName } = useParams();
  const location = useLocation();
  const { serviceName } = location.state || {};

  const nameRef = useRef();
  const phoneRef = useRef();
  const carModelRef = useRef();
  const dateRef = useRef();
  const commentsRef = useRef();

  const validateForm = () => {
    const name = nameRef.current.querySelector("input").value.trim();
    const phone = phoneRef.current.querySelector("input").value.trim();
    const carModel = carModelRef.current.querySelector("input").value.trim();
    const date = dateRef.current.querySelector("input").value.trim();
    return name && phone && carModel && date;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsFilled(true);
    } else {
      alert("Пожалуйста, заполните все обязательные поля");
    }
  };

  return (
    <div className='relative flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-12'>
        Запись на обслуживание в городе {cityName} в {serviceName}
      </Title>

      {isFilled ? (
        <div className='w-[270px] h-[244px] text-[28px] font-bold bg-[#264404] text-center pt-8 pb-11 mb-12 rounded-2xl'>
          <p className='text-[40px]'>✅</p>Спасибо, информация отправлена в сервис!
        </div>
      ) : (
        <form
          action='#'
          className='bg-[#264404] px-[21px] pt-7 pb-4 max-w-270px rounded-2xl mb-12 flex items-center flex-col'
          onSubmit={handleSubmit}>
          <div ref={nameRef}>
            <Input label={"Ваше имя"} />
          </div>
          <div ref={phoneRef}>
            <Input
              label={"Номер телефона"}
              type={"tel"}
            />
          </div>
          <div ref={carModelRef}>
            <Input label={"Модель автомобиля"} />
          </div>
          <div ref={dateRef}>
            <Input
              label={"Дата и время"}
              subInf={"01.12.24 13.00"}
            />
          </div>
          <div ref={commentsRef}>
            <Input
              type={"com"}
              label={"Комментарии"}
            />
          </div>
          <Button
            type='submit'
            form>
            Отправить
          </Button>
        </form>
      )}

      <Button
        back
        home={isFilled}>
        вернуться
      </Button>
    </div>
  );
}
