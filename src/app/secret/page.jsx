'use client";'
import Link from "next/link";

export default function KuratorForside() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Kurator</h1>
      <p className="mt-2">bare en side.</p>
      <ul className="mt-4">
        <li>
          <Link href="/secret/kurator-redigering" className="text-blue-500 hover:underline">
           Rediger events
          </Link>
        </li>
      </ul>
    </div>
  );
}