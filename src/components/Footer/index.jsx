import Content from './Content';

export default function Footer() {

    return (
        <div
            className='relative h-[300px] md:h-[500px] w-full'
            style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
            <div className='relative h-[calc(100vh+300px)] md:h-[calc(100vh+500px)] -top-[100vh]'>
                <div className='h-[300px] md:h-[500px] sticky top-[calc(100vh-300px)] md:top-[calc(100vh-500px)]'>
                    <Content />
                </div>
            </div>
        </div>
    )
}