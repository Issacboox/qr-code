"use client";

import { useState } from "react";
import QRModal from "./QRModal";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";

export default function ProductTable({ data }: any) {
  const [qr, setQr] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const handleDelete = async () => {
    if (!deleteId) return;

    await axios.delete(`/api/products/${deleteId}`);
    setDeleteId(null);
    window.location.reload();
  };
  
  return (
    <>
      <table className="w-full border">
        <thead>
          <tr className="bg-blue-400 text-white">
            <th>ID</th>
            <th>Code</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((p: any) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.code}</td>
              <td className="flex gap-2">
                <button
                  onClick={() => setQr(p.code)}
                  className="bg-green-500 text-white px-2"
                >
                  QR
                </button>
                <button
                  onClick={() => setDeleteId(p.id)}
                  className="bg-red-500 text-white px-2"
                >
                  ลบ
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {qr && <QRModal code={qr} onClose={() => setQr(null)} />}
      {deleteId && (
        <ConfirmModal
          onConfirm={handleDelete}
          onClose={() => setDeleteId(null)}
        />
      )}
    </>
  );
}
