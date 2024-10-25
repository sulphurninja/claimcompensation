// components/LegalConsultation.jsx
export default function LegalConsultation() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h2 className="text-3xl font-bold">Claim My Medical Compensation Consultation</h2>
                    <p className="text-lg mt-4">
                        Defending victims of defective products, offering free assistance - contact us today.
                        <span className="text-sm text-gray-600 block">
                            We can help if you lost a loved one or sustained injuries due to a defective medical device, prescription drug, or dangerous consumer product. With years of experience, we protect the legal rights of individuals whose physical and mental health have been harmed by others. When you hire us, our team will qualify your case, provide legal guidance at every step, and keep you updated on your litigation. Take advantage of our free assistance to discuss your case with a member of our team.
                        </span>
                    </p>
                    <ul className="mt-4 space-y-2 text-green-800 font-bold">
                        <li>✔️ We ensure that our call center remains open round-the-clock.</li>
                        <li>✔️ We streamline our intake process to make it effortless for you.</li>
                        <li>✔️ A knowledgeable and dedicated professional will provide personalized attention.</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <img src="/girl2.avif" alt="Legal Consultation" className="rounded-lg shadow-lg" />
                </div>
            </div>
        </section>
    );
}
