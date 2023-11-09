import React from "react";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import pic3 from "../../../src/pictures/img3.jpeg";
import { Link } from "react-router-dom";
import { BiMinus, BiPlus } from "react-icons/bi";
import pic12 from "../../../src/pictures/ridwan.png";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { BsPinterest } from "react-icons/bs";
import { Footer , Header} from "../../components";
const Services = () => {
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
    // Add more FAQ items as needed
  ]);

  const [faqq, setFaqqs] = useState([
    {
      id: 1,
      question: "Permitting and Approvals",
      answer:
        "  Permitting and approvals are a critical aspect of the architectural design process, as they ensure that the design meets all applicable codes, regulations, and standardsOverall, the permitting and approvals process is a complex and time-consuming aspect of architectural design. Architectural companies play a critical role in ensuring that their clients projects comply with all applicable regulations and requirements and obtain the necessary permits and approvals to proceed with construction. By working with an experienced architectural company, clients can ensure that their projects proceed smoothly and efficiently through the permitting and approvals process.",
      isOpen: true,
    },
    {
      id: 2,
      question: "Construction Documents",
      answer:
        " Construction documents are a critical aspect of the architectural design process, as they provide detailed information about the design and specifications required for construction. Architectural companies provide a range of services related to construction documentsOverall, construction documents are an essential aspect of the architectural design process, as they provide detailed information required for construction and serve as a communication tool between the design team and the construction team. By working with an experienced architectural company, clients can ensure that their construction documents are accurate, detailed, and meet all applicable regulations and requirements. ",
      isOpen: false,
    },
    {
      id: 3,
      question: "Project Management",
      answer:
        "Bidding and negotiation are important services provided by architectural companies to help clients obtain the best value for their construction projects. These services involve soliciting bids from potential contractors and negotiating contracts to ensure that the project is completed within budget and on timeOverall, bidding and negotiation services provided by architectural companies are essential to ensure that clients obtain the best value for their construction projects.   By working with an experienced architectural company, clients can ensure that they receive competitive bids from qualified contractors and negotiate contracts that meet their needs and budget requirements.",
      isOpen: false,
    },
    // Add more FAQ items as needed
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

  const togglFaq = (id) => {
    setFaqqs((prevFaqs) =>
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
      <Header/>
    </section>
      <section className=" one">
        <div
          style={{ backgroundImage: `url(${pic3})` }}
          className=" h-[300px] md:min-h-[500px] bg-cover bg-center"
        >
          <div className=" bg-black  absolute inset-0  h-[300px]   md:h-[500px]     opacity-70"></div>
        </div>
      </section>

      <section className=" two bg-[#f2f2f2]">
        <div className="  max-w-[1200px] lg:m-auto px-6 sl:px-0 py-10">
          <div className="   ">
            <div className=" max-w-[800px]  ">
              <h1 className=" text-3xl md:text-6xl lg:text-[5rem] sl:text-[7rem] sl:leading-[7rem] font-bold border-b pb-4 md:pb-12 sl:pb-8">
                Our Services
              </h1>
            </div>

            <div className=" ">
              <div className=" pt-5 lg:pt-10  ">
                <ul className=" grid  md:grid-cols-2  lg:grid-cols-3 max-w-fit gap-x-32 gap-2 px-6  ">
              <Link to="/Architecture">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className=" text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Architectural Design</p>
                </li>
              </Link>
              <Link to="/Interior">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201] ">Interior Design</p>
                </li>
              </Link>
               <Link to="/Exterior">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Exterior Design</p>
                </li>
              </Link>
              <Link to="/Visualization">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Visualization</p>
                </li>
              </Link>
              <Link to="/Construction">
                <li className=" flex items-center 3xl:text-[2rem] text-[1.1rem] lg:text-[1.3rem] sl:text-[1.5rem] gap-2">
                  <AiOutlinePlus className="text-[#8A6201]"></AiOutlinePlus>{" "}
                  <p className="text-[#8A6201] hover:border-b border-[#8A6201]">Building Construction</p>
                </li>
              </Link>
            </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" three bg-[#f2f2f2]">
        <div className=" max-w-[1200px] m-auto px-6 sl:px-0 pb-10">
          <div className=" pt-8">
            <h2 className=" text-[1.1rem] md:text-xl sl:text-[2rem] border-b pb-2 md:pb-4">
              Collaborative, innovative, and sustainable architectural design
              solutions for a better world.
            </h2>
          </div>

          <div className="   grid lg:grid-cols-2  gap-10 pt-16">
            <div>
              <img
                src={pic3}
                alt=""
                className=" w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]"
              />
            </div>
            <div className="  lg:max-w-[500px]">
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
          </div>

          <div className=" grid lg:grid-cols-2 gap-10 pt-16">
            <div className=" lg:max-w-[500px] order-2 lg:order-1">
              <ul>
                {faqq.map((faq) => (
                  <li key={faq.id} className="pt-3 border-b border-black pb-3">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => togglFaq(faq.id)}
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
            <div className=" order-1 lg:order-2">
              <img
                src={pic3}
                alt=""
                className=" w-full lg:w-[500px] h-[300px] md:h-[400px] lg:h-[600px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" four bg-[#f2f2f2]">
        <div className=" ">
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%]  lg:pt-[2%]  px-6  sl:px-0  ">
            <div className="   md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   ">
              <h2 className=" text-[2rem] md:text-[3rem] lg:leading-[7rem] lg:text-[4.5rem] border-b-2 pb-8 sl:text-[6rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                "Meet the man behind the designs"
              </h2>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-3 lg:py-16">
              "Our team is comprised of experienced architects, designers, and
              project managers who share a common goal of creating exceptional
              spaces.
            </h3>
          </div>
          <div className="  2xl:max-w-[1200px]  m-auto px-6 2xl:px-0 sl:max-w-[1200px]  lg:max-w-[1000px]">
            <div className=" flex  flex-col md:flex-row  gap-6 md:gap-12 lg:gap-16">
              <img
                src={pic12}
                alt=""
                className=" w-full md:w-[350px] lg:w-[400px]  shadow-lg"
              />
              <div className=" sl:max-w-[600px] lg:max-w-[500px] md:max-w-[320px] pt-6 lg:pt-20">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Minima eaque architecto repudiandae sint nostrum ratione
                  placeat beatae necessitatibus ad numquam voluptatem ab, quidem
                  sed quasi cupiditate laudantium reiciendis hic ipsam!
                </p>
                <div className=" flex pt-10 gap-6">
                  <AiFillInstagram className=" text-4xl text-[#222222]" />
                  <AiFillLinkedin className=" text-4xl text-[#222222]" />
                  <BsPinterest className=" text-4xl text-[#222222]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" five bg-[#f2f2f2]">
        <div>
          <div className=" max-w-[950px] lg:max-w-[1200px] 3xl:max-w-[2000px] sl:max-w-[1200px] lg:m-auto pt-[5%] lg:pt-[7%]  px-6  sl:px-0  ">
            <div className=" flex flex-col-reverse md:flex-row  gap-8 md:max-w-[950px]  lg:max-w-[1200px] 3xl:max-w-[1700px]   md:justify-between md:items-start">
              <h2 className=" text-[2rem] md:max-w-[550px] lg:max-w-[800px] sl:max-w-[1000px] md:text-[3rem] lg:leading-[7rem] lg:text-[5rem] sl:text-[5.7rem] font-bold text-[#222222] 3xl:text-[8rem] ">
                Stay Connected
              </h2>
              <div className=" flex   place-self-end">
                <Link
                  to="/Contacts"
                  className=" underline hover:no-underline lg:text-[1.4rem] 3xl:text-[2rem] flex "
                >
                  Contact Us
                  <GoArrowUpRight className=" text-2xl"></GoArrowUpRight>
                </Link>
              </div>
            </div>
            <h3 className=" text-xl lg:text-[2rem] font-[350] py-10 lg:py-16 ">
              "Stay connected with our team and never miss a design update,
              industry news, or special offer. Join our community of design
              enthusiasts.
            </h3>
          </div>
        </div>
      </section>

     <section className=" six">
        <div
          style={{ backgroundImage: `url(${pic3})` }}
          className=" min-h-[300px] md:min-h-[450px] bg-cover bg-center relative"
        >
          <div className=" bg-black  absolute inset-0  h-[300px] md:h-[450px]      opacity-70">
            <div className=" px-6 pt-[10%] lg:pt-[7%] ">
            <div className="  text-center  ">
              <h2 className=" text-white text-4xl md:text-5xl lg:text-7xl">
                Have a project in mind?
              </h2>
              <p className=" text-white py-4 text-2xl font-semibold">
                Do not hesitate to say Hello
              </p>
              <div className=" pt-4">
                <Link to="/Contacts">
                  <button className=" text-white border-2 py-2 lg:py-3 px-10 lg:px-16 rounded-full   text-2xl hover:bg-white hover:text-black">
                    Lets Talk
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Services;
