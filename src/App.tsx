"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "Ні",
      "Ти впевнена?",
      "Якщо ще раз подумати?)",
      "Будь-ласочка))",
      "А якщо я зроблю матчу латте??",
      "Але... :(",
      "Я помру без тебе..",
      "Я помер((",
      "Ти вже спілкуєшся з привидом Данііііі",
      ":((((",
      "БУДЛЬ ЛАССКККААА",
      "Ні :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center ">
      {yesPressed ? (
      <>
        <img src="https://media.tenor.com/qPa9uJo18WcAAAAd/snoopy.gif" />
        <div className="my-4 text-4xl font-bold">♡♡♡♡ Воооооуу!!! Дуже кохаю тебе, моє сонечко!! :)) ♡♡♡♡</div>
      </>
      ) : (
      <>
        <img
        className="h-[200px]"
        src="https://gifdb.com/images/high/peanuts-snoopy-teaching-sally-charlie-valentines-heart-y5r4ejzkhwaxztdt.gif"
        />
        <h1 className="my-4 text-4xl">Naaastyaa, Will you be my Valentine???</h1>
        <div className="flex items-center">
        <button
          className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
          style={{ fontSize: yesButtonSize }}
          onClick={() => setYesPressed(true)}
        >
          Так
        </button>
        <button
          onClick={handleNoClick}
          className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
        >
          {noCount === 0 ? "Ні" : getNoButtonText()}
        </button>
        </div>
      </>
      )}
    </div>
  );
}
