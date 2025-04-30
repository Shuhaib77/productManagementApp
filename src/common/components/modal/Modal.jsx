import React from "react";

function Modal({ showModal, setShowModal }) {
  return (
    <div className="flex flex-col items-center justify-center  ">
      {showModal && (
        <div className="fixed inset-0  backdrop-blur-md flex items-center justify-center z-50   ">
          {/* Modal content */}
          <div className="bg-white p-6 rounded-lg shadow-xl w-[90%] bg-bl max-w-md z-10">
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="mb-4">This is the modal content.</p>
            <div className="flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
