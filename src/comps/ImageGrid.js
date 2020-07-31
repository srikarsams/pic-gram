import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageGrid = ({ setUrl }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="img-grid">
      {docs.map(doc => {
        return (
          <motion.div
            className="img-wrap"
            whileHover={{ opacity: 1 }}
            layout
            key={doc.id}
            onClick={() => setUrl(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt={"pic-gram"}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
