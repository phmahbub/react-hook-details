import React, { useEffect, useState } from 'react';

const UseEffect = () => {
    const [post, setPost] = useState({})
    const {title, id, body} = post
    const [randomNum, setRandomNum] = useState(1)
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${randomNum}`)
        .then(res=>res.json())
        .then(data=>setPost(data))
    }, [randomNum])
    

    const handleClick = () =>{
        const randomNumber = Math.ceil(Math.random()*100)
       setRandomNum(randomNumber)
    }
    return (
        <div>
            <div className='p-7 m-9 bg-purple-300 rounded flex flex-col align-center'>
                <p className='text-center text-3xl border-2 border-cyan-100'>{id}</p>
                <p className='text-center text-3xl border-2 border-red-100'>{title}</p>
                <p className='text-justify text-2xl border-2 border-cyan-100'>{body}</p>
                <button onClick={handleClick} className='bg-slate-400 border-2 border-red-300 text-center'>New Post</button>

            </div>
        </div>
    );
};

export default UseEffect;