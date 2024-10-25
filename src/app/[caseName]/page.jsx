import Link from "next/link";
import CaseBanner from "../components/CaseBanner";
import FAQSection from "../components/FAQSection";
import Header from "../components/Header";
import Footer from "../components/Footer";


const casesData = {
  'camp-lejeune-water-contamination': {
    title: 'Camp Lejeune Water Contamination Lawsuit',
    description: 'The contamination of Camp Lejeune water supply stands as a highly significant environmental catastrophe in American history.Between the 1950s and 1980s, two wells containing hazardous industrial chemicals polluted the water source used by more than 800,000 Marines, their families, and civilian employees stationed at the military base.Numerous Marines and their families have experienced a multitude of severe health consequences, including but not limited to bladder and kidney cancer, female infertility, leukemia, and other debilitating conditions.President Biden took action on August 10 by signing the Honoring our PACT Act of 2022. This act provides an opportunity for veterans and other affected individuals to pursue justice and receive compensation for the harm caused by the contaminated water at Camp Lejeune in North Carolina.',
    img1: '/factory.jpg',
    img2: '/water-pollution.webp',
    faq: [
      { question: 'Who is eligible to file a Camp Lejeune Water lawsuit?', answer: 'Under the law, anyone who “resided, worked, or was otherwise exposed” to Camp Lejeune drinking water for 30 days or more between August 1, 1953, and December 31, 1987, may be eligible to file a damages claim. This group includes: Military veterans who served at Camp Lejeune during the above period' },
      { question: 'Can family members sue on behalf of deceased loved ones?', answer: 'Yes. Under the Camp Lejeune Justice Act, a relative or legal representative can file a claim on behalf of a person, living or deceased, who was exposed to the contaminated water during the specified period. These representatives may include the exposed individual’s parent, child, spouse, or sibling.' },
      // Add more FAQs
    ],
  },
  'firefighting-foam-fff-lawsuit': {
    title: 'AFFF Firefighting Foam Lawsuit',
    description: 'If you developed cancer due to exposure to the hazardous chemicals in firefighting foam, it is important to seek immediate assistance to understand your legal options. You might have the right to receive financial compensation from the manufacturer for the harm you have endured. We can assess your situation and connect you with a lawyer who can represent you. It is crucial to pursue justice for your distressing diagnosis and the resulting financial burdens.We possess the expertise and resources to link you with a skilled and dedicated attorney who can handle the legal aspects of your case while you focus on your treatment. You wont have to face this traumatic period alone; a caring legal team will be by your side, offering the necessary support and guidance.Firefighting foam has been effective in combating fires, but unfortunately, it contains harmful substances that have been linked to an increased risk of certain cancers, such as pancreatic, kidney, and testicular cancer. The manufacturing companies were aware of these dangers but neglected to inform users about the potential adverse effects. You have the opportunity to file a lawsuit against them and seek rightful and comprehensive compensation. ',
    img1: '/foam.jpg',
    img2: '/fire.jpg',
    faq: [
      { question: 'What Is Firefighting Foam?', answer: 'AFFF, also known as aqueous film-forming foam, is a type of foam primarily utilized by firefighters to suppress fires. It was introduced in the 1960s and has gained significant popularity in industries dealing with highly combustible substances. This foam operates by forming a layer of aqueous film that effectively covers and puts out fires caused by petroleum and jet fuel.' },
      // Add more FAQs
    ],
  },
  'nec-baby-formula-lawsuit': {
    title: 'Nec Baby Formula Lawsuit',
    description: 'Many parents turn to baby formula as a way to provide extra nourishment to premature and low-weight babies. Some parents fully rely on formula if the mother has had trouble nursing and is not able to provide their child with adequate breast milk. When parents turn to baby formula, they deserve access to formula that is guaranteed to be safe for their newborns.Unfortunately, some formulas have recently been shown to be unsafe for consumption.High calorie, bovine milk- based baby formula products sold by Similac and Enfamil have been linked to necrotizing enterocolitis, or NEC, a deadly illness that can cause inflammation and necrosis(tissue death) in the intestines.Similac is manufactured by Abbott Laboratories, while Mead Johnson & Company manufactures Enfamil.Neither manufacturer disclosed the possible risks associated with consuming their products on the product labels.The baby formula NEC lawsuits allege that newborns who consumed Enfamil and Similac baby formula products later developed NEC and other gastrointestinal conditions, including gut rot and dead bowel.The lawsuits claim that the manufacturers of Similac and Enfamil failed to warn parents of the dangers their cow’s milk - based products posed to newborns.If you purchased Similac or Enfamil baby formula products for your newborn and your newborn later developed NEC or other gastrointestinal issues, then you could qualify for a baby formula NEC lawsuit and be entitled to recover compensation for financial and non - financial damages that resulted from your infant’s condition.',
    img1: '/mother.webp',
    img2: '/mother.jpg',
    faq: [
      { question: 'What is NEC?', answer: 'Necrotizing enterocolitis (NEC) is a gastrointestinal condition primarily observed in premature newborns. It involves inflammation in the intestinal tissue, leading to tissue death. The inflammation associated with NEC can also result in the formation of perforations or holes in the intestinal tract, which allows bacteria to leak into the abdominal cavity. Among premature newborns, NEC is the most prevalent type of gastrointestinal condition, affecting approximately 1 in every 2,000-4,000 infants.NEC primarily affects infants who are born with a weight of less than 4.5 pounds. These infants constitute the majority of NEC cases. The onset of NEC typically occurs rapidly, usually within a few weeks after birth. Newborns are particularly susceptible to developing NEC due to the underdeveloped state of their intestines and bowels at the early stages of life.' },

      // Add more FAQs
    ],
  },
  'zantac-lawsuit': {
    title: 'Zantac Lawsuit',
    description: 'If you have taken Zantac or ranitidine and subsequently developed cancer, you may have the right to seek compensation from the manufacturer of the medication. Engaging the services of an experienced Zantac attorney can help you take appropriate legal action and pursue the justice you deserve. Holding the drug company accountable for the harm they have caused is your entitlement. The financial burdens resulting from your diagnosis and medical care should not be shouldered by you alone.Zantac(ranitidine) is a commonly used medication for alleviating symptoms associated with various throat and stomach conditions, including ulcers, heartburn, and gastroesophageal reflux disease(GERD)Regrettably, research has revealed a concerning connection between this widely - used drug and different forms of cancer.Numerous studies have demonstrated that many batches of ranitidine contained a carcinogen called NDMA(N- Nitrosodimethylamine).Lawsuits argue that the manufacturer was aware of the cancer risk associated with the drug but deliberately chose not to inform the public.Pharmaceutical companies are responsible for providing consumers with safe medications that are free from defects.If there are known risks, they are obligated to include adequate warning labels to notify the public about the potential harm associated with using the drug.Claims have been made against the various manufacturers of Zantac and ranitidine, asserting that they were aware of the dangers posed by NDMA and the potential risk of developing cancer but failed to provide sufficient warnings when producing these drugs for consumption.When drug manufacturers neglect their duty to protect consumers, they should be held financially accountable for the harm they have caused. Note: It is important to consult with a legal professional specializing in Zantac or ranitidine lawsuits to discuss your specific situation and determine the best course of action.',
    img1: '/zantac.jpg',
    img2: '/sneeze.webp',
    faq: [
      {
        question: 'What is Zantac?', answer: 'In the unfortunate event that you have lost a loved one to cancer and believe that Zantac played a role, you may be eligible for compensation through a wrongful death claim. Your lawyer can carefully assess the details of your case to determine the available options for you to pursue.Common Side Effects of ZantacVitamin B- 12 deficiencyNervous system disordersIncreased risk of pneumoniaHair lossRapid or irregular heartbeatLow blood platelet levelsSkin rashesLiver failureJaundiceHepatitisIn many cases, the user could develop cancer.The most common cancers reported by Zantac users are:Pancreatic cancer Brain cancer Bladder cancer. If you’re suffering from any of these cancers or another medical condition possibly linked to NDMA in Zantac, you should speak to a lawyer immediately.If you lost a loved one to cancer and believe Zantac is to blame, you might be entitled to compensation from a wrongful death claim.Your lawyer can review the facts of your case to determine your options.'
      },
    ],
  },
  'talcum-powder-lawsuit': {
    title: 'Talcum Powder Lawsuit',
    description: 'Talcum powder, long used for personal hygiene, has been linked to ovarian cancer. Studies suggest that long-term use, especially in the genital area, can increase the risk of developing ovarian cancer. Individuals who have been affected may seek compensation for health damages.',
    img1: '/talcum.jpg',
    img2: '/talcum2.jpg',
    faq: [
      { question: 'What are the risks of using talcum powder?', answer: 'Talcum powder, especially when used in the genital area, has been linked to an increased risk of ovarian cancer.' },
    ],
  },
  'paraquat-lawsuit': {
    title: 'Paraquat Lawsuit',
    description: 'Paraquat, a herbicide, has been linked to Parkinson’s disease. Farmers and agricultural workers who have been exposed to this toxic chemical may be entitled to compensation for health damages. Paraquat is highly toxic, and its use is restricted in many countries due to its severe health risks.',
    img1: '/paraquat.jpeg',
    img2: '/paraquat.jpg',
    faq: [
      { question: 'What health risks are linked to Paraquat?', answer: 'Paraquat exposure has been strongly associated with an increased risk of Parkinson’s disease.' },
    ],
  },
  'roundup-lawsuit': {
    title: 'Roundup Lawsuit',
    description: 'Roundup, a popular herbicide, has been linked to non-Hodgkin’s lymphoma due to its active ingredient glyphosate. Individuals exposed to Roundup who developed cancer may pursue legal claims against the manufacturer Monsanto for health damages.',
    img1: '/roundup.jpg',
    img2: '/roundup.jpg',
    faq: [
      { question: 'What is the health risk associated with Roundup?', answer: 'Prolonged exposure to Roundup has been linked to non-Hodgkin’s lymphoma.' },
    ],
  },
  'cpap-lawsuit': {
    title: 'CPAP Lawsuit',
    description: 'Millions of CPAP machines have been recalled after reports showed that users could inhale or ingest toxic foam particles, which could cause respiratory issues or even cancer. Individuals using the recalled devices may seek compensation for health damages.',
    img1: '/cpap.jpg',
    img2: '/cpap2.jpg',
    faq: [
      { question: 'What is the issue with Philips CPAP devices?', answer: 'The foam used in these devices may degrade, releasing toxic particles that cause respiratory problems and other serious health issues.' },
    ],
  },
  'mesothelioma-lawsuit': {
    title: 'Mesothelioma Lawsuit',
    description: 'Mesothelioma is a form of cancer caused by asbestos exposure. Workers in industries like construction, shipbuilding, and manufacturing may have been exposed to asbestos, leading to mesothelioma. Affected individuals and their families can seek compensation from responsible companies.',
    img1: '/meso1.jpg',
    img2: '/meso.jpg',
    faq: [
      { question: 'What causes mesothelioma?', answer: 'Mesothelioma is caused by asbestos exposure, particularly in industries like construction and manufacturing.' },
    ],
  },
  'rideshare-lawsuit': {
    title: 'Rideshare Lawsuit',
    description: 'Rideshare accidents involving passengers, drivers, or pedestrians can lead to legal claims against rideshare companies or their insurance providers. Individuals injured in such accidents can seek compensation for medical expenses, lost wages, and other damages.',
    img1: '/rideshare1.jpg',
    img2: '/rideshare.jpg',
    faq: [
      { question: 'Who can file a rideshare lawsuit?', answer: 'Anyone injured in a rideshare-related accident, including passengers and pedestrians, may file a lawsuit.' },
    ],
  },
  'pfas-lawsuit': {
    title: 'PFAS Lawsuit',
    description: 'PFAS are a group of toxic chemicals found in firefighting foam and various consumer products. They have been linked to cancer and other serious health issues. Individuals exposed to PFAS may pursue compensation through legal action for damages to their health.',
    img1: '/pfas.jpg',
    img2: '/pfas2.jpg',
    faq: [
      { question: 'What are PFAS?', answer: 'PFAS are toxic chemicals linked to cancer and other health issues, often found in firefighting foam and various consumer products.' },
    ],
  },
  'hair-relaxer': {
    title: 'Hair Relaxer',
    description: 'Hair relaxer companies including Dark & Lovely, Just of Me, Optimum, Motions, Olive Oil Girls, and others brands are being sued as a result of failing to warn users of the health risks associated with hair relaxers.1 Hair relaxers are known to contain cancer-causing chemicals including Phthalates, Formaldehyde, Parabens, and DEHP.3 If you or a loved one used hair relaxers or straighteners and were later diagnosed with uterine cancer or breast cancer, you may be entitled to compensation.',
    img1: '/hair.jpg',
    img2: '/hair.webp',
    faq: [
      { question: 'What is Hair Relaxer?', answer: 'A relaxer is a type of lotion or cream generally used by people with tight curls or very curly hair which makes hair easier to straighten by chemically "relaxing" the natural curls.' },
    ],
  },

};


export default function CasePage({ params }) {
  const caseName = params.caseName;
  const caseData = casesData[caseName];

  if (!caseData) {
    return <div>Case not found</div>;
  }

  return (
    <div className="">
      <Header />
      <CaseBanner title={caseData.title} img1={caseData.img1} img2={caseData.img2} />
      <section className="p-8 md:flex gap-2">
        <img src={caseData.img2} alt={caseData.title} className="w-72 rounded-xl mt-4 ml-6 object-cover h-[300px] " />

        <p className="text-lg mt-12 ml-4">{caseData.description}</p>
      </section>
      <FAQSection faq={caseData.faq} />
      <div className="w-full flex justify-center mb-4">
        <Link href="/get-help">
          <h1 className="bg-[#8e6a17] text-white w-fit text-sm py-2 px-4 rounded">Get Help Now</h1>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
