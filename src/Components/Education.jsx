import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    degree: "B.Sc. in Computer Science and Engineering (CSE)",
    school: "Daffodil International University, Dhaka",
    duration: "Expected Graduation: 2026",
    cgpa: "3.79 / 4.0",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    school: "Dhaka College, Dhaka",
    duration: "Year of Completion: 2022",
    cgpa: "5.00 / 5.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    school: "Monipur High School, Dhaka",
    duration: "Year of Completion: 2020",
    cgpa: "5.00 / 5.00",
  },
];

const Education = () => {
  return (
    <section className="relative px-6 py-12 max-w-4xl mx-auto" id="education">
      <h2 className="text-4xl font-bold text-center pt-8 pb-20">Education</h2>

      <div className="relative ml-4">
        <div className="absolute left-5 top-0 h-full w-2 bg-[#F4A24C] rounded"></div>

        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="mb-12 ml-12 relative flex items-start"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <motion.div
              className="absolute -left-7 -top-5 w-10 h-10 bg-[#F4A24C] rounded-full flex items-center justify-center shadow-lg"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaGraduationCap className="text-base-200 w-5 h-5" />
            </motion.div>

            <div className="bg-base-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-all w-full">
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-400">{edu.school}</p>
              <p className="text-gray-500 text-xs mt-1">CGPA: {edu.cgpa}</p>
              <p className="text-gray-500 text-xs mt-1">{edu.duration}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
