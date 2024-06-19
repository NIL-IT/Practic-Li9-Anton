import React from "react";
import Button from "../UI/buttons/Button";
import Title from "../UI/Title";
import { useLocation, useParams } from "react-router-dom";

export default function FormPage() {
  const { cityName } = useParams();
  const location = useLocation();
  const { serviceName } = location.state || {};
  return (
    <div className='relative flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title>
        Запись на обслуживание в городе{" "}
        {cityName === "moscow" ? "Москва" : cityName === "nsk" ? "Новосибирск" : "Санкт-Петербург"} в {serviceName}
      </Title>
      <Button back>вернуться</Button>
    </div>
  );
}
