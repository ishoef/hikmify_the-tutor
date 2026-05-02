import Link from 'next/link';
import React from 'react'

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-[#153151] flex items-center justify-center text-white font-bold">
        H
      </div>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        HikmiFy
      </span>
    </Link>
  );
}