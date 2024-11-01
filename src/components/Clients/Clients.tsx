import Image from "next/image";

export default function Clients() {
  return (
    <section className="flex flex-col gap-4 p-4 bg-blue-100 items-center min-[40vh] ">
      <h6 className="text-3xl font-bold tracking-tighter sm:text-5xl font-verdana">
        Our Partners
      </h6>
      <div className="flex flex-row gap-4">
        {[
          {
            id: "1",
            imgUrl: "/images/partner-1.png",
          },
          {
            id: "2",
            imgUrl: "/images/partner-2.png",
          },
          {
            id: "3",
            imgUrl: "/images/partner-3.png",
          },
          {
            id: "4",
            imgUrl: "/images/partner-4.png",
          },
          {
            id: "5",
            imgUrl: "/images/partner-5.png",
          },
          {
            id: "6",
            imgUrl: "/images/partner-6.png",
          },
        ].map((client, i) => (
          <Image
            key={i}
            src={client.imgUrl || "/images/default.png"}
            alt={`Client ${client.id}`}
            width={150}
            height={100}
            className="object-contain w-36 h-24"
          />
        ))}
      </div>
    </section>
  );
}
