import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

function SideMenu() {
  return (
    <div className="flex justify-between p-2 items-center text-base font-bold">
      <div><Link href="/pages/customer/customer_list"> Customer</Link></div>
      <div><Link href="/pages/customer/customer">
        <FaPlus />
        </Link>
      </div>
    </div>
  );
}

export default SideMenu;
