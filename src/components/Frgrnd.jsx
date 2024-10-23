import React, { useRef } from 'react'
import Card from './Card';

function Frgrnd() {
    const ref= useRef(null);
    const data = [
        {
            desc: "I can do all things through Christ who strengthens me.  – Philippians (4:13)",
            fileSize: "10mb",
            close: false,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc: "You have the right to perform your duty, but not the right to expect any fruits from it. - Geeta 2.47",
            fileSize: "10mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Upload ", tagColor: "blue" },
        },
        {
            desc: "And whoever puts their trust in Allah, then He will suffice them. – Quran (65:3)",
            fileSize: "10mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc:"The mind is restless and difficult to restrain, but it is subdued by practice.  – Bhagavad Gita (6.35)",
            fileSize: "10mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
        },
        {
            desc:"He who has no faith in himself can never have faith in God. – Guru Granth Sahib (Ang 554)",
            fileSize: "10mb",
            close: false,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
        },
    ];

    return (
        <div ref={ref} className='fixed l-0 r-0 z-[3] w-full h-screen flex flex-wrap p-5 gap-5'>
            {data.map((item, index) => (
                <Card data={item}  reference={ref} />
            ))}
        </div>
    )
}

export default Frgrnd;
