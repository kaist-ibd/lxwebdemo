import React from 'react';
import Stat from './stat';
import MapCards from './mapCards';

const StatsCards = ({ stats }) => (
    <div className="max-w-7xl mt-6 mb-6 mx-auto px-4 py-4 sm:px-6 lg:px-8 xl:px-0">
        <div className='flex flex-wrap justify-center mb-36'>
            <div className='w-96 ml-2 mr-2'>
                <span className='leading-normal font-bold text-5xl'>헤더(꾸며야)</span>
            </div>
            <div className='w-96 ml-2 mr-2' />
            <div className='w-96 ml-2 mr-2' />
        </div>
        <div className='flex flex-wrap justify-center mb-5'>
            <div className='w-96 ml-2 mr-2'>
                <span className='leading-normal font-bold text-2xl'>메타버스 공간정보 데이터</span>
            </div>
            <div className='w-96 ml-2 mr-2' />
            <div className='w-96 ml-2 mr-2' />
        </div>
        <MapCards />
        <div className='flex flex-wrap justify-center mb-5'>
            <div className='w-96 ml-2 mr-2'>
                <span className='leading-normal font-bold text-2xl'>메타버스 사용자 데이터</span>
            </div>
            <div className='w-96 ml-2 mr-2' />
            <div className='w-96 ml-2 mr-2' />
        </div>
        <div className="flex flex-wrap justify-center">
            {stats.map((stat) => (
                <Stat
                    key={stat.id}
                    text={stat.text}
                    image={stat.img}
                    name={stat.name}
                    size={stat.size}
                />
            ))}
        </div>
    </div>
);

export default StatsCards;