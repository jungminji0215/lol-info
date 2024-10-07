import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center flex-col text-center	gap-6">
      <h2 className="text-4xl	text-red-700 font-bold">
        리그 오브 레전드 정보 앱
      </h2>
      <p className="text-zinc-400	">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="flex flex-col gap-10 text-amber-600	">
        <div>
          <Link href={"/champions"}>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/14.19.1/img/champion/Poppy.png`}
              width={300}
              height={300}
              alt={"홈 챔피언 목록 이미지"}
            />
            <h3>챔피언 목록</h3>
          </Link>
        </div>

        <div>
          <Link href={"/rotation"}>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/14.19.1/img/champion/Poppy.png`}
              width={300}
              height={300}
              alt={"홈 로테이션 이미지"}
            />
            <h3>금주 로테이션 확인</h3>
          </Link>
        </div>
        <div>
          <Link href={"/items"}>
            <Image
              src={`${process.env.NEXT_PUBLIC_RIOT_API_URL}/14.19.1/img/champion/Poppy.png`}
              width={300}
              height={300}
              alt={"홈 아이템 목록 이미지"}
            />
            <h3>아이템 목록</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
