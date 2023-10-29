import React from 'react'
import './Home.css';
import Banner from './Banner';
import Card from './Card';
function Home() {
  return (
    <div className='home'>
      <h1>Home component</h1>
      <Banner/>
      <div className='home_section'>
      <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-654001690497595692/original/94605df9-10d9-4082-ad2d-3b11ec519386.jpeg?im_w=720"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/d8d629d7-9307-4b24-a8ae-b01d95e36124.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
            </div>
    <div className='home_section'>
    <Card
                src="https://a0.muscache.com/im/pictures/miso/Hosting-604706020372898045/original/2d2f7a32-70d9-4cf8-8f76-7a48b36fcffe.jpeg?im_w=720"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/a31085f2-e151-41b0-abda-e084903abff1.jpg?im_w=720"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/0fa83a57-697f-42e9-a1a0-b7b9e9610580.jpg?im_w=720"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
    </div>
      
    </div>
  )
}

export default Home
