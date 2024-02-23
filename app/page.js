import DigitalClock from "./DigitalClock";

export default function App() {
  const timeNow = new Date();
  return (
    <>
      <DigitalClock timeNow={timeNow.getTime()} />
    </>
  );
}
