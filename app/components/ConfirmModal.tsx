"use client";

export default function ConfirmModal({ code, loading, onConfirm, onClose }: any) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-xl shadow-lg">
        <p className="text-center">
          ต้องการลบข้อมูลรหัสสินค้า {code} หรือไม่ ?
        </p>

        <div className="flex gap-2 mt-4 justify-center">
          <button
            onClick={onClose}
            disabled={loading}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            ยกเลิก
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="bg-red-500 text-white px-3 py-1 rounded disabled:opacity-50"
          >
            {loading ? "กำลังลบ..." : "ลบ"}
          </button>
        </div>
      </div>
    </div>
  );
}