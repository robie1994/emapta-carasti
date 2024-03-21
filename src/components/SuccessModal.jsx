import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AiOutlineCheck } from 'react-icons/ai';

const SuccessModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-50 grid cursor-pointer place-items-center overflow-y-scroll bg-slate-900/20 p-8 backdrop-blur"
        >
          <motion.div
            initial={{ scale: 0, rotate: '12.5deg' }}
            animate={{ scale: 1, rotate: '0deg' }}
            exit={{ scale: 0, rotate: '0deg' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg cursor-default overflow-hidden rounded-lg bg-gradient-to-br from-sky-600 to-indigo-600 p-6 text-white shadow-xl"
          >
            <AiOutlineCheck className="absolute -left-24 -top-24 z-0 rotate-12 text-[250px] text-white/10" />
            <div className="relative z-10">
              <div className="mx-auto mb-2 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl text-indigo-600">
                <AiOutlineCheck />
              </div>
              <h3 className="mb-2 text-center text-3xl font-bold">
                Details successfully saved!
              </h3>

              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full rounded bg-white py-2 font-semibold text-indigo-600 transition-opacity hover:opacity-90"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SuccessModal;
