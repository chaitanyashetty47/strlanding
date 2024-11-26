"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import countriesData from "@/utils/countries.json";
import { Search, Loader2 } from "lucide-react";

type FormData = {
  name: string;
  surname: string;
  email: string;
  country: string;
  dialCode: string;
  contactNumber: string;
  servicesInterested: string[];
};

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const serviceOptions = ["Fitness", "Psychological", "Life Coaching", "Manifestation"];

const initialFormData: FormData = {
  name: "",
  surname: "",
  email: "",
  country: "",
  dialCode: "",
  contactNumber: "",
  servicesInterested: [],
};

export const ContactForm: React.FC<ContactFormProps> = ({ open, onOpenChange }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const filtered = countriesData.filter((country) =>
        country.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
      setFilteredCountries(filtered);
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "country" && { dialCode: countriesData.find((c) => c.name === value)?.dial_code || "" }),
    }));
  };

  const handleCheckboxChange = (service: string) => {
    setFormData((prev) => {
      const updatedServices = prev.servicesInterested.includes(service)
        ? prev.servicesInterested.filter((s) => s !== service)
        : [...prev.servicesInterested, service];
      return { ...prev, servicesInterested: updatedServices };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      
      clearForm();
      onOpenChange(false);
      setShowSuccessDialog(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const clearForm = () => setFormData(initialFormData);

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-center">Contact Details</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rest of the form content remains the same */}
            {["name", "surname", "email"].map((field) => (
              <div key={field} className="flex items-center gap-4">
                <Label htmlFor={field} className="w-1/3 capitalize">
                  {field}
                </Label>
                <Input
                  id={field}
                  name={field}
                  required
                  value={formData[field as keyof FormData] as string}
                  onChange={handleInputChange}
                />
              </div>
            ))}

            <div className="flex items-center gap-4">
              <Label htmlFor="country" className="w-1/3">
                Country
              </Label>
              <Select
                name="country"
                value={formData.country}
                onValueChange={(value) => handleSelectChange("country", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent 
                  className="max-h-[300px] overflow-hidden" 
                  position="popper"
                  side="bottom"
                  align="start"
                  sideOffset={5}
                >
                 <div className="sticky top-0 z-50 bg-white p-2 border-b shadow-sm "> 
                    <div className="flex items-center px-2 py-1 border rounded-md">
                      <Search className="w-4 h-4 mr-2 text-gray-400" />
                      <input
                        type="search"
                        className="w-full border-none outline-none bg-transparent placeholder:text-gray-400"
                        placeholder="Search countries..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoComplete="off"  // Prevent autocomplete
                        autoCorrect="off"   // Disable autocorrect
                        autoCapitalize="off" // Disable auto-capitalization
                      />
                    </div>
                 </div>
                  <div className="pt-2 overflow-y-auto">
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <SelectItem key={country.code} value={country.name}>
                          {country.emoji} {country.name}
                        </SelectItem>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 p-2">No countries found</p>
                    )}
                  </div>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <Label htmlFor="contactNumber" className="w-1/3">
                Mobile No.
              </Label>
              <div className="flex space-x-2">
                <Select
                  name="dialCode"
                  value={formData.dialCode}
                  onValueChange={(value) => handleSelectChange("dialCode", value)}
                >
                  <SelectTrigger className="w-24">
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

            <div>
              <Label className="block font-medium text-gray-700">Services Interested</Label>
              <div className="flex flex-col gap-2 mt-2">
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

            <div className="flex justify-end space-x-4">
              <Button 
                type="button" 
                variant="outline" 
                onClick={clearForm}
                disabled={isSubmitting}
              >
                Clear
              </Button>
              <DialogClose asChild>
                <Button 
                  type="button" 
                  variant="outline"
                  disabled={isSubmitting}
                >
                  Cancel
                </Button>
              </DialogClose>
              <Button 
                type="submit"
                disabled={isSubmitting}
                className="min-w-[100px] bg-[#F31818]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Details Submitted</DialogTitle>
          </DialogHeader>
          <p className="text-center py-4">We Will Reach Out To You Soon!</p>
          <div className="flex justify-end">
            <Button className = "bg-[#F31818]" onClick={() => setShowSuccessDialog(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};