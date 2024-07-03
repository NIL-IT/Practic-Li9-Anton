import { useEffect, useState } from "react";
import Title from "../UI/Title";
import Button from "../UI/button/Button";
import jsonData from "../assets/output.json";

export default function AppointmentPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(jsonData.services);
  });
  console.log(data);
  return (
    <div className='relative flex flex-col place-items-center w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-7'>Запись на обслуживание</Title>
      <Button back>вернуться</Button>
      <>
        {data.length > 0 &&
          data.map((item) => {
            return (
              <Button
                big
                link={item.town}
                className='mb-5'>
                {item.town}
              </Button>
            );
          })}
      </>
    </div>
  );
}
{
  /* <Button
  link='moscow'
  className='mb-5'>
  Москва
</Button>; */
}
