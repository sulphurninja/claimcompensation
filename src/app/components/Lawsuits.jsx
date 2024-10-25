import Link from 'next/link';

export default function Lawsuits() {
  const lawsuits = [
    { name: 'Camp Lejeune Water Contamination Lawsuit', link: '/camp-lejeune-water-contamination' },
    { name: 'Talcum Powder Lawsuit', link: '/talcum-powder-lawsuit' },
    { name: 'Firefighting Foam (FFF) Lawsuit', link: '/firefighting-foam-fff-lawsuit' },
    { name: 'Paraquat Lawsuit', link: '/paraquat-lawsuit' },
    { name: 'NEC Baby Formula Lawsuit', link: '/nec-baby-formula-lawsuit' },
    { name: 'Roundup Lawsuit', link: '/roundup-lawsuit' },
    { name: 'Zantac Lawsuit', link: '/zantac-lawsuit' },
    { name: 'CPAP Lawsuit', link: '/cpap-lawsuit' },
    { name: 'Mesothelioma Lawsuit', link: '/mesothelioma-lawsuit' },
    { name: 'Rideshare Lawsuit', link: '/rideshare-lawsuit' },
    { name: 'PFAS Lawsuit', link: '/pfas-lawsuit' },
    { name: 'Hair Relaxer', link: '/hair-relaxer' },
  ];

  return (
    <section className="bg-gray-100 border py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
        {lawsuits.map((lawsuit, index) => (
          <Link key={index} href={lawsuit.link}>
            <div className="flex justify-between items-center hover:bg-black hover:text-white cursor-pointer bg-green-700 border p-4 rounded-md">
              <span>{lawsuit.name}</span>
              <span className="text-xl">➔</span>
            </div>
          </Link>
        ))}
        
      </div>
      <div className="flex justify-center items-center bg-[#] p-4 rounded-md">
          <Link href='/get-help'>
            <button className="text-white bg-green-800 py-2 px-6 rounded-lg">Get Help Now</button>
          </Link>
        </div>
    </section>
  );
}
