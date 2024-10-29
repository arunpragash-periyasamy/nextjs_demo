"use client"
import React from 'react';
import { useParams } from 'next/navigation';
import CustomerForm from '../CustomerForm';
import CustomerList from '../CustomerList';
import Home from '@/app/page';
function Customer() {
const {slug} = useParams();
  if(slug === "customer_list") return <Home><CustomerList/></Home>;
  if(slug === "customer") return <Home><CustomerForm userData={null}/></Home>;
  return (
    <div> 404 Page not found</div>
  )
}

export default Customer;