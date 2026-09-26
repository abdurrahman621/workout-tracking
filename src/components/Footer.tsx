import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0d0f13] px-5 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/logo.png"
            alt="FitLog"
            width={32}
            height={32}
            className="object-contain"
          />

          <span className="text-xl font-black uppercase tracking-wide">
            FIT<span className="text-[#ccff00]">LOG</span>
          </span>
        </Link>

        <p className="text-xs leading-5 text-gray-500 sm:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;