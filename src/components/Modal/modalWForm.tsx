"use client";
import { useState } from "react";

export default function ModalWithForm({
  id,
  isOpen,
  onClose,
}: {
  id: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    company: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(process.env.BASE_URL + "/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Product created successfully!");
        setFormData({
          name: "",
          company: "",
          message: "",
          email: "",
          phone: "",
        });
        onClose();
      } else {
        alert("Failed to create product");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id={id}
      className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-6 w-full max-w-md">
        <div className="flex justify-between items-center border-b pb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Fill the form to download
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 dark:hover:bg-gray-600"
          >
            <span className="sr-only">Close modal</span>
            &#x2715;
          </button>
        </div>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="grid gap-4 mb-4 grid-cols-2">
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Company Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                name="number"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border"
                required
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Description
              </label>
              <textarea
                name="description"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-lg mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Add New Product"}
          </button>
        </form>
      </div>
    </div>
  );
}
