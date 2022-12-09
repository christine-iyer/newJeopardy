import { useState } from "react";
export default function Category({ jeopardyQuest }) {

     const [answerCategory, setAnswerCategory] = useState(false)

     return (
          <div>
               <button
               onClick={() => {
                    setAnswerCategory(!answerCategory)
               }}
               >
               {answerCategory ? "Hide Category" : "Reveal Category"}
               </button>
               {jeopardyQuest && jeopardyQuest.question && answerCategory ? (
                    <span>category {jeopardyQuest.question}</span>
                    
               ) : (
                    ""
               )}
                         </div>
               )
          }





    