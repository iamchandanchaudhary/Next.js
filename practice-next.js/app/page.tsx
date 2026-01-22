import Popup3 from "@/components/Popup3";
import TimedPopup from "@/components/TimedPopup";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <p className="bg-blue-900 text-white p-4">Popup Project</p>
      <TimedPopup />
      {/* <Popup3 /> */}

      <div>
        <Link href={"/popup2"} className="bg-red-900 rounded px-3 py-1.5 m-5"> Another Popup</Link>
      </div>
    </div>
  );
}
