import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiResearchgate } from "react-icons/si";
import { FaFilePdf, FaDownload, FaFlask, FaCalendarAlt, FaExternalLinkAlt, FaFileAlt } from "react-icons/fa";

const publicationData = {
  title: "Sentiment Analysis of YouTube Comments: A Comprehensive Study of Machine Learning Models",
  type: "NLP Research",
  date: "2025",
  paperLink: "https://www.researchgate.net/publication/393884340_Sentiment_Analysis_of_YouTube_Comments_A_Comprehensive_Study_of_Machine_Learning_Models",
  pptLink: "https://www.researchgate.net/publication/394087566_Conference_Presentation",
  researchGateProfile: "https://www.researchgate.net/profile/Syed-Ahmed-301?ev=hdr_xprf",
  abstract: `YouTube is one of the most popular video sharing platforms for global cult. Through this, users often share their thoughts, feedback, and opinions in the comment section. However, popular videos and channels receive a massive number of comments, making it difficult to analyze user sentiment quickly and effectively. For this purpose, we proposed a machine learning approach for sentiment analysis of YouTube video comments and replies, aiming to classify viewer opinions as positive, negative, and neutral based on content. A labeled dataset of 18408 English comments was used for training and testing, which was preprocessed by removing unnecessary words, fixing the text, and simplifying the words using stopword removal, lemmatization, and addressing class imbalance with SMOTE. The performance of seven machine learning algorithms-Logistic Regression, Random Forest, Decision Tree, Naïve Bayes, Support Vector Machine (SVM), XGBoost, and LightGBM-was evaluated. Among these models, Random Forest achieved the best results with an accuracy of 88.31%, with strong scores in precision, recall, and f1-score across all positive, negative, and neutral sentiment categories. While other models, like SVM, Logistic Regression, and Decision Tree, achieved 82.03%, 81.15%, and 80.46%, respectively. This study offers valuable insights for content creators to improve their videos and better engage with their audience by analyzing users' sentiment.`
};

const Publications = () => {
  const [readMore, setReadMore] = useState(false);
  const maxLength = 300;

  const getAbstractText = () => {
    if (readMore) return publicationData.abstract;
    return publicationData.abstract.length > maxLength
      ? publicationData.abstract.slice(0, maxLength) + "..."
      : publicationData.abstract;
  };

  return (
    <section className="relative py-20 px-6 max-w-7xl mx-auto" id="publications">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#F4A24C]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-[#F4A24C]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-[#F4A24C] via-orange-400 to-[#F4A24C] bg-clip-text text-transparent">
              Research & Publications
            </h2>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Exploring the intersection of machine learning and natural language processing
          </p>
        </div>

        {/* Publication Card */}
        <div data-aos="fade-up" data-aos-delay="100">
          <div className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 md:p-10 shadow-xl transition-all duration-500 hover:scale-[1.01] hover:border-[#F4A24C]/30">
            {/* Header Section */}
            <div className="mb-6">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-[#F4A24C] transition-colors duration-300">
                    {publicationData.title}
                  </h3>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F4A24C]/20 border border-[#F4A24C]/30">
                      <FaFlask className="text-[#F4A24C]" size={14} />
                      <span className="text-sm text-[#F4A24C] font-semibold">{publicationData.type}</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                      <FaCalendarAlt className="text-gray-400" size={14} />
                      <span className="text-sm text-gray-300">{publicationData.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Abstract Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <FaFileAlt className="text-[#F4A24C]" size={20} />
                <h4 className="text-lg font-semibold text-white">Abstract</h4>
              </div>
              <div className="p-6 rounded-xl bg-white/5 border border-white/5 backdrop-blur-sm">
                <p className="text-gray-300 text-justify leading-relaxed text-sm md:text-base">
                  {getAbstractText()}
                  {publicationData.abstract.length > maxLength && (
                    <button
                      onClick={() => setReadMore(!readMore)}
                      className="ml-2 text-[#F4A24C] hover:text-orange-400 font-semibold underline transition-colors duration-300"
                    >
                      {readMore ? "Show Less" : "Read More"}
                    </button>
                  )}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 ">
              <motion.a
                href={publicationData.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group/btn flex border-none items-center gap-2 btn rounded-xl bg-linear-to-r from-[#F4A24C] to-orange-400 text-black font-semibold hover:from-orange-400 hover:to-[#F4A24C] transition-all duration-300"
              >
                <FaFilePdf size={18} />
                <span>View Full Paper</span>
                {/* <FaExternalLinkAlt size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" /> */}
              </motion.a>

              <motion.a
                href="/Sentiment Analysis of YouTube Comments A Comprehensive Study of Machine Learning Models.pptx"
                download
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="group/btn flex items-center gap-2 btn rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 font-semibold"
              >
                <FaDownload size={18} />
                <span>Download PPT</span>
              </motion.a>

              {/* ResearchGate Button with separate group for tooltip */}
              <div className="relative group/researchgate">
                <a
                  href={publicationData.researchGateProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center border rounded-xl border-[#F4A24C]"
                  // className="w-10 h-10 flex items-center justify-center rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 text-[#F4A24C] hover:bg-[#F4A24C]/10 hover:border-[#F4A24C]/30 transition-all duration-300 hover:scale-110"
                  aria-label="Explore My Research"
                >
                  <SiResearchgate size={20} className="group-hover/researchgate:scale-110 transition-transform duration-100" />
                </a>
                <span className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/researchgate:opacity-100 transition-opacity duration-300 text-xs whitespace-nowrap bg-black/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-white pointer-events-none z-30">
                  ResearchGate Profile
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90"></div>
                </span>
              </div>
            </div>

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/5 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;