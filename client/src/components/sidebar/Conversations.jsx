import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';


const Conversations = () => {
  const {loading,conversations}= useGetConversations();
  console.log(loading, conversations)
  
  return (
    <div className='py-2 flex flex-col overflow-auto'>
{/* inga nee map kula {} ipdi use pani iruntha apdi use pana neethan manaul ah return statement tharanu forex iru */}
{/* showagathu ena retun panala ipo paru */}
{/* nee onu return key add panalam ilana () intha brackets use panalam instead of{} only in map */}
      { conversations.map((conversation,idx)=>(
        <Conversation
        key={conversation._id}
        conversation={conversation}
        emoji={getRandomEmoji()}
        lastIdx={idx === conversations.length-1}
        />
))}
        { loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
  )
}

export default Conversations




// STARTER CODE SNIPPET 
// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>
//         <Conversation/>

      
//     </div>
//   )
// }

// export default Conversations
