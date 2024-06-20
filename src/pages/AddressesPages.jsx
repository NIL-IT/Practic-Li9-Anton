import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "../UI/Card/Card";
import Button from "../UI/button/Button";
import Title from "../UI/Title";

export default function AddressesPages() {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const services = {
    moscow: [
      {
        name: "Фастар",
        description:
          "Занимаемся исключительно Лисянами. Пример любого описания сервиса до определенного кол-во, а именно 128 символов.",
        address: "ул. Мира 24",
      },
      {
        name: "Фастар 2",
        description:
          "Занимаемся исключительно Лисянами. Пример любого описания сервиса до определенного кол-во, а именно 128 символов.",
        address: "ул. Мира 24",
      },
    ],
    spb: [
      {
        name: "Фастар СПБ",
        description:
          "Занимаемся исключительно Лисянами. Пример любого описания сервиса до определенного кол-во, а именно 128 символов.",
        address: "ул. Невский 32",
      },
    ],
    nsk: [
      {
        name: "Фастар НСК",
        description:
          "Занимаемся исключительно Лисянами. Пример любого описания сервиса до определенного кол-во, а именно 128 символов.",
        address: "ул. Ленина 15",
      },
    ],
  };
  const handleNavigate = (serviceName) => {
    navigate("form", { state: { serviceName } });
  };
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-5'>
        Запись на обслуживание в городе{" "}
        {cityName === "moscow" ? "Москва" : cityName === "nsk" ? "Новосибирск" : "Санкт-Петербург"}
      </Title>
      <div className='mb-11'>
        {services[cityName].map((i, k) => {
          return (
            <Card
              onclick={() => handleNavigate(i.name)}
              className='mb-5'
              title={i.name}
              text={i.description}
              address={i.address}
              key={k}
            />
          );
        })}
      </div>
      <Button back>вернуться</Button>
    </div>
  );
}
