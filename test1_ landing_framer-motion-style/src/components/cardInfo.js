import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/cardInfo.modul.css";

const CardInfo = ({items}) => {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div  className="card-info-block">
            {items.map(item => (
            <motion.div className="card-info-item" layoutId={item.id} onClick={() => setSelectedId(item.id)}>
                <motion.h5>{item.subtitle}</motion.h5>
                <motion.h2>{item.title}</motion.h2>
                <motion.p>{item.text}</motion.p>
            </motion.div>
            ))}

            <AnimatePresence>
                {selectedId && (
                    <motion.div className="card-info-item over-block" layoutId={selectedId}>
                        <motion.h5>{items[selectedId-1].subtitle}</motion.h5>
                        <motion.h2>{items[selectedId-1].title}</motion.h2>
                        <motion.p>{items[selectedId-1].text}</motion.p>
                        <motion.div className="scroll-image" style={{width: "300px"}}>
                            <img src={items[selectedId-1].img} alt="nature" />
                        </motion.div>
                        <motion.button onClick={() => setSelectedId(null)}>x</motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default CardInfo;
