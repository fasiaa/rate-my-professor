"use client";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Review from "@/components/Review";
import sampleReviews from "../../reviews.json";
import { MdAddBox } from "react-icons/md";
import ReviewModal from "@/components/ReviewModal";
import { collection, getDocs, query } from "firebase/firestore";
import { firestore } from "@/firebase";

function Page() {
  useEffect(() => {
    updateReviews();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [reviews, setReviews] = useState([]);

  const updateReviews = async () => {
    const snapshot = await query(collection(firestore, "reviews"));
    const docs = await getDocs(snapshot);

    const reviewList = [];
    docs.forEach((doc) => {
      const data = doc.data;
      reviewList.push({
        ...doc.data(),
      });
    });
    setReviews(reviewList);
    console.log("list: ", reviewList);
  };

  return (
    <div>
      <Header></Header>
      <div className="w-9/12 mx-auto">
        <MdAddBox
          className="ml-auto w-8 h-8 mt-3 hover:fill-slate-500 cursor-pointer"
          onClick={() => {
            setOpenModal(true);
            console.log("clicked");
          }}
        />
        {openModal && <ReviewModal closeModal={setOpenModal} />}
        {reviews.map((review, index) => {
          return (
            <Review
              key={index}
              name={review.professorName}
              date={review.date}
              review={review.reviewContent}
            />
          );
        })}
        {sampleReviews.map((review) => {
          return (
            <Review
              key={review.professor.lastName}
              name={`${review.professor.firstName} ${review.professor.lastName}`}
              date={review.date}
              review={review.review}
            ></Review>
          );
        })}
      </div>
      <footer className="text-center py-4">
        <p>
          © 2024{" "}
          <a href="/" className="hover:underline">
            profAI
          </a>
          . All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Page;
