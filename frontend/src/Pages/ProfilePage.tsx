import React, { useContext, useEffect, useState } from 'react'
import DashboardHeader from '../Components/DashboardHeader'
import { UserContext } from '../UserContext'
import { UserProps } from '../types'
import axios from 'axios'
import { errorNotification, successfulNotification } from '../notifications'

const ProfilePage = () => {
  const {user, setUser}: UserProps = useContext(UserContext)

  const fullName = user?.name?.split(' ')

  const [firstname, setFirstName] = useState(!fullName ? '' : fullName[0])
  const [lastname, setLastName] = useState(!fullName ? '' : fullName[1])
  const [email, setEmail] = useState(user?.email)
  const [phone, setPhone] = useState(user?.phone)
  const [bio, setBio] = useState(user?.bio)


  const editProfile = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      try {
        const {data} = await axios.patch('/auth/profile', {
          name:firstname+ ' ' +lastname, email, phone, bio
        })
        successfulNotification('profile updated successfully')
        setUser(data)
        console.log(data)
      } catch (error) {
          errorNotification('error occured, Please try again later')
          console.log(error)
      }
  }

  useEffect(() => {

  })

  
  return (
    <div className='bg-gray-100 w-full  flex justify-center items-center overflow-hidden' >
        <div className='p-5 w-full flex justify-center items-center min-h-[647px]'>
          <div className='bg-white min-h-[600px] w-full rounded-md flex flex-col p-5 text-gray-600'>
            <div className='max-w-[900px]'>
              <div className='mb-5'>
                <p className=' font-bold text-[17px]'>Profile</p>
              </div>
              <div className=''>
                <form onSubmit={(e) => editProfile(e)} className=' space-y-10'>
                  <div className=''>
                    <div className=' pt-4 space-y-10'>
                      <div className='phone:space-x-4 phone:flex'>
                        <span className='w-[100px] text-[14px] phone:text-[16px]'>First Name:</span>
                        <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" className='p-2 rounded h-[30px] w-[100%]  border border-gray-300' />
                      </div>
                      <div className='phone:space-x-4 phone:flex '>
                        <span className='w-[100px] text-[14px] phone:text-[16px]'>Last Name:</span>
                        <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" className='p-2  rounded h-[30px] w-full  border border-gray-300' />
                      </div>
                      <div className='phone:space-x-4 phone:flex'>
                        <span className='w-[100px] text-[14px] phone:text-[16px]'>Email:</span>
                        <input value={email} disabled type="text" className='p-2 rounded h-[30px]  w-full text-gray-400 border border-gray-300' />
                      </div>
                      <div className='phone:space-x-4 phone:flex'>
                        <span className='w-[100px] text-[14px] phone:text-[16px]'>Phone:</span>
                        <input type="number" value={phone === 0 ? '' : phone} onChange={(e) => setPhone(Number(e.target.value))} className='p-2 rounded h-[30px] w-full  border border-gray-300' placeholder='add a phone number' />
                      </div>
                      <div className='phone:space-x-4 phone:flex'>
                        <span className='w-[100px] text-[14px] phone:text-[16px]'>Bio:</span>
                        <input type="text" value={bio} onChange={(e) => setBio(e.target.value)} className='p-2 rounded h-[130px] w-full  border border-gray-300 flex pb-[100px]' placeholder='say something about yourself if you want' />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className='h-[35px] w-[120px] bg-blue-400 text-white'>Edit Profile</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProfilePage