"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type FormData = {
  name: string
  surname: string
  email: string
  country: string
  dialCode: string
  contactNumber: string
  appointmentDate: Date | null
  appointmentTime: string
  servicesInterested: string[]
}


const countriesData = [
  {
    "name": "Afghanistan",
    "dial_code": "+93",
    "emoji": "🇦🇫",
    "code": "AF"
  },
  {
    "name": "Aland Islands",
    "dial_code": "+358",
    "emoji": "🇦🇽",
    "code": "AX"
  },
  // Add more countries here...
]

const serviceOptions = ['Fitness', 'Psychological', 'Life Coaching', 'Manifestation'];


export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    country: '',
    dialCode: '',
    contactNumber: '',
    appointmentDate: null,
    appointmentTime: '',
    servicesInterested: []
  })

  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
    setFormData({ ...formData, appointmentDate: date, appointmentTime: '' })
  }

  const handleSelectChange = (name:string, value:string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
  
      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
  
      const result = await response.json()
      console.log('Form submitted successfully:', result)
      
      // Optionally, clear the form or show a success message here
      setFormData({
        name: '',
        surname: '',
        email: '',
        country: '',
        dialCode: '',
        contactNumber: '',
        appointmentDate: null,
        appointmentTime: '',
        servicesInterested: []
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      // Handle error, e.g., display an error message to the user
    }
  }
  

  const getAvailableTimeSlots = () => {
    if (!selectedDate) return []
    const day = selectedDate.getDay()
    const isWeekend = day === 0
    return isWeekend
      ? ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM']
      : ['1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM']
  }

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const updatedServices = prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service];
      return { ...prev, servicesInterested: updatedServices };
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-4">
        <Label htmlFor="name" className="w-1/3">Name</Label>
        <Input id="name" name="name" required value={formData.name} onChange={handleInputChange} />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Label htmlFor="surname" className='w-1/3'>Surname</Label>
        <Input id="surname" name="surname" required value={formData.surname} onChange={handleInputChange} />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Label htmlFor="email" className='w-1/3'>Email</Label>
        <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} />
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Label htmlFor="country" className='w-1/3'>Country</Label>
        <Select name="country" value={formData.country} onValueChange={(value) => handleSelectChange('country', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            {countriesData.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.emoji} {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Label htmlFor="contactNumber">Mobile No.</Label>
        <div className="flex space-x-2">
          <Select name="dialCode" value={formData.dialCode} onValueChange={(value) => handleSelectChange('dialCode', value)}>
            <SelectTrigger className="w-[90px]">
              <SelectValue placeholder="Code" />
            </SelectTrigger>
            <SelectContent>
              {countriesData.map((country) => (
                <SelectItem key={country.code} value={country.dial_code}>
                  {country.emoji} {country.dial_code}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Input 
            id="contactNumber" 
            name="contactNumber" 
            type="tel" 
            required 
            value={formData.contactNumber} 
            onChange={handleInputChange} 
            className="flex-1"
          />
        </div>
      </div>
      <div className="flex items-center gap-4 mb-4">
        <Label  className='w-1/3'>Appointment Date</Label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          className="w-full p-2 border rounded"
          placeholderText="Select appointment date"
        />
      </div>
      {selectedDate && (
        <div className="flex items-center gap-4 mb-4">
          <Label htmlFor="appointmentTime" className='w-1/3'>Appointment Time</Label>
          <Select name="appointmentTime" value={formData.appointmentTime} onValueChange={(value) => setFormData({ ...formData, appointmentTime: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select appointment time" />
            </SelectTrigger>
            <SelectContent>
              {getAvailableTimeSlots().map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

<div className="mb-4">
        <Label className="block font-medium text-gray-700">Services Interested Select Multiple</Label>
        <div className="flex flex-col gap-2">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={service}
                checked={formData.servicesInterested.includes(service)}
                onChange={() => handleCheckboxChange(service)}
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  )
}