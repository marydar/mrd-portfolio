import { UpdateFollower } from 'react-mouse-follower'
import { FaGithub, FaGlobe } from 'react-icons/fa'
import { ProjectsData } from '../data/projects-data'

export const Services = () => {
  return (
    <>
        <section id='projects' className='bg-[#060910] py-12 cursor-none'>
            <div className='container'>
                <h1 className="pb-12 text-center font-bold font-orbitron text-[36px] text-[#87F3FF] [text-shadow:_0px_4px_15px_rgba(0,229,225,0.25)] [--stroke:1px_#5FAEB8] [-webkit-text-stroke:var(--stroke)]">Projects</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12'>
                    {ProjectsData.map((data) =>(
                        <UpdateFollower
                            key={data.id}
                            mouseOptions={{
                                backgroundColor:"white",
                                zIndex: 999,
                                followSpeed: 0.5,
                                scale: 5,
                                rotate: 720,
                                mixBlendMode:"difference",
                            }}
                        >
                            <div className='px-6 flex flex-col items-center justify-center p-5 max-w-[350px] max-h-[300px] mx-auto rounded-xl bg-[rgba(26,29,42,0.30)] border-[0.5px] border-[#00E5FF] shadow-[inset_0_0_30px_rgba(0,229,255,0.25)]'>
                                <div className='rounded-sm object-cover '>
                                  <img src={data.image} alt="" className='rounded-md mb-4 w-[300px] h-[150px] md:w-[250px] md:h-[100px] xl:w-[300px] xl:h-[150px]'/>
                                </div>
                                <div className='text-center space-y-2'>
                                    <div className='flex items-center justify-between'>
                                      <h1 className="font-bold font-orbitron text-[20px] md:text-[16px] text-[#8BF3FF] [text-shadow:_0px_4px_20px_rgba(0,229,225,0.25)] [--stroke:1px_#3B6C72] [-webkit-text-stroke:var(--stroke)]">{data.title}</h1>
                                      <div
                                        className='py-2 font-normal rounded-sm flex gap-2 items-start'
                                      >
                                        {data.websiteLink!==null &&
                                          <div className='text-2xl text-[#87F3FF]'>
                                          <a href={data.websiteLink} target="_blank">
                                              <FaGlobe />
                                          </a>
                                          </div> 
                                        }
                                        <div className='text-2xl text-[#87F3FF]'>
                                        <a href={data.githubLink} target="_blank">
                                            <FaGithub />
                                        </a>
                                        </div> 
                                      </div>
                                    </div>
                                    <p className='text-start text-[11px] text-[#B0BEC5]'>{data.description}</p>
                                </div>
                            </div>
                        </UpdateFollower>
                    ))}
                </div>
            </div>
        </section>  
    </>
  )
}
