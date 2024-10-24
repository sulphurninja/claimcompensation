// components/Services.jsx
export default function Services() {
    const services = [
      {
        title: 'MASS TORT SERVICES',
        description:
          'Mass tort is civil litigation that consists of a single accidental or intentional action that causes many people to sustain injuries. The biggest benefit of joining a mass tort claim is that it increases your chances of recovering damages from entities such as product and pharmaceutical manufacturers. Mass tort actions are different from class actions because each plaintiff’s case will be reviewed individually.',
        bgColor: 'bg-[#8e6a17] text-white',
      },
     
    ];
  
    return (
      <section className="py-16  w-full bg-gray-100">
        <div className=" px-4 W-F grid grid-cols-1 md:grid-cols-1 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`p-8 ${service.bgColor} hover:bg-[#8e6a17] w-full hover:text-white cursor-pointer shadow-lg rounded-lg`}>
              <h3 className="text-2xl textce font-bold">{service.title}</h3>
              <p className="mt-4 text-md w">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  