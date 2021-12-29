function HeroItem({ text, img_src }) {
    return (
        <div className='flex flex-col items-center'>
            <img src={img_src} className='h-14 md:h-20' />
            <p>{text}</p>
        </div>
    );

}

function Hero() {
    return (
        <section className='w-full z-0'>            
            <img src="/images/hero-bg.png" className="w-full h-[40rem] object-cover" alt="hero-bg" />
            <div className="absolute top-0 w-full h-[40rem]  bg-black bg-opacity-30">
                <div className='container text-white pt-40'>

                    <h1 className='mx-20 text-4xl mb-8'>About Us</h1>

                    <div className="mx-20 text-lg">
                        <p className="leading-6 text-xs mt-4 text-justify">
                            Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut. enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.
                        </p>
                        <p className="leading-6 text-xs mt-4 text-justify">
                            Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turp.
                        </p>
                        <p className="leading-6 text-xs mt-4 text-justify">
                            posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis malesuada facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec sollicitudin ac fringilla turpis ipsum. Quam posuere elementum id turpis elit vitae enim, turpis metus. Donec sit arcu lobortis facilisi ut.Elit sapien viverra egestas quis leo id. Sed sit id posuere aliquam. Quis morbi in donec soll
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
