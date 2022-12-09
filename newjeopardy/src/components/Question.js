export default function Question({ jeopardyQuest, getJeopardyQuest }) {
     return (
          <>
          <button onClick={getJeopardyQuest}>Get </button>

          {jeopardyQuest && jeopardyQuest.value ? (

               <>{jeopardyQuest.category.title}? </>
          ) : (
               <>??????</>
          )}
          
          </>
     );
}