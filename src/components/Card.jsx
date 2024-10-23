import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.05}} dragTransition={{bounceStiffness:100, bounceDamping:30}} className='relative w-52 h-64 rounded-[35px] bg-zinc-900/80 p-5 text-white overflow-hidden'>
            <FaRegFileAlt />
            <p className='pt-5  font-semibold text-sm'>{data.desc}</p>
            <div className="footer absolute bottom-0 left-0 w-full">
                <div className='flex justify-between px-5 py-3 '>
                    <h5>{data.fileSize}</h5>
                    {data.close ? <IoCloseCircleSharp size="1.4em" color='grey'/> : <MdDownloadForOffline size="1.4em" color='grey' />}
                </div>   
                {data.tag.isOpen && (
                <div className={`w-full ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} py-3 flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
                )}
            </div>
        </motion.div>
    )
}

export default Card
