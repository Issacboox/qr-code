"use client";

import { useState } from "react";
import QRModal from "./QRModal";
import ConfirmModal from "./ConfirmModal";
import axios from "axios";

export default function ProductTable({ data }: any) {
  const [qr, setQr] = useState<string | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [deleteCode, setDeleteCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    if (!deleteId) return;

    try {
      setLoading(true);
      await axios.delete(`/api/products/${deleteId}`);
      setDeleteId(null);
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <table className="w-full border rounded-2xl overflow-hidden">
        <thead>
          <tr className="bg-blue-400 text-white">
            <th>ID</th>
            <th>Code</th>
            <th>View</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((p: any) => (
            <tr className="border-b border-gray-200" key={p.id}>
              <td className="text-center">{p.id}</td>
              <td>{p.code}</td>
              <td className="flex gap-2 justify-center">
                <button
                  onClick={() => setQr(p.code)}
                  className="bg-green-500 text-white px-2 rounded-2xl shadow-md hover:bg-green-600 transition duration-300 ease-in-out"
                >
                  QR
                </button>
               
              </td>
              <td className="text-center">
                 <button
                  onClick={() => {
                    setDeleteId(p.id);
                    setDeleteCode(p.code);
                  }}
                  className="bg-red-500 text-white px-2 rounded-2xl shadow-md hover:bg-red-600 transition duration-300 ease-in-out"
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
          code={deleteCode}
          loading={loading}
          onConfirm={handleDelete}
          onClose={() => setDeleteId(null)}
        />
      )}
    </>
  );
}
