import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6">
    <div className="flex h-20 shrink-0 items-end rounded-lg bg-white p-4 md:h-52">
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
