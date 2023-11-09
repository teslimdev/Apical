import React,{useState} from 'react'
import { Header2,Footer2 } from '../../components';
import { BiMinus, BiPlus } from "react-icons/bi";
const Faq = () => {
     const [faqs, setFaqs] = useState([
    {
      id: 1,
      question: "Construction Administration",
      answer:
        '  Construction administration services are a crucial component of any construction project, and they typically involve overseeing the construction process  to ensure that the project is completed according to   the client"s specifications, on time, and within   budget. Construction administration services can vary   depending on the specific needs of the client',
      isOpen: true,
    },
    {
      id: 2,
      question: "Post-Occupancy Evaluation",
      answer:
        " Occupancy services refer to the various services provided by a company to help its clients effectively occupy their new spaces, whether its a new building, a renovated space, or a leased property. These services can range from site selection and space planning to move management and ongoing facilities managementOverall, occupancy services are designed to provide comprehensive support to clients during the entire process of occupying their new spaces, from site selection to ongoing facilities management. By working with an experienced occupancy services provider, clients can ensure that their new space meets their needs, is functional, and contributes to their overall success.",
      isOpen: false,
    },
    {
      id: 3,
      question: "Project Management",
      answer:
        "Project management is a critical function for any company, particularly those involved in complex projects or construction work. Project management involves planning, organizing, and executing projects efficiently and effectively, from conception to completionOverall, project management is an essential service for companies involved in complex projects, ensuring that projects are completed on time, within budget, and to the clients satisfaction. By working with an experienced project management company, clients can focus on their core business activities while having confidence that their projects are being managed effectively.",
      isOpen: false,
    },
    {
      id: 4,
      question: "Project Management",
      answer:
        "Project management is a critical function for any company, particularly those involved in complex projects or construction work. Project management involves planning, organizing, and executing projects efficiently and effectively, from conception to completionOverall, project management is an essential service for companies involved in complex projects, ensuring that projects are completed on time, within budget, and to the clients satisfaction. By working with an experienced project management company, clients can focus on their core business activities while having confidence that their projects are being managed effectively.",
      isOpen: false,
    },
    {
      id: 5,
      question: "Project Management",
      answer:
        "Project management is a critical function for any company, particularly those involved in complex projects or construction work. Project management involves planning, organizing, and executing projects efficiently and effectively, from conception to completionOverall, project management is an essential service for companies involved in complex projects, ensuring that projects are completed on time, within budget, and to the clients satisfaction. By working with an experienced project management company, clients can focus on their core business activities while having confidence that their projects are being managed effectively.",
      isOpen: false,
    },
  ]);
   const toggleFaq = (id) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false }
      )
    );
  };
  return (
    <div>
    <section>
        <Header2/>
    </section>
      <section className=' bg-[#f2f2f7]'>
      
        <div className=' py-16 lg:py-32  px-6 lg:px-0  md:max-w-[600px] lg:max-w-[800px] m-auto '>
        <div className=' text-center py-8'>
        <h2 className=' text-xl'>FREQUENTLY ASKED QUESTIONS</h2>
      </div>
         <ul>
                {faqs.map((faq) => (
                  <li key={faq.id} className="pt-3 border-b border-black pb-3">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <h1 className="text-xl font-[350]">{faq.question}</h1>
                      {faq.isOpen ? (
                        <BiMinus className="cursor-pointer text-2xl" />
                      ) : (
                        <BiPlus className="cursor-pointer text-2xl" />
                      )}
                    </div>
                    {faq.isOpen && (
                      <div className="pt-8 text-[1rem] font-[350]">
                        {faq.answer}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
      </div>
      </section>
      <section>
        <Footer2/>
      </section>
    </div>
  )
}

export default Faq
