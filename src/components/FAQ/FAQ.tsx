"use client";
import { FAQProps } from "@/types/home";
export default function FAQ({ data }: { data: FAQProps[] }) {
  return (
    <section className="p-4 m-4">
      <h2 className="text-center text-black text-3xl font-bold tracking-tighter sm:text-5xl mt-5 mb-10 font-verdana">
        Frequently Asked Questions
      </h2>
      <div className="flow-root md:pl-12">
        <div className="-my-8 divide-y divide-gray-100">
          {data &&
            data.map((faq, index) => (
              <details
                key={index}
                className="group py-8 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between text-gray-900">
                  <h2 className="text-lg font-medium">{faq.q}</h2>

                  <span className="relative size-5 shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </summary>

                <p className="mt-4 leading-relaxed text-gray-700">{faq.ans}</p>
              </details>
            ))}
        </div>
      </div>
    </section>
  );
}
