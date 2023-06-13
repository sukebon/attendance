"use client";
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { BrowserMultiFormatReader, NotFoundException } from '@zxing/library';
import { useRouter } from 'next/navigation';

const Camera = () => {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLMediaElement>(null);
  const codeReader = useMemo(() => new BrowserMultiFormatReader(), []);
  const [dataList, setDataList] = useState<string[]>([]);

  const playAudio = () => {
    audioRef?.current?.currentTime;
    audioRef?.current?.play();
  };

  const reset = () => {
    codeReader.reset();
    router.push('/');
  };
  useEffect(() => {
    playAudio();
  }, []);
  useEffect(() => {
    let timeoutId: any;
    const playScan = async () => {
      if (!videoRef.current) return;
      let selectedDeviceId = null;
      await codeReader.listVideoInputDevices().then((videoInputDevices) => {
        selectedDeviceId = videoInputDevices[0].deviceId;
      });
      let arrayList: string[] = [];
      await codeReader.decodeFromVideoDevice(null, videoRef.current, (result, err) => {
        if (result) {
          const isArrayList = arrayList.includes(result.getText());
          if (isArrayList) return;
          arrayList.push(result.getText());
          const isDataList = dataList.includes(result.getText());
          if (isDataList) return;
          playAudio();
          setDataList((prev: string[]) => {
            const newArray = [...prev, result.getText()];
            return newArray;
          });
        }
        if (err && !(err instanceof NotFoundException)) {
          console.error(err);
          return;
        }
      });
      timeoutId = setTimeout(() => {
        codeReader.reset();
        router.push('/');
      }, 10000);
    };
    playScan();
    return () => { clearTimeout(timeoutId); };

  }, []);

  return (
    <div className="flex w-full min-h-screen bg-black-50">
      <section className="flex flex-col justify-between	 w-1/2 min-h-screen bg-black relative">
        <div className='w-full'>
          <video ref={videoRef} width="100%" height="100%"></video>
        </div>
        <audio id="btn_audio" ref={audioRef} preload="auto">
          <source src="./audio/audio-scan.mp3" type="audio/mp3" />
        </audio>
        <div className="w-full text-center bottom-2">
          <div className='my-2 w-full text-center'>
            <button
              id="resetButton"
              className="p-2 font-semibold text-lg bg-red-500 text-white shadow-sm"
              onClick={reset}
            >
              閉じる
            </button>
          </div>
        </div>
      </section>
      <section className="w-1/2 min-h-screen bg-white">
        {dataList.map((value, index) => (
          <div key={index}>{value}11</div>
        ))}
      </section>
    </div >
  );
};
export default Camera;
