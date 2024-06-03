import React from 'react'
import Navbar from '../../navbar/Navbar'
import MainSlider from '../../slider/Slider'
import MainBody from '../body/Body'
import SecondBody from '../secondBody/SecondBody'

const Register = () => {
    return (
        <>
            <Navbar />
            <MainSlider />
            <div className="w-auto flex items-center justify-center bg-primary flex-col py-5">
                <h2 className="text-4xl text-white hover:text-blue font-normal text-center mb-8">
                    Create an Account
                </h2>

                <div className=" p-8 rounded-lg container">
                    <div className=" flex items-center justify-center ">

                        {/* <div className="bg-white text-white  rounded-lg text-center h-[350px]">
                            <button className="bg-gradient-to-r from-secondary  to-blue text-white w-full h-[50px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                                <p className="text-[20px] text-white font-bold">Register as Independent Escort</p>
                            </button>
                            <div className='w-full mt-8 px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add a single profile</p>

                            </div>
                            <div className='w-full  px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add profile pictures</p>

                            </div>
                            <div className='w-full  px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add contact information</p>

                            </div>
                            <div className='w-full  px-5 flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">many more</p>

                            </div>
                            <div className='w-full h-[1px] opacity-20 bg-primary mt-5'></div>
                            <h3 className="text-[24px] font-normal  text-black text-left px-5 py-2">Free</h3>
                            <div className="text-left px-5">
                                <button
                                    type="submit"
                                    className=" text-white w-[200px] h-[50px] rounded bg-[#2DC36C]"
                                >
                                    <p className="text-[18px] font-bold">Register Here</p>
                                </button>
                            </div>
                        </div>

                        <div className="bg-white text-white  rounded-lg text-center h-[350px]">
                            <button className="bg-gradient-to-r from-secondary  to-blue text-white w-full h-[50px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                                <p className="text-[20px] text-white font-bold">Register as Agency</p>
                            </button>
                            <div className='w-full mt-8 px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Register as Normal User
                                </p>

                            </div>
                            <div className='w-full  px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add profile pictures</p>

                            </div>
                            <div className='w-full  px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add contact information</p>

                            </div>
                            <div className='w-full  px-5 flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">many more</p>

                            </div>
                            <div className='w-full h-[1px] opacity-20 bg-primary mt-5'></div>
                            <h3 className="text-[24px] font-normal  text-black text-left px-5 py-2">Free</h3>
                            <div className="text-left px-5">
                                <button
                                    type="submit"
                                    className=" text-white w-[200px] h-[50px] rounded bg-[#2DC36C]"
                                >
                                    <p className="text-[18px] font-bold">Register Here</p>
                                </button>
                            </div>
                        </div> */}

                        <div className="bg-white text-white w-[400px]  rounded-lg text-center h-[350px]">
                            <button className="bg-gradient-to-r from-secondary  to-blue text-white w-full h-[50px] rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition duration-300 ease-in-out">
                                <p className="text-[20px] text-white font-bold">Register as Normal User
                                </p>
                            </button>
                            <div className='w-full mt-8 px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add a single profile</p>

                            </div>
                            <div className='w-full  px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add profile pictures</p>

                            </div>
                            <div className='w-full  px-5  flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">Add contact information</p>

                            </div>
                            <div className='w-full  px-5 flex items-center'>
                                <img className='h-[18px] w-[18px] mr-2' src="https://parspng.com/wp-content/uploads/2022/07/tickpng.parspng.com-7.png" alt="" />
                                <p className="text-[18px] font-light text-primary">many more</p>

                            </div>
                            <div className='w-full h-[1px] opacity-20 bg-primary mt-5'></div>
                            <h3 className="text-[24px] font-normal  text-black text-left px-5 py-2">Free</h3>
                            <div className="text-left px-5">
                                <button
                                    type="submit"
                                    className=" text-white w-[200px] h-[50px] rounded bg-[#2DC36C]"
                                >
                                    <p className="text-[18px] font-bold">Register Here</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SecondBody />
        </>
    )
}

export default Register