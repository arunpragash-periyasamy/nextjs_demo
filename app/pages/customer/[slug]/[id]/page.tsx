"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import CustomerForm from '../../CustomerForm';
import Home from '@/app/page';

function CustomerEdit() {
    type UserData = {
        firstName: string;
        id: string;
        ledger_name?: string;
        under?: string;
        group?: string;
        phone_number?: string;
      };
    
    const {slug, id} = useParams();
    const [userData, setUserData] = useState<UserData | null>(null);
    const fetchData = async (id : any) => {
        const url = `https://66790ce018a459f6394dc0d8.mockapi.io/abc/${id}`;
        const response = await fetch(url);
        const data = await response.json();
        setUserData(data);
    } 
    useEffect(()=>{
        fetchData(id);
    }, [id]);
    if(slug !== "customer") return (<div className='font-bold text-3xl'>404 Page not found !!!</div>);
   
  return (<Home><CustomerForm userData={userData} /></Home>);
}

export default CustomerEdit