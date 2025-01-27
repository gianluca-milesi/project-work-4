import style from "./SecondBanner.module.css";

function SecondBanner() {
  return (
    <div
      className={`${style.banner} p-0 mx-auto flex justify-between place-items-end`}
    >
      <div>
        <h2 className="text-4xl font-semibold pl-7 pt-4">Perchè unirsi a noi?</h2>
        <h2 className="text-2xl font-thin pl-7 pt-6">
          Recensioni <span className="font-semibold">verificate</span>, contatti{" "}
          <span className="font-semibold">affidabili</span>: la tua rete medica
          di <span className="font-semibold">fiducia</span> a portata di{" "}
          <span className="font-semibold">Click</span>.
        </h2>
        <h2 className="text-2xl font-thin pl-7 pt-5 pb-8">
          Entra a far parte della nostra community di medici specializzati e
          inizia a farti conoscere con{" "}
          <span className="font-semibold">BDoctors</span>!
        </h2>
      </div>
      <img
        src="http://localhost:3000/StockImg/banner_stock.png"
        className={`${style.mirroredImage} w-2/12`}
      />
    </div>
  );
}

export default SecondBanner;
