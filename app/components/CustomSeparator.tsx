
import Marquee from "react-fast-marquee";

export const CustomSeparator = () => {
    return (
        <div className='py-20 flex flex-col md:gap-10 gap-7 dark:bg-black'>
            {Array.from({ length: 3 }).map((_, index) => (
                <Marquee speed={index == 0 ? 200 : index == 1 ? 150 : 250} key={index} direction={index == 1 ? "right" : "left"}>
                    <div className="flex">
                        {Array.from({ length: 14 }).map((_, index) => (
                            <div
                                key={index}
                                className='w-[200px] h-[1px] border dark:border-zinc-800 border-zinc-300 mx-5'
                            ></div>
                        ))}
                    </div>
                </Marquee>
            ))}
        </div>
    );
};