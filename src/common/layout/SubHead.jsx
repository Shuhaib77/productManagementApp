import React, { useState } from "react";
import Button from "../components/button/Button";
import Modal from "../components/modal/Modal";

function SubHead() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <div className="flex justify-between shadow-sm h-[6vh] items-center">
        <div className="div">
          <h1>"home"</h1>
        </div>
        <div className=" flex gap-x-5">
          <Button
            name={"addCatogery"}
            className={"bg-yellow-400 rounded-md"}
            onClick={() => {
              setShowModal(true);
            }}
          />
          <Button name={"addCatogery"} className={"bg-yellow-400 rounded-md"} />
          <Button name={"addCatogery"} className={"bg-yellow-400 rounded-md"} />
        </div>
      </div>
      {showModal && <Modal showModal={showModal} setShowModal={setShowModal} />}
    </div>
  );
}

export default SubHead;
