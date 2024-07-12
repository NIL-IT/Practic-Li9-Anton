import { useEffect, useState } from "react";
import Title from "../UI/Title";
import Button from "../UI/button/Button";

export default function InfoPage({ jsonData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const keys = Object.keys(jsonData).filter((key) => key.startsWith("FAQ"));
    setData(keys);
  }, []);
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh] px-6'>
      <Title className='mb-14'>FAQ</Title>
      <div className='grid grid-cols-2 gap-4 w-full'>
        {data.map((key, i) => (
          <div
            key={key}
            className={`${i === 0 || i % 3 === 0 ? "col-span-2" : "break-all"}`}>
            <Button
              link={key}
              className={`w-full text-center ${i === 0 || i % 3 === 0 ? "text-[20px] py-4" : "text-[16px] py-2"}`}>
              {key}
            </Button>
          </div>
        ))}
      </div>
      <Button back>вернуться</Button>
    </div>
  );
}
