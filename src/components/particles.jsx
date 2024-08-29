import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = (props) => {

    const [init, setInit] = useState(false);
    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
            // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
            // starting from v2 you can add only the features you need reducing the bundle size
            //await loadAll(engine);
            //await loadFull(engine);
            await loadSlim(engine);
            //await loadBasic(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };


    const options = useMemo(
        () => ({
            //   background: {
            //     color: {
            //       value: "#1E2F97",
            //     },
            //   },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "repulse",
                    },
                    onHover: {
                        enable: true,
                        mode: 'grab',
                    },
                },
                modes: {
                    bubble: {
                        distance: 400,
                        duration: 5,
                        opacity: 1,
                        size: 50,
                    },
                    connect: {
                        distance: 80,
                        links: {
                            opacity: 0.5,
                        },
                        radius: 60,
                    },
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1,
                        },
                    },
                    push: {
                        quantity: 10,
                    },
                    remove: {
                        quantity: 5,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "random",
                },
                links: {
                    blink: true,
                    color: "random",
                    consent: false,
                    distance: 200,
                    enable: false,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 3,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    limit: {
                        value: 1000,
                    },
                    value: 500,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                stroke: {
                    color: "random",
                    width: 1,
                },
                size: {
                    value: {
                        min: 1,
                        max: 10,
                    },
                },
            },
            detectRetina: true,
        }),
        [],
    );


    return <Particles id={props.id} init={particlesLoaded} options={options} />;
};

export default ParticlesComponent;