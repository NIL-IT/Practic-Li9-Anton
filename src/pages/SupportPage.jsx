import Title from "../UI/Title";
import Card from "../assets/Card.svg";
import Button from "../UI/button/Button";

export default function SupportPage() {
  const copyToClipboard = () => {
    const cardNumber = "2200 2404 0981 6317";
    navigator.clipboard.writeText(cardNumber).then(() => {
      alert("Номер карты скопирован в буфер обмена!");
    });
  };
  return (
    <div className='relative flex items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title>Поддержать проект💰</Title>
      <img
        className='mt-7 full rounded-lg filter brightness-[80%]'
        src={Card}
        alt=''
      />
      <Button
        onclick={copyToClipboard}
        className='h-[42px] text-[16px] mt-10'>
        Скопировать 🔗
      </Button>
      <Button back></Button>
    </div>
  );
}
