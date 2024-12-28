"use client";
// import urls from "@/constant/url";
import { sendGTMEvent } from "@next/third-parties/google";
import { useState } from "react";

export default function ModalWithForm({
  id,
  isOpen,
  onClose,
  isEnquiry = false,
}: {
  id: string;
  isOpen: boolean;
  isEnquiry?: boolean;
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
  const [isEventSent, setIsEventSent] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (!isEventSent) {
      sendGTMEvent({
        event: "contact_us",
        value: isEnquiry ? "enquiry" : "download",
      });
      setIsEventSent(true);
    }
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      formData.message = isEnquiry
        ? "(enquiry)  " + formData.message
        : "(file-downloaded)  " + formData.message;
      const response = await fetch(process.env.BASE_URL + "/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          company: "",
          message: "",
          email: "",
          phone: "",
        });
        onClose();
      } else {
        alert("Failed to send contact form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred");
    } finally {
      if (!isEnquiry) {
        // handleDownload(isOpen);
      }
      setIsSubmitting(false);
    }
  };
  // const handleDownload = async (file: string) => {
  //   try {
  //     if (file === "") {
  //       return;
  //     }
  //     let downloadUrl = file;
  //     if (file === "companyProfilePdf" || file === "#") {
  //       downloadUrl = urls?.companyProfilePdf;
  //     }
  //     const url1 = `${process.env.API_URL}${downloadUrl}`;
  //     const response = await fetch(url1, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/pdf",
  //       },
  //     });
  //     if (!response.ok) throw new Error("Failed to download file");
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement("a");
  //     link.href = url;
  //     link.download = url.split("/").pop() || "downloaded-file";
  //     link.style.display = "none";
  //     document.body.appendChild(link);
  //     link.click();
  //     setTimeout(() => {
  //       document.body.removeChild(link);
  //       window.URL.revokeObjectURL(url);
  //     }, 0);
  //   } catch (error) {
  //     console.error("Failed to download file:", error);
  //   }
  // };

  if (!isOpen) return null;

  // return (
  //   <div
  //     id={id}
  //     className="fixed top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
  //   >
  //     <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-6 w-full max-w-md">
  //       <div className="flex justify-between items-center border-b pb-4">
  //         <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
  //           {isEnquiry ? "Enquiry Form" : "Fill the form to download"}
  //         </h3>
  //         <button
  //           type="button"
  //           onClick={onClose}
  //           className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 dark:hover:bg-gray-600"
  //         >
  //           <span className="sr-only">Close</span>
  //           &#x2715;
  //         </button>
  //       </div>
  //       <form onSubmit={handleSubmit} className="mt-4">
  //         <div className="grid gap-4 mb-4 grid-cols-2">
  //           <div className="col-span-2">
  //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //               Full Name
  //             </label>
  //             <input
  //               type="text"
  //               name="name"
  //               value={formData.name}
  //               onChange={handleInputChange}
  //               className="w-full p-2 rounded-lg border"
  //               required
  //             />
  //           </div>
  //           <div className="col-span-2">
  //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //               Company Name
  //             </label>
  //             <input
  //               type="text"
  //               name="company"
  //               value={formData.company}
  //               onChange={handleInputChange}
  //               className="w-full p-2 rounded-lg border"
  //               required
  //             />
  //           </div>
  //           <div className="col-span-2">
  //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //               Email
  //             </label>
  //             <input
  //               type="email"
  //               name="email"
  //               value={formData.email}
  //               onChange={handleInputChange}
  //               className="w-full p-2 rounded-lg border"
  //               required
  //             />
  //           </div>
  //           <div className="col-span-2">
  //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //               Phone
  //             </label>
  //             <input
  //               type="text"
  //               name="phone"
  //               value={formData.phone}
  //               onChange={handleInputChange}
  //               className="w-full p-2 rounded-lg border"
  //               required
  //             />
  //           </div>
  //           <div className="col-span-2">
  //             <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
  //               message
  //             </label>
  //             <textarea
  //               name="message"
  //               rows={5}
  //               value={formData.message}
  //               onChange={handleInputChange}
  //               className="w-full p-2 rounded-lg border"
  //             />
  //           </div>
  //         </div>
  //         <button
  //           type="submit"
  //           className="w-full text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-lg mt-2"
  //           disabled={isSubmitting}
  //         >
  //           {isSubmitting ? "Submitting..." : "Submit"}
  //         </button>
  //       </form>
  //     </div>
  //   </div>
  // );

  return (
    <div
      id={id}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 w-full max-w-md h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center border-b p-4 bg-gray-100 dark:bg-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {isEnquiry ? "Enquiry Form" : "Fill the form to download file"}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:bg-gray-200 rounded-lg p-2 dark:hover:bg-gray-600"
          >
            <span className="sr-only">Close</span>
            &#x2715;
          </button>
        </div>

        {/* Form (Scrollable Content) */}
        <div className="overflow-y-auto p-4 flex-1">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Company Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 rounded-lg border focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-700 hover:bg-blue-800 p-2 rounded-lg mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
