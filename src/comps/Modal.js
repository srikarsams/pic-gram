import React from "react";
import { motion } from "framer-motion";

const Modal = ({ url, setUrl }) => {
  const handleClick = e => {
    if (e.target.classList.contains("backdrop")) setUrl(null);
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={url}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: "0vh" }}
      />
    </motion.div>
  );
};

export default Modal;
