"use client";
import React, { useEffect, useState } from "react";
type UserData = {
  firstName: string;
  id: string;
  ledger_name?: string;
  under?: string;
  group?: string;
  phone_number?: string;
};

interface CustomerProps {
  userData: UserData | null;
}
const CustomerForm: React.FC<CustomerProps> = ({ userData }) => {
  const [formData, setFormData] = useState(userData);
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = "https://66790ce018a459f6394dc0d8.mockapi.io/abc";
    if (validate()) {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Specify the content type if sending JSON
            Authorization: "Bearer your-token", // Optional authorization header if needed
          },
          body: JSON.stringify(formData), // Convert the data object to a JSON string
        });
        const data = await response.json();
        if (data) {
          alert("Data inserted successfully");
          (
            document.getElementById("customer_form") as HTMLFormElement
          )?.reset();
        }
      } catch (err) {
        alert("Error in the data insertion ");
        console.log(err);
      }
    }
  };

  const validate = () => {
    let error_code = 0;
    document.querySelectorAll(".error").forEach((el) => el.remove());
    if (formData?.hasOwnProperty("ledger_name")) {
      if (formData["ledger_name"] === "") {
        error_code = 1;
        document
          .getElementById("ledger_name")
          ?.insertAdjacentHTML(
            "afterend",
            `<span class="error text-red-600  whitespace-nowrap">Enter the Ledger Name</span>`
          );
      }
    } else {
      error_code = 1;
    }
    if (formData?.hasOwnProperty("under")) {
      if (formData["under"] === "") {
        error_code = 1;
        document
          .getElementById("under")
          ?.insertAdjacentHTML(
            "afterend",
            `<span class="error text-red-600 whitespace-nowrap">Enter the Under</span>`
          );
      }
    } else {
      error_code = 1;
    }
    if (formData?.hasOwnProperty("group")) {
      if (formData["group"] === "") {
        error_code = 1;
        document
          .getElementById("group")
          ?.insertAdjacentHTML(
            "afterend",
            `<span class="error text-red-600 w-full whitespace-nowrap">Enter the group</span>`
          );
      }
    } else {
      error_code = 1;
    }
    if (formData?.hasOwnProperty("phone_number")) {
      if (formData["phone_number"] === "") {
        error_code = 1;
        document
          .getElementById("phone_number")
          ?.insertAdjacentHTML(
            "afterend",
            `<span class="error text-red-600  whitespace-nowrap">Enter the phone_number</span>`
          );
      }
    } else {
      error_code = 1;
    }
    return error_code === 0;
  };

  const handleInputValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    console.log(id, " ", value);

    setFormData((prev) => {
      const currentData = prev ?? {
        firstName: "",
        id: "",
        ledger_name: "",
        under: "",
        group: "",
        phone_number: "",
      };
      return { ...currentData, [id]: value };
    });
  };

  useEffect(() => {
    if (userData) {
      for (const key in userData) {
        if (userData.hasOwnProperty(key)) {
          const element = document.getElementById(
            key
          ) as HTMLInputElement | null;
          if (element) {
            element.value = userData[key as keyof UserData] || "";
          }
        }
      }
      setFormData(userData);
    }
  }, [userData]);

  return (
    <form onSubmit={handleFormSubmit} id="customer_form">
      <div className="divide-y divide-gray-400">
        <div className="flex justify-between items-center">
          <div className="space-x-2 m-3">
            <label htmlFor="ledger_name" className="font-semibold text-sm">
              Ledger Name :{" "}
            </label>
            <select
              name="type"
              className="bg-white px-1 rounded border-black border"
            >
              <option value="mr">Mr.</option>
              <option value="mrs">Mrs.</option>
            </select>
            <input
              type="text"
              id="ledger_name"
              placeholder="Ledger Name"
              className="bg-white px-1 border-black border rounded w-96"
              onChange={handleInputValues}
            />
          </div>
          <div>
            <label htmlFor="opening_balance" className="font-semibold text-sm">
              Opening Balance :{" "}
            </label>
            <input
              type="text"
              id="opening_balance"
              placeholder="Opening balance"
              className="bg-white px-1 border-black border rounded"
              onChange={handleInputValues}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 pt-2 divide-x divivde-black">
          <div className="space-y-3">
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="under" className="col-span-4 font-semibold">
                Under
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <div>
                <input
                  type="text"
                  id="under"
                  placeholder="Under"
                  className="col-span-6 px-1 border border-black rounded"
                  onChange={handleInputValues}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="group" className="col-span-4 font-semibold">
                Group (Alt + C)
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <div className="w-full">
                <input
                  type="text"
                  id="group"
                  placeholder="Group"
                  className="col-span-6 px-1 border border-black rounded"
                  onChange={handleInputValues}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="phone_number"
                className="col-span-4 font-semibold"
              >
                Phone Number
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <div>
                <input
                  type="text"
                  id="phone_number"
                  placeholder="Phone Number"
                  className="col-span-6 px-1 border border-black rounded"
                  onChange={handleInputValues}
                />
              </div>
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="alternate_number"
                className="col-span-4 font-semibold"
              >
                Alternate Number
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="alternate_number"
                placeholder="Alternate number"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="email" className="col-span-4 font-semibold">
                Email
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="email"
                placeholder="Email"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
          </div>

          <div className="space-y-3 pl-2">
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="company_name"
                className="col-span-4 font-semibold"
              >
                Name
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="company_name"
                placeholder="Name"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="address1" className="col-span-4 font-semibold">
                Address
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="address1"
                placeholder="Address 1"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="address_2"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="address_2"
                placeholder="Address 2"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="address_3"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="address_3"
                placeholder="Address 3"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="state" className="col-span-4 font-semibold">
                State
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="state"
                placeholder="state"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="pincode" className="col-span-4 font-semibold">
                Pincode
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="pincode"
                placeholder="Pincode"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label htmlFor="bank_name" className="col-span-4 font-semibold">
                Bank Details
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="bank_name"
                placeholder="Bank Name"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="account_no"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="account_no"
                placeholder="Account Number"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="ifsc_code"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="ifsc_code"
                placeholder="IFSC Code"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="branch_name"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="branch_name"
                placeholder="Branch Name"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="registration_type"
                className="col-span-4 font-semibold"
              >
                GST Details
              </label>
              <p className="col-span-2 text-center font-semibold">:</p>
              <input
                type="text"
                id="registration_type"
                placeholder="Registration type"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="gst_no"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="gst_no"
                placeholder="GST Number"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="aadhar_number"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="aadhar_number"
                placeholder="Aadhar Number"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-1 px-1">
              <label
                htmlFor="pan_number"
                className="col-span-4 font-semibold"
              ></label>
              <p className="col-span-2 text-center font-semibold"></p>
              <input
                type="text"
                id="pan_number"
                placeholder="PAN Number"
                className="col-span-6 px-1 border border-black rounded"
                onChange={handleInputValues}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button
          className="p-2 font-semibold bg-green-700 rounded text-white"
          type="submit"
        >
          Save / Update
        </button>
      </div>
    </form>
  );
};

export default CustomerForm;
