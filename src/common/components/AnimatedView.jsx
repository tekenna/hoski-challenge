import React, { useEffect } from "react";
import { motion, AnimatePresence, usePresence } from "framer-motion";

const AnimatedView = ({ children }) => {
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPresent]);
  return (
    <AnimatePresence initial={false}>
      {isPresent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0, 0.71, 0.2, 1.01] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimatedView;
