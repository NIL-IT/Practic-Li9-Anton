import Logo from "../assets/logo2.svg";
import Button from "../UI/button/Button";
import Title from "../UI/Title";

export default function About() {
  return (
    <div className='relative flex place-items-center flex-col w-[100vw] max-w-[320px] min-h-[100vh]'>
      <Title className='mb-14 '>О нас 🚀</Title>
      <div className='w-[155px] h-[155px] bg-[#264404] flex justify-center items-center mb-14 rounded-2xl'>
        <img
          className='w-[75%] pl-4 flex justify-center items-center pt-4'
          src={Logo}
          alt=''
        />
      </div>
      <div className='mb-[70px]'>
        <a
          href=''
          className={`flex justify-center items-center font-bold  rounded-2xl text-center py-[10px] mb-5 h-[42px] w-[270px]`}
          style={{
            background: `linear-gradient(96.33deg, #264404 0.85%, #305604 49.08%, #396904 97.3%)`,
            boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
          }}>
          Наш чат 💬
        </a>
        <a
          href=''
          className={`flex justify-center items-center font-bold  rounded-2xl text-center py-[10px] mb-5 h-[42px] `}
          style={{
            background: `linear-gradient(96.33deg, #264404 0.85%, #305604 49.08%, #396904 97.3%)`,
            boxShadow: "0px 4px 11.9px rgba(0, 0, 0, 0.25)",
          }}>
          Задать вопрос❓
        </a>
      </div>
      <Button back></Button>
    </div>
  );
}
