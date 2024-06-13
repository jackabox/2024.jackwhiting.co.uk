"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import ProjectRow from "@/components/Projects/ProjectRow"
import ReactPlayer from "react-player/vimeo"

function VideoComponent({ url }: any) {
  return (
    <div className="rounded-lg overflow-hidden iframe-square h-full">
      <ReactPlayer
        width="100%"
        height="100%"
        muted
        playsinline
        loop
        playing
        url={url}
      />
    </div>
  )
}

export default function FeaturedProjects({ heading, summary, projects }: any) {
  const [active, setActive] = useState(null)

  const setProjectActive = (data: any) => {
    setActive(data)
  }

  return (
    <section className="border-y-2 border-grey-500 py-24 lg:py-36 -mt-0.5">
      <h2 className="text-4xl font-normal mb-6">{heading}</h2>
      <div
        className="rte rte--large max-w-[400px]"
        dangerouslySetInnerHTML={{ __html: summary }}
      />

      <div className="grid grid-cols-6 lg:gap-28 mt-12 lg:mt-20">
        <div className="hidden lg:block lg:col-span-3">
          {projects.map((project: any, index: number) => {
            return (
              <div className="relative" key={index}>
                <AnimatePresence>
                  {project.image.length && active == index && (
                    <div className="absolute top-0 left-0 right-0 shadow-2xl overflow-hidden">
                      <motion.div
                        initial="initial"
                        animate="animated"
                        exit="initial"
                        variants={{
                          initial: {
                            scale: 1.15,
                            transition: {
                              duration: 0,
                            },
                          },
                          animated: {
                            scale: 1,
                            transition: {
                              duration: 1,
                            },
                          },
                        }}
                      >
                        <div className="p-16 bg-blue aspect-[9/8]">
                          {project.video ? (
                            <VideoComponent url={project.video} />
                          ) : (
                            <Image
                              src={project.image[0].url}
                              width={project.image[0].width}
                              height={project.image[0].height}
                              alt={project.image[0].alt}
                            />
                          )}
                        </div>
                      </motion.div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

        <div className="col-span-full lg:col-span-3">
          {projects.map((project: any, index: number) => {
            return (
              <ProjectRow
                key={index}
                id={index}
                {...project}
                currentActive={active}
                setProjectActive={setProjectActive}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
