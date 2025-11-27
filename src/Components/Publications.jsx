import React, { useState } from "react";
import { SiResearchgate } from "react-icons/si";

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
    <section className="py-30 bg-base-200" id="publications">
      <div data-aos="fade-right" className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center pb-15">Research</h2>
        <div className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body">
            <h3 className="card-title text-2xl">{publicationData.title}</h3>

            <p className="mt-3 text-gray-400 text-justify"><strong>Abstract: </strong>
              {getAbstractText()}
              {publicationData.abstract.length > maxLength && (
                <span
                  onClick={() => setReadMore(!readMore)}
                  className="text-orange-300 underline cursor-pointer ml-1"
                >
                  {readMore ? "Show Less" : "Read More"}
                </span>
              )}
            </p>

            <p className="mt-2 text-gray-500 italic">{publicationData.type} | {publicationData.date}</p>

            <div className="card-actions justify-start mt-6 gap-3 md:gap-5">
              <a
                href={publicationData.paperLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-soft"
              >
                View Full Paper
              </a>
              <a
                href="/Sentiment Analysis of YouTube Comments A Comprehensive Study of Machine Learning Models.pptx"
                download
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dash"
              >
                Download PPT
              </a>
              <a
                href={publicationData.researchGateProfile}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 tooltip"
                data-tip="Explore My Research"
              >
                <SiResearchgate className="text-orange-300 text-lg hover:drop-shadow-[0_0_30px_rgba(255,215,0,0.6)]" size={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
