import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h2>리그 오브 레전드 정보 앱</h2>
      <div className="flex flex-col gap-10">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
      </div>
    </div>
  );
}
