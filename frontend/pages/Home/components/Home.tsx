import dynamic from "next/dynamic";

const GoogleMap = dynamic(() => import("../components/GoogleMap"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <GoogleMap />
    </div>
  );
}
