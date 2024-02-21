import React, { useEffect, useState } from "react";
const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3000);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "100" }}
                    className="bg-[#000] top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <h2
                        className=" animate-bounce ff-recharge font-normal leading-[90%] drop-shadow-[0px_1.337px_0px_#000] text-[#02cdcf] text-[70px]">
                        NexAi
                    </h2>
                    <div class="loader mt-10"></div>
                </section>
            ) : (
                ""
            )}
        </div>
    );
};

export default Preloader